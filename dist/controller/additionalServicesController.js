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
exports.deleteAdditionalService = exports.updateAdditionalService = exports.getAdditionalService = exports.createAdditionalService = exports.getAllAdditionalServices = void 0;
const AdditionalServices_1 = __importDefault(require("../model/AdditionalServices"));
const ApiFeatures_1 = require("../utils/ApiFeatures");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.getAllAdditionalServices = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocuments = yield AdditionalServices_1.default.countDocuments();
    const feature = new ApiFeatures_1.ApiFeatures(AdditionalServices_1.default.find(), req.query);
    feature.Paginate(countDocuments).Filter();
    const { mongooseQuery, pagination } = feature;
    const additionalServices = yield mongooseQuery;
    res
        .status(200)
        .json({ status: "Success", pagination, data: additionalServices });
}));
exports.createAdditionalService = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { service, price } = req.body;
    if (!service || !price) {
        return res.status(400).json({ status: "fail", message: "feilds are required" });
    }
    const additionalService = yield AdditionalServices_1.default.create(req.body);
    res.status(201).json({ status: "Success", data: additionalService });
}));
exports.getAdditionalService = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const additionalService = yield AdditionalServices_1.default.findById(id);
    if (!additionalService) {
        return res
            .status(404)
            .json({ status: "fail", message: "additionalService not found" });
    }
    res.status(200).json({ status: "Success", data: additionalService });
}));
exports.updateAdditionalService = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const additionalService = yield AdditionalServices_1.default.findByIdAndUpdate(id, req.body, { new: true });
    if (!additionalService) {
        return res
            .status(404)
            .json({ status: "fail", message: "additionalService not found" });
    }
    res.status(200).json({ status: "Success", data: additionalService });
}));
exports.deleteAdditionalService = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const additionalService = yield AdditionalServices_1.default.findByIdAndDelete(id);
    if (!additionalService) {
        return res
            .status(404)
            .json({ status: "fail", message: "additionalService not found" });
    }
    res
        .status(200)
        .json({ status: "Success", message: "additionalService deleted successfully" });
}));
