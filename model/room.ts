import mongoose, { Schema } from "mongoose";
import { uploadImageCloudinary } from "../utils/cloudinary";

interface Iroom {
  name: String;
  description: String;
  images:{url:String,public_id:String}[];
}

const roomSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 200,
    },

    images: [
       {
        url: {
          type: String,
        },
        public_id: {
          type: String,
        }
      },
    ],
  },
  { timestamps: true }
);

// const setImagesUrl=async function(doc:Iroom) {

//     let images:Array<String>=[]
//     if(doc.images){
//        for(let image in doc.images){
//          const imageUrl=await uploadImage(`./uploads/room/${doc.images[image]}`);
//          images.push(imageUrl);
//        }
//        doc.images=images;
//       }
// }

// roomSchema.post("save",async function(doc:Iroom){
//    await setImagesUrl(doc)
// });

// roomSchema.post("init",async function(doc:Iroom){
//    await setImagesUrl(doc)
// });

export const Room = mongoose.model<Iroom>("Room", roomSchema);
