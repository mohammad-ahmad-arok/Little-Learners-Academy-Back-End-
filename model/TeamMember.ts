import { Schema, model } from 'mongoose';

// TeamMember schema
const teamMemberSchema = new Schema(
  {
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String }, // Store the filename of the uploaded photo
  },
  { timestamps: true }
);

// TeamMember model
const TeamMember = model('TeamMember', teamMemberSchema);

export { TeamMember };
