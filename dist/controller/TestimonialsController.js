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
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonial = exports.getTestimonials = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Testimonial_1 = require("../model/Testimonial");
const ApiFeatures_1 = require("../utils/ApiFeatures");
exports.getTestimonials = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocument = yield Testimonial_1.Testimonial.countDocuments();
    const feature = new ApiFeatures_1.ApiFeatures(Testimonial_1.Testimonial.find(), req.query);
    feature.Paginate(countDocument);
    const { mongooseQuery } = feature;
    const testimonials = yield mongooseQuery;
    res.status(200).json(testimonials);
}));
exports.getTestimonial = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const testimonial = yield Testimonial_1.Testimonial.findById(id);
    if (!testimonial) {
        return res.status(404).json({ message: "testimonial not found" });
    }
    res.status(200).json(testimonial);
}));
exports.createTestimonial = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = new Testimonial_1.Testimonial({
        name: req.body.name,
        description: req.body.description,
        evaluation: req.body.evaluation,
        image: `http://localhost:5000/${req.file.filename}`
    });
    yield testimonial.save();
    res.status(201).json(testimonial);
}));
exports.updateTestimonial = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = yield Testimonial_1.Testimonial.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        evaluation: req.body.evaluation,
        image: `http://localhost:5000/${req.file.filename}`
    }, {
        new: true,
        runValidators: true,
    });
    if (!testimonial) {
        return res.status(404).json({ message: "testimonial not found" });
    }
    res.status(200).json(testimonial);
}));
exports.deleteTestimonial = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const testimonial = yield Testimonial_1.Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
        return res.status(404).json({ message: "testimonial not found" });
    }
    res.status(200).json({ message: "testimonial deleted successfully" });
}));
