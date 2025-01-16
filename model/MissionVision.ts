// models/MissionVision.ts
import mongoose, { Schema, Document } from "mongoose";

interface IMissionVision extends Document {
  title: string;  // Title for the mission (e.g., "Mission")
  description: string;  // Description containing the mission statement
}

const MissionVisionSchema: Schema = new Schema(
  {
    title: { type: String, required: true ,unique:true},  // Title field (e.g., "Mission")
    description: { type: String, required: true },  // Description field
  },
  { timestamps: true }
);

export default mongoose.model<IMissionVision>("MissionVision", MissionVisionSchema);
