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
exports.deleteMessage = exports.createMessage = exports.getMessageById = exports.getAllMessages = void 0;
const messages_1 = __importDefault(require("../model/messages"));
// Get all Messages
const getAllMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield messages_1.default.find();
        res.status(200).json(messages);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching messages", error });
    }
});
exports.getAllMessages = getAllMessages;
// Get a single message
const getMessageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const message = yield messages_1.default.findById(id);
        if (!message) {
            res.status(404).json({ message: "message not found" });
            return;
        }
        res.status(200).json(message);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching message", error });
    }
});
exports.getMessageById = getMessageById;
//? Create a new message
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ParentName, EmailAddress, PhoneNumber, StudentName, StudentAge, ProgramOfIntrest, Message, } = req.body;
        const newMessage = new messages_1.default({
            ParentName,
            EmailAddress,
            PhoneNumber,
            StudentName,
            StudentAge,
            ProgramOfIntrest,
            Message,
        });
        yield newMessage.save();
        res.status(201).json(newMessage);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating Message", error });
    }
});
exports.createMessage = createMessage;
//! Delete message
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedMessage = yield messages_1.default.findByIdAndDelete(id);
        if (!deletedMessage) {
            res.status(404).json({ message: "Message not found" });
            return;
        }
        res.status(200).json({ message: "Message deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting Message", error });
    }
});
exports.deleteMessage = deleteMessage;
