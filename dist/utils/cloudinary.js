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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeImagesCloudinary = exports.removeImageCloudinary = exports.uploadImageCloudinary = void 0;
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
const uploadImageCloudinary = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cloudinary.uploader.upload(path);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
exports.uploadImageCloudinary = uploadImageCloudinary;
const removeImageCloudinary = (Model, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = yield Model.findById(id);
        if (doc.image.public_id) {
            const result = yield cloudinary.uploader.destroy(doc.image.public_id);
            return result;
        }
        else if (doc.icon.public_id) {
            const result = yield cloudinary.uploader.destroy(doc.icon.public_id);
            return result;
        }
        else if (doc.photo.public_id) {
            const result = yield cloudinary.uploader.destroy(doc.photo.public_id);
            return result;
        }
        return;
    }
    catch (error) {
        console.log(error);
    }
});
exports.removeImageCloudinary = removeImageCloudinary;
const removeImagesCloudinary = (Model, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = yield Model.findById(id);
        if (doc.images) {
            doc.images.forEach((image) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield cloudinary.uploader.destroy(image.public_id);
            }));
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.removeImagesCloudinary = removeImagesCloudinary;
