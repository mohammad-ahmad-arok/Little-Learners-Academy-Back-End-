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
exports.getAllInquiries = exports.createInquiry = void 0;
const Inquiry_1 = __importDefault(require("../model/Inquiry"));
const createInquiry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    try {
        const inquiry = yield Inquiry_1.default.create({ name, email, message });
        res.status(201).json(inquiry);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create inquiry' });
    }
});
exports.createInquiry = createInquiry;
const getAllInquiries = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiries = yield Inquiry_1.default.find();
        res.status(200).json(inquiries);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch inquiries' });
    }
});
exports.getAllInquiries = getAllInquiries;
