import { Schema, model } from "mongoose";
import { uploadImageCloudinary } from "../utils/cloudinary";

interface IMember {
  name: string;
  qualification: string;
  description: string;
  email: string;
  photo: {url:string,public_id:string};
}

// TeamMember schema
const teamMemberSchema = new Schema<IMember>(
  {
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    photo: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      }
    }, // Store the filename of the uploaded photo
  },
  { timestamps: true }
);

// const setImageUrl=async function(doc:IMember){
//     if(doc.photo){
//         const imageUrl=await uploadImage(`./uploads/subject/${doc.photo}`);
//         doc.photo=imageUrl
//       }
// }

// teamMemberSchema.post("save",async function(doc:IMember){
//      await setImageUrl(doc)
// });

// teamMemberSchema.post("init",async function(doc:IMember){
//    await  setImageUrl(doc)
// });

// TeamMember model
const TeamMember = model("TeamMember", teamMemberSchema);

export { TeamMember };
