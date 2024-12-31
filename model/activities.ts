import mongoose from 'mongoose';
import { uploadImage } from '../utils/uploadImage';

interface Special {
   name:String,
   description:String,
   image:String
}

const activitiesSchema=new mongoose.Schema({
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


const setImageUrl=async function(doc:Special){
    if(doc.image){
        const imageUrl=await uploadImage(`./uploads/activities/${doc.image}`);
        doc.image=imageUrl
      }
}

activitiesSchema.post("save",async function(doc:Special){
  await  setImageUrl(doc)
});

activitiesSchema.post("init",async function(doc:Special){
   await  setImageUrl(doc)
});



export const activities=mongoose.model('Activities',activitiesSchema);
