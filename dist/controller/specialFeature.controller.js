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
exports.deleteFeature = exports.updateFeature = exports.getFeature = exports.createFeature = exports.getAllFeatures = void 0;
const specialFeature_1 = require("../model/specialFeature");
const ApiFeatures_1 = require("../utils/ApiFeatures");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const uploadImage_1 = require("../utils/uploadImage");
exports.getAllFeatures = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocument = yield specialFeature_1.SpecialFeature.countDocuments();
    const feature = new ApiFeatures_1.ApiFeatures(specialFeature_1.SpecialFeature.find(), req.query);
    feature.Paginate(countDocument).Filter();
    const { mongooseQuery, pagination } = feature;
    const features = yield mongooseQuery;
    res.status(200).json({ status: "Success", pagination, data: features });
}));
exports.createFeature = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feature = yield specialFeature_1.SpecialFeature.create(req.body);
    if (req.file) {
        feature.image = yield (0, uploadImage_1.uploadImage)(req.file.path);
        console.log(req.file);
        yield feature.save();
    }
    res.status(201).json({ status: "Success", data: feature });
}));
exports.getFeature = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const feature = yield specialFeature_1.SpecialFeature.findById(id);
    if (!feature) {
        return res.status(404).json({ status: "fail", message: "Feature not found" });
    }
    res.status(200).json({ status: "Success", data: feature });
}));
exports.updateFeature = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (req.file) {
        req.body.image = yield (0, uploadImage_1.uploadImage)(req.file.path);
    }
    const feature = yield specialFeature_1.SpecialFeature.findByIdAndUpdate(id, req.body, { new: true });
    if (!feature) {
        return res.status(404).json({ status: "fail", message: "Feature not found" });
    }
    res.status(200).json({ status: "Success", data: feature });
}));
exports.deleteFeature = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const feature = yield specialFeature_1.SpecialFeature.findByIdAndDelete(id);
    if (!feature) {
        return res.status(404).json({ status: "fail", message: "Feature not found" });
    }
    res.status(200).json({ status: "Success", message: "Feature deleted successfully" });
}));
