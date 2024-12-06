import mongoose, { Schema, Document } from 'mongoose';

export interface IFeeStructure extends Document {
  program: string;
  ageGroup: string;
  annualTuition: string;
  registrationFee: string;
  activityFee: string;
}

const FeeStructureSchema: Schema = new Schema({
  program: { type: String, required: true },
  ageGroup: { type: String, required: true },
  annualTuition: { type: String, required: true },
  registrationFee: { type: String, required: true },
  activityFee: { type: String, required: true },
});

export default mongoose.model<IFeeStructure>('FeeStructure', FeeStructureSchema);
