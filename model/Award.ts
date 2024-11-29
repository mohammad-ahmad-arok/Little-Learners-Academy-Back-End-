// models/Award.ts
import mongoose, { Schema, Document } from "mongoose";

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

export default mongoose.model<IAward>("Award", AwardSchema);
