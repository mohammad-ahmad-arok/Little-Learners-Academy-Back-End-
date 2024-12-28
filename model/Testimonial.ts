import mongoose, { Schema } from "mongoose";

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

const setImageUrl=function(doc:TestimonialDocument){
  if(doc.image){
      const imageUrl=`${process.env.BASE_URL}/Testimonial/${doc.image}`;
      doc.image=imageUrl
    }
}


testimonialSchema.post("save",function(doc:TestimonialDocument){
  setImageUrl(doc)
});

testimonialSchema.post("init",function(doc:TestimonialDocument){
  setImageUrl(doc)
});

export const Testimonial = mongoose.model<TestimonialDocument>("Testimonial", testimonialSchema);
