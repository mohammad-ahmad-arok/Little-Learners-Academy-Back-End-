import mongoose from "mongoose";

interface TestimonialDocument extends mongoose.Document {
  name: string;
  description: string;
  image: string;
  evaluation: number;
}
const testimonialSchema = new mongoose.Schema<TestimonialDocument>(
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

export const Testimonial = mongoose.model("Testimonial", testimonialSchema);
