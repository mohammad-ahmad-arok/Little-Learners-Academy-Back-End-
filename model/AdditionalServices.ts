import mongoose, { Schema, Document } from 'mongoose';

export interface IAdditionalService extends Document {
  service: string;
  price: string;
}

const AdditionalServiceSchema: Schema = new Schema({
  service: { type: String, required: true },
  price: { type: String, required: true },
});

export default mongoose.model<IAdditionalService>('AdditionalService', AdditionalServiceSchema);
