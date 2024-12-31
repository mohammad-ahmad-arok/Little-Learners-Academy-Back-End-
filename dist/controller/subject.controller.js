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
exports.deleteSubject = exports.updateSubject = exports.getSubject = exports.createSubject = exports.getAllSubjects = void 0;
const subject_1 = require("../model/subject");
const ApiFeatures_1 = require("../utils/ApiFeatures");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const uploadImage_1 = require("../utils/uploadImage");
exports.getAllSubjects = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocuments = yield subject_1.Subject.countDocuments();
    const feature = new ApiFeatures_1.ApiFeatures(subject_1.Subject.find(), req.query);
    feature.Paginate(countDocuments).Filter();
    const { mongooseQuery, pagination } = feature;
    const subjects = yield mongooseQuery;
    res.status(200).json({ status: "Success", pagination, data: subjects });
}));
exports.createSubject = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = yield subject_1.Subject.create(req.body);
    if (req.file) {
        subject.image = yield (0, uploadImage_1.uploadImage)(req.file.path);
        yield subject.save();
    }
    res.status(201).json({ status: "Success", data: subject });
}));
exports.getSubject = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const subject = yield subject_1.Subject.findById(id);
    if (!subject) {
        return res.status(404).json({ status: "fail", message: "subject not found" });
    }
    res.status(200).json({ status: "Success", data: subject });
}));
exports.updateSubject = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (req.file) {
        req.body.image = yield (0, uploadImage_1.uploadImage)(req.file.path);
    }
    const subject = yield subject_1.Subject.findByIdAndUpdate(id, req.body, { new: true });
    if (!subject) {
        return res.status(404).json({ status: "fail", message: "subject not found" });
    }
    res.status(200).json({ status: "Success", data: subject });
}));
exports.deleteSubject = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const subject = yield subject_1.Subject.findByIdAndDelete(id);
    if (!subject) {
        return res.status(404).json({ status: "fail", message: "subject not found" });
    }
    res.status(200).json({ status: "Success", message: "subject deleted successfully" });
}));
