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
exports.deleteEvent = exports.updateEvent = exports.getEvent = exports.createEvent = exports.getAllEvents = void 0;
const events_1 = require("../model/events");
const ApiFeatures_1 = require("../utils/ApiFeatures");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.getAllEvents = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocuments = yield events_1.event.countDocuments();
    const Event = new ApiFeatures_1.ApiFeatures(events_1.event.find(), req.query);
    Event.Paginate(countDocuments).Filter();
    const { mongooseQuery, pagination } = Event;
    const Events = yield mongooseQuery;
    res.status(200).json({ status: "Success", pagination, data: Events });
}));
exports.createEvent = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Event = yield events_1.event.create(req.body);
    if (req.file) {
        Event.image = req.file.filename;
        yield Event.save();
    }
    res.status(201).json({ status: "Success", data: Event });
}));
exports.getEvent = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Event = yield events_1.event.findById(id);
    if (!Event) {
        return res.status(404).json({ status: "fail", message: "Event not found" });
    }
    res.status(200).json({ status: "Success", data: Event });
}));
exports.updateEvent = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Event = yield events_1.event.findByIdAndUpdate(id, req.body, { new: true });
    if (!Event) {
        return res.status(404).json({ status: "fail", message: "Event not found" });
    }
    res.status(200).json({ status: "Success", data: Event });
}));
exports.deleteEvent = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Event = yield events_1.event.findByIdAndDelete(id);
    if (!Event) {
        return res.status(404).json({ status: "fail", message: "Event not found" });
    }
    res.status(200).json({ status: "Success", message: "Event deleted successfully" });
}));
