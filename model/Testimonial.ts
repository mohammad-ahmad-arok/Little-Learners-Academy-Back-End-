import mongoose, { Schema } from "mongoose";
import { uploadImage } from "../utils/uploadImage";

interface TestimonialDocument {
  name: string;
  description: string;
  image: string;
  evaluation: number;
}
const testimonialSchema:Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    evaluation: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const setImageUrl=async function(doc:TestimonialDocument){
  if(doc.image){
      const imageUrl=await uploadImage(`./uploads/Testimonial/${doc.image}`);
      doc.image=imageUrl
    }
}


testimonialSchema.post("save",async function(doc:TestimonialDocument){
  await setImageUrl(doc)
});

testimonialSchema.post("init",async function(doc:TestimonialDocument){
  await setImageUrl(doc)
});

export const Testimonial = mongoose.model<TestimonialDocument>("Testimonial", testimonialSchema);
