import mongoose, { Schema, Document } from 'mongoose';

export interface IAdmissionProcess extends Document {
  step: string;
  description: string;
}

const AdmissionProcessSchema: Schema = new Schema({
  step: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IAdmissionProcess>('AdmissionProcess', AdmissionProcessSchema);
