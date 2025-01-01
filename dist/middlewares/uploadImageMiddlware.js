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
const cloudinary_1 = require("../utils/cloudinary");
const fs_1 = __importDefault(require("fs"));
const uploadImage = (imageOrIcon) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (req.file) {
            try {
                const result = yield (0, cloudinary_1.uploadImageCloudinary)(req.file.path);
                if (imageOrIcon == "image") {
                    req.image = {
                        url: result.secure_url,
                        public_id: result.public_id,
                    };
                }
                else if (imageOrIcon == "icon") {
                    req.icon = {
                        url: result.secure_url,
                        public_id: result.public_id,
                    };
                }
                else if (imageOrIcon == "photo") {
                    req.photo = {
                        url: result.secure_url,
                        public_id: result.public_id,
                    };
                }
                fs_1.default.unlinkSync(req.file.path);
            }
            catch (error) {
                console.log(error);
            }
        }
        next();
    });
};
exports.default = uploadImage;
