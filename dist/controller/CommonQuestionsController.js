"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommonQuestion = exports.updateCommonQuestion = exports.createCommonQuestion = exports.getCommonQuestion = exports.getCommonQuestions = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const CommonQuestion_1 = require("../model/CommonQuestion");
const ApiFeatures_1 = require("../utils/ApiFeatures");
exports.getCommonQuestions = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocument = yield CommonQuestion_1.CommonQuestion.countDocuments();
    const feature = new ApiFeatures_1.ApiFeatures(CommonQuestion_1.CommonQuestion.find(), req.query);
    feature.Paginate(countDocument);
    const { mongooseQuery } = feature;
    const commonQuestions = yield mongooseQuery;
    res.status(200).json(commonQuestions);
}));
exports.getCommonQuestion = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const commonQuestion = yield CommonQuestion_1.CommonQuestion.findById(id);
    if (!commonQuestion) {
        return res.status(404).json({ message: "common question not found" });
    }
    res.status(200).json(commonQuestion);
}));
exports.createCommonQuestion = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commonQuestion = new CommonQuestion_1.CommonQuestion({
        question: req.body.question,
        answer: req.body.answer,
    });
    yield commonQuestion.save();
    res.status(201).json(commonQuestion);
}));
exports.updateCommonQuestion = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commonQuestion = yield CommonQuestion_1.CommonQuestion.findByIdAndUpdate(req.params.id, {
        question: req.body.question,
        answer: req.body.answer,
    }, {
        new: true,
        runValidators: true,
    });
    if (!commonQuestion) {
        return res.status(404).json({ message: "common question not found" });
    }
    res.status(200).json(commonQuestion);
}));
exports.deleteCommonQuestion = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commonQuestion = yield CommonQuestion_1.CommonQuestion.findByIdAndDelete(req.params.id);
    if (!commonQuestion) {
        return res.status(404).json({ message: "common question not found" });
    }
    res.status(200).json({ message: "common question deleted successfully" });
}));
