import mongoose, { Schema } from 'mongoose';
import { uploadImage } from '../utils/uploadImage';

interface Special {
   name:String,
   description:String,
   image:String
}

const specialFeatureSchema:Schema=new mongoose.Schema({
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

// specialFeatureSchema.pre(/^find/, function(next){
//    this.select("-__v");
//    next();
// })

const setImageUrl=async function(doc:Special){
    if(doc.image){
        const imageUrl=await uploadImage(`./uploads/specialFeature/${doc.image}`);
        doc.image=imageUrl
      }
}

specialFeatureSchema.post("save",async function(doc:Special){
    await setImageUrl(doc)
});

specialFeatureSchema.post("init",async function(doc:Special){
   await setImageUrl(doc)
});



export const SpecialFeature=mongoose.model<Special>('Feature',specialFeatureSchema);
