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
exports.deleteBenefit = exports.updateBenefit = exports.createBenefit = exports.getBenefit = exports.getBenefits = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Benefit_1 = require("../model/Benefit");
const ApiFeatures_1 = require("../utils/ApiFeatures");
const cloudinary_1 = require("../utils/cloudinary");
exports.getBenefits = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocument = yield Benefit_1.Benefit.countDocuments();
    const feature = new ApiFeatures_1.ApiFeatures(Benefit_1.Benefit.find(), req.query);
    feature.Paginate(countDocument);
    const { mongooseQuery } = feature;
    const Benefits = yield mongooseQuery;
    res.status(200).json(Benefits);
}));
exports.getBenefit = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const benefit = yield Benefit_1.Benefit.findById(id);
    if (!benefit) {
        return res.status(404).json({ message: "benefit not found" });
    }
    res.status(200).json(benefit);
}));
exports.createBenefit = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.icon) {
        req.body.icon = req.icon;
    }
    const benefit = yield Benefit_1.Benefit.create(req.body);
    res.status(201).json(benefit);
}));
exports.updateBenefit = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.file) {
        yield (0, cloudinary_1.removeImageCloudinary)(Benefit_1.Benefit, req.params.id);
    }
    if (req.icon) {
        req.body.icon = req.icon;
    }
    const benefit = yield Benefit_1.Benefit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!benefit) {
        return res.status(404).json({ message: "benefit not found" });
    }
    res.status(200).json(benefit);
}));
exports.deleteBenefit = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, cloudinary_1.removeImageCloudinary)(Benefit_1.Benefit, id);
    const benefit = yield Benefit_1.Benefit.findByIdAndDelete(req.params.id);
    if (!benefit) {
        return res.status(404).json({ message: "benefit not found" });
    }
    res.status(200).json({ message: "benefit deleted successfully" });
}));
