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
exports.Benefit = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uploadImage_1 = require("../utils/uploadImage");
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
const setImageUrl = function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (doc.icon) {
            const imageUrl = yield (0, uploadImage_1.uploadImage)(`./uploads/subject/${doc.icon}`);
            doc.icon = imageUrl;
        }
    });
};
BenefitSchema.post("save", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield setImageUrl(doc);
    });
});
BenefitSchema.post("init", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield setImageUrl(doc);
    });
});
exports.Benefit = mongoose_1.default.model("Benefit", BenefitSchema);
