

import express from "express";


import {getCommonQuestion,getCommonQuestions,createCommonQuestion,deleteCommonQuestion,updateCommonQuestion} from "../controller/CommonQuestionsController"

export const commonQuestionRouter = express.Router();

commonQuestionRouter.route("/").get(getCommonQuestions).post(createCommonQuestion);


commonQuestionRouter.route("/:id").put(updateCommonQuestion).get(getCommonQuestion).delete(deleteCommonQuestion);
    


  
  

