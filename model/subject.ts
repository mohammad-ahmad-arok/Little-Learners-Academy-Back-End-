import mongoose, { Schema } from 'mongoose';
import { uploadImage } from '../utils/uploadImage';

interface Sub{
    name:String,
    description:String,
    image:String
}

const subjectSchema:Schema=new mongoose.Schema({
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
    image:{
        type:String,
    }
},{timestamps:true})


const setImageUrl=async function(doc:Sub){
    if(doc.image){
        const imageUrl=await uploadImage(`./uploads/subject/${doc.image}`);
        doc.image=imageUrl
      }
}


subjectSchema.post("save",async function(doc:Sub){
     await setImageUrl(doc)
});

subjectSchema.post("init",async function(doc:Sub){
   await  setImageUrl(doc)
});


export const Subject=mongoose.model<Sub>('Subject',subjectSchema);
