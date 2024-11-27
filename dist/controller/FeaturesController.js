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
exports.deleteFeature = exports.updateFeature = exports.createFeature = exports.getFeature = exports.getFeatures = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Feature_1 = require("../model/Feature");
const ApiFeatures_1 = require("../utils/ApiFeatures");
exports.getFeatures = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feature = new ApiFeatures_1.ApiFeatures(Feature_1.Feature.find(), req.query);
    feature.Paginate();
    const { mongooseQuery } = feature;
    const features = yield mongooseQuery;
    res.status(200).json(features);
}));
exports.getFeature = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const feature = yield Feature_1.Feature.findById(id);
    if (!feature) {
        return res.status(404).json({ message: "feature not found" });
    }
    res.status(200).json(feature);
}));
exports.createFeature = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const feature = new Feature_1.Feature({
        title: req.body.title,
        description: req.body.description,
        icon: `http://localhost:5000/${req.file.filename}`
    });
    yield feature.save();
    res.status(201).json(feature);
}));
exports.updateFeature = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feature = yield Feature_1.Feature.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        icon: `http://localhost:5000/${req.file.filename}`
    }, {
        new: true,
        runValidators: true,
    });
    if (!feature) {
        return res.status(404).json({ message: "feature not found" });
    }
    res.status(200).json(feature);
}));
exports.deleteFeature = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feature = yield Feature_1.Feature.findByIdAndDelete(req.params.id);
    if (!feature) {
        return res.status(404).json({ message: "feature not found" });
    }
    res.status(200).json({ message: "feature deleted successfully" });
}));
