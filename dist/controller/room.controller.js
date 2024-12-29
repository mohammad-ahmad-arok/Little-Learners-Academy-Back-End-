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
const ApiFeatures_1 = require("../utils/ApiFeatures");
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
            req.body.images.push(filename);
        })));
    }
    next();
}));
exports.getAllRooms = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocuments = yield room_1.Room.countDocuments();
    const feature = new ApiFeatures_1.ApiFeatures(room_1.Room.find({}), req.query);
    feature.Paginate(countDocuments).Filter();
    const { mongooseQuery, pagination } = feature;
    const rooms = yield mongooseQuery;
    res.status(200).json({ status: "Success", pagination, data: rooms });
}));
exports.createRoom = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const room = yield room_1.Room.create(req.body);
    res.status(201).json({ status: "Success", data: room });
}));
exports.getRoom = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const room = yield room_1.Room.findById(id);
    if (!room) {
        return res.status(404).json({ status: "fail", message: "room not found" });
    }
    res.status(200).json({ status: "Success", data: room });
}));
exports.updateRoom = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const room = yield room_1.Room.findByIdAndUpdate(id, req.body, { new: true });
    if (!room) {
        return res.status(404).json({ status: "fail", message: "room not found" });
    }
    res.status(200).json({ status: "Success", data: room });
}));
exports.deleteRoom = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const room = yield room_1.Room.findByIdAndDelete(id);
    if (!room) {
        return res.status(404).json({ status: "fail", message: "room not found" });
    }
    res
        .status(200)
        .json({ status: "Success", message: "room deleted successfully" });
}));
