import mongoose, { Schema } from "mongoose";
import { uploadImageCloudinary } from "../utils/cloudinary";
import path from "path";

interface TestimonialDocument {
  name: string;
  description: string;
  image: string;
  evaluation: number;
}
const testimonialSchema: Schema = new mongoose.Schema(
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
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    evaluation: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Testimonial = mongoose.model<TestimonialDocument>(
  "Testimonial",
  testimonialSchema
);
