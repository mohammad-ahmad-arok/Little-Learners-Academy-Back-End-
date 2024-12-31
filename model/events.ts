import mongoose from 'mongoose';
import { uploadImage } from '../utils/uploadImage';

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


// const setImageUrl=async function(doc:Sub){
//     if(doc.image){
//         const imageUrl=await uploadImage(`./uploads/events/${doc.image}`);
//         doc.image=imageUrl
//       }
// }


// eventSchema.post("save",async function(doc:Sub){
//     await setImageUrl(doc)
// });

// eventSchema.post("init",async function(doc:Sub){
//    await  setImageUrl(doc)
// });


export const event=mongoose.model('Event',eventSchema);
