// models/History.ts
import mongoose, { Schema, Document } from "mongoose";

interface IHistory extends Document {
  year: number;  // e.g. 2023
  title: string;  // e.g. "Resilience and Future Horizons"
  description: string;  // e.g. "Adapting to new challenges..."
}

const HistorySchema: Schema = new Schema(
  {
    year: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IHistory>("History", HistorySchema);
