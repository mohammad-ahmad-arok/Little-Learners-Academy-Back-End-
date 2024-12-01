import mongoose from "mongoose";
 interface CommonQuestionDocument  {
    question: string;
    answer: string;
  }

const commonQuestionSchema = new mongoose.Schema<CommonQuestionDocument>(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const CommonQuestion = mongoose.model("CommonQuestion", commonQuestionSchema);


