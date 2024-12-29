"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonQuestion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commonQuestionSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.CommonQuestion = mongoose_1.default.model("CommonQuestion", commonQuestionSchema);
