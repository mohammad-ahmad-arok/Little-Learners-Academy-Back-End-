"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.createMessage = exports.getMessageById = exports.getAllMessages = void 0;
const messages_1 = __importDefault(require("../model/messages"));
const FactoryHandlers_1 = require("./FactoryHandlers");
// Get all Messages
exports.getAllMessages = (0, FactoryHandlers_1.getAll)(messages_1.default);
// Get a single message
exports.getMessageById = (0, FactoryHandlers_1.getOne)(messages_1.default);
//? Create a new message
exports.createMessage = (0, FactoryHandlers_1.createOne)(messages_1.default);
//! Delete message
exports.deleteMessage = (0, FactoryHandlers_1.deleteOne)(messages_1.default);
