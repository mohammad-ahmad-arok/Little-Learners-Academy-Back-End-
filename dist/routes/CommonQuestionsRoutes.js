"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonQuestionRouter = void 0;
const express_1 = __importDefault(require("express"));
const CommonQuestionsController_1 = require("../controller/CommonQuestionsController");
const FAQValidator_1 = require("../utils/validator/FAQValidator");
exports.commonQuestionRouter = express_1.default.Router();
exports.commonQuestionRouter
    .route("/")
    .get(CommonQuestionsController_1.getCommonQuestions)
    .post(FAQValidator_1.createFaqValidator, CommonQuestionsController_1.createCommonQuestion);
exports.commonQuestionRouter
    .route("/:id")
    .put(FAQValidator_1.updateFaqValidator, CommonQuestionsController_1.updateCommonQuestion)
    .get(FAQValidator_1.getFaqValidator, CommonQuestionsController_1.getCommonQuestion)
    .delete(FAQValidator_1.deleteFaqValidator, CommonQuestionsController_1.deleteCommonQuestion);
