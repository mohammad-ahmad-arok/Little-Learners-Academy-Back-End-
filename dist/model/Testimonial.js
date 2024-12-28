"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testimonial = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const testimonialSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    evaluation: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.Testimonial = mongoose_1.default.model("Testimonial", testimonialSchema);
