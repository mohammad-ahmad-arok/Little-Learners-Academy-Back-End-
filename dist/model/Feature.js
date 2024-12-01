"use strict";
// import mongoose, { Schema, Document } from "mongoose";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Benefit = void 0;
// interface FeatureInterface extends mongoose.Document {
//   title: string;
//   description: string;
//   icon: string;
// }
// const featureSchema = new mongoose.Schema<FeatureInterface>(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     icon: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
// export const Feature = mongoose.model("Feature", featureSchema);
const mongoose_1 = __importDefault(require("mongoose"));
const BenefitSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.Benefit = mongoose_1.default.model("Benefit", BenefitSchema);
