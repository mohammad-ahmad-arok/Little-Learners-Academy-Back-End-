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
exports.Room = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uploadImage_1 = require("../utils/uploadImage");
const roomSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    images: [String]
}, { timestamps: true });
const setImagesUrl = function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        let images = [];
        if (doc.images) {
            doc.images.forEach((image) => __awaiter(this, void 0, void 0, function* () {
                const imageUrl = yield (0, uploadImage_1.uploadImage)(`./uploads/room/${image}`);
                images.push(imageUrl);
            }));
            doc.images = images;
        }
    });
};
roomSchema.post("save", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield setImagesUrl(doc);
    });
});
roomSchema.post("init", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield setImagesUrl(doc);
    });
});
exports.Room = mongoose_1.default.model('Room', roomSchema);
