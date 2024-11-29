import mongoose, { Schema } from "mongoose";

interface messages {
  ParentName: string;
  EmailAddress: string;
  PhoneNumber: string;
  StudentName: string;
  StudentAge: string;
  ProgramOfIntrest: string;
  Message: string;
}

const MessagesSchema: Schema = new Schema(
  {
    ParentName: { type: String, required: true },
    EmailAddress: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    StudentName: { type: String, required: true },
    StudentAge: { type: String, required: true },
    ProgramOfIntrest: { type: String, required: true },
    Message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<messages>("Messages", MessagesSchema);
