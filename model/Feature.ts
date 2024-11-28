import mongoose, { Schema, Document } from "mongoose";

interface FeatureInterface extends Document {
  title: string;
  description: string;
  icon: string;
}

const featureSchema = new mongoose.Schema<FeatureInterface>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Feature = mongoose.model("Feature", featureSchema);





