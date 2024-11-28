"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonQuestionRouter = void 0;
const express_1 = __importDefault(require("express"));
const CommonQuestionsController_1 = require("../controller/CommonQuestionsController");
exports.commonQuestionRouter = express_1.default.Router();
exports.commonQuestionRouter.route("/").get(CommonQuestionsController_1.getCommonQuestions).post(CommonQuestionsController_1.createCommonQuestion);
exports.commonQuestionRouter.route("/:id").put(CommonQuestionsController_1.updateCommonQuestion).get(CommonQuestionsController_1.getCommonQuestion).delete(CommonQuestionsController_1.deleteCommonQuestion);
