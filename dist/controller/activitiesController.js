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
exports.deleteActivity = exports.updateActivity = exports.getActivity = exports.createActivity = exports.getAllActivities = void 0;
const activities_1 = require("../model/activities");
const ApiFeatures_1 = require("../utils/ApiFeatures");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const cloudinary_1 = require("../utils/cloudinary");
exports.getAllActivities = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocument = yield activities_1.activities.countDocuments();
    const Activity = new ApiFeatures_1.ApiFeatures(activities_1.activities.find(), req.query);
    Activity.Paginate(countDocument).Filter();
    const { mongooseQuery, pagination } = Activity;
    const Activities = yield mongooseQuery;
    res.status(200).json({ status: "Success", pagination, data: Activities });
}));
exports.createActivity = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.image) {
        req.body.image = req.image;
    }
    const Activity = yield activities_1.activities.create(req.body);
    res.status(201).json({ status: "Success", data: Activity });
}));
exports.getActivity = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Activity = yield activities_1.activities.findById(id);
    if (!Activity) {
        return res
            .status(404)
            .json({ status: "fail", message: "Feature not found" });
    }
    res.status(200).json({ status: "Success", data: Activity });
}));
exports.updateActivity = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (req.file) {
        yield (0, cloudinary_1.removeImageCloudinary)(activities_1.activities, id);
    }
    if (req.image) {
        req.body.image = req.image;
    }
    const Activity = yield activities_1.activities.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if (!Activity) {
        return res
            .status(404)
            .json({ status: "fail", message: "Feature not found" });
    }
    res.status(200).json({ status: "Success", data: Activity });
}));
exports.deleteActivity = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, cloudinary_1.removeImageCloudinary)(activities_1.activities, id);
    const Activity = yield activities_1.activities.findByIdAndDelete(id);
    if (!Activity) {
        return res
            .status(404)
            .json({ status: "fail", message: "Activity not found" });
    }
    res
        .status(200)
        .json({ status: "Success", message: "Activity deleted successfully" });
}));
