import mongoose from 'mongoose';

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


const setImageUrl=function(doc:Special){
    if(doc.image){
        const imageUrl=`${process.env.BASE_URL}/activities/${doc.image}`;
        doc.image=imageUrl
      }
}

activitiesSchema.post("save",function(doc:Special){
    setImageUrl(doc)
});

activitiesSchema.post("init",function(doc:Special){
    setImageUrl(doc)
});



export const activities=mongoose.model('Activities',activitiesSchema);
