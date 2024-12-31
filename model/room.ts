import mongoose, { Schema } from 'mongoose';
import { uploadImage } from '../utils/uploadImage';

interface Iroom {
    name:String,
    description:String,
    images:Array<String>
}


const roomSchema:Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:50
    },
    description:{
        type:String,
        required:true,
        minlength:10,
        maxlength:200
    },

    images:[String]

},{timestamps:true})


const setImagesUrl=function(doc:Iroom) {
    
    let images:Array<String>=[]
    if(doc.images){
        doc.images.forEach(async image=>{
            const imageUrl =await uploadImage(`./uploads/room/${image}`);
            images.push(imageUrl);
        })
        doc.images=images
      }
}


roomSchema.post("save",function(doc:Iroom){
    setImagesUrl(doc)
});

roomSchema.post("init",function(doc:Iroom){
    setImagesUrl(doc)
});


export const Room=mongoose.model<Iroom>('Room',roomSchema);

