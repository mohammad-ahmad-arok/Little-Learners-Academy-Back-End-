import mongoose from 'mongoose';

interface Sub{
    name:String,
    description:String,
    image:String
}

const eventSchema=new mongoose.Schema({
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


const setImageUrl=function(doc:Sub){
    if(doc.image){
        const imageUrl=`${process.env.BASE_URL}/events/${doc.image}`;
        doc.image=imageUrl
      }
}


eventSchema.post("save",function(doc:Sub){
    setImageUrl(doc)
});

eventSchema.post("init",function(doc:Sub){
    setImageUrl(doc)
});


export const event=mongoose.model('Event',eventSchema);
