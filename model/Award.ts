// models/Award.ts
import mongoose, { Schema, Document } from "mongoose";

import {uploadImage} from "../utils/uploadImage"

interface IAward extends Document {
  title: string;       // e.g. "Outstanding Early Childhood Education Award"
  description: string; // e.g. "Presented by the National Association for the Education of Young Children..."
  icon: string;        // URL or path to an icon representing the award
}

const AwardSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
  },
  { timestamps: true }
);

const setImageUrl=async function(doc:IAward){
    if(doc.icon){
        const imageUrl=await uploadImage(`./uploads/subject/${doc.icon}`);
        doc.icon=imageUrl
      }
}


AwardSchema.post("save",async function(doc:IAward){
     await setImageUrl(doc)
});

AwardSchema.post("init",async function(doc:IAward){
   await  setImageUrl(doc)
});

export default mongoose.model<IAward>("Award", AwardSchema);
