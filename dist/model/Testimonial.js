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
const setImageUrl = function (doc) {
    if (doc.image) {
        const imageUrl = `${process.env.BASE_URL}/Testimonial/${doc.image}`;
        doc.image = imageUrl;
    }
};
testimonialSchema.post("save", function (doc) {
    setImageUrl(doc);
});
testimonialSchema.post("init", function (doc) {
    setImageUrl(doc);
});
exports.Testimonial = mongoose_1.default.model("Testimonial", testimonialSchema);
