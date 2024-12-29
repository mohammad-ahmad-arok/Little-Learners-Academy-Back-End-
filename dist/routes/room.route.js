"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const roomValidator_1 = require("../utils/validator/roomValidator");
const ApiError_1 = require("../utils/ApiError");
const storage = multer_1.default.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    }
    else {
        cb(new ApiError_1.ApiError("Allowed file only image", 400), false);
    }
};
const upload = (0, multer_1.default)({ storage, fileFilter });
const room_controller_1 = require("../controller/room.controller");
exports.roomRouter = express_1.default.Router();
exports.roomRouter
    .route("/")
    .get(room_controller_1.getAllRooms)
    .post(upload.fields([
    {
        name: "images",
        maxCount: 10
    }
]), room_controller_1.processImages, roomValidator_1.createRoomValidator, room_controller_1.createRoom);
exports.roomRouter
    .route("/:id")
    .get(roomValidator_1.getRoomValidator, room_controller_1.getRoom)
    .put(upload.fields([
    {
        name: "images",
        maxCount: 10
    }
]), room_controller_1.processImages, roomValidator_1.updateRoomValidator, room_controller_1.updateRoom)
    .delete(roomValidator_1.deleteRoomValidator, room_controller_1.deleteRoom);
