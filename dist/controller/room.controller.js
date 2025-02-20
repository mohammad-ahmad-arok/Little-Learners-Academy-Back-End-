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
exports.deleteRoom = exports.updateRoom = exports.getRoom = exports.createRoom = exports.getAllRooms = exports.processImages = void 0;
const room_1 = require("../model/room");
const sharp_1 = __importDefault(require("sharp"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const cloudinary_1 = require("../utils/cloudinary");
const FactoryHandlers_1 = require("./FactoryHandlers");
exports.processImages = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.files);
    req.body.images = [];
    if (req.files.images) {
        yield Promise.all(req.files.images.map((image, index) => __awaiter(void 0, void 0, void 0, function* () {
            const filename = `room-${Date.now()}-${index}.jpeg`;
            yield (0, sharp_1.default)(image.buffer)
                .resize(400, 400)
                .toFormat("jpeg")
                .jpeg({ quality: 100 })
                .toFile(`uploads/room/${filename}`);
            const result = yield (0, cloudinary_1.uploadImageCloudinary)(`./uploads/room/${filename}`);
            // fs.unlinkSync(path.join(__dirname,`/uploads/room/${filename}`));
            req.body.images.push({
                url: result.secure_url,
                public_id: result.public_id,
            });
        })));
    }
    next();
}));
exports.getAllRooms = (0, FactoryHandlers_1.getAll)(room_1.Room);
exports.createRoom = (0, FactoryHandlers_1.createOne)(room_1.Room);
exports.getRoom = (0, FactoryHandlers_1.getOne)(room_1.Room);
exports.updateRoom = (0, FactoryHandlers_1.updateOne)(room_1.Room);
exports.deleteRoom = (0, FactoryHandlers_1.deleteOne)(room_1.Room);
