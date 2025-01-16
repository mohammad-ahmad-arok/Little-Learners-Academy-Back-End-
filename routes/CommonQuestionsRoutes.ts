import express from "express";

import {
  getCommonQuestion,
  getCommonQuestions,
  createCommonQuestion,
  deleteCommonQuestion,
  updateCommonQuestion,
} from "../controller/CommonQuestionsController";

import {
  createFaqValidator,
  getFaqValidator,
  updateFaqValidator,
  deleteFaqValidator,
} from "../utils/validator/FAQValidator";

export const commonQuestionRouter = express.Router();

commonQuestionRouter
  .route("/")
  .get(getCommonQuestions)
  .post(createFaqValidator, createCommonQuestion);

commonQuestionRouter
  .route("/:id")
  .put(updateFaqValidator, updateCommonQuestion)
  .get(getFaqValidator, getCommonQuestion)
  .delete(deleteFaqValidator, deleteCommonQuestion);
