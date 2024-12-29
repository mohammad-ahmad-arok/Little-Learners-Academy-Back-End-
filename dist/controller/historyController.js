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
exports.deleteHistory = exports.updateHistory = exports.createHistory = exports.getHistoryById = exports.getAllHistory = void 0;
const History_1 = __importDefault(require("../model/History"));
// Get all history entries
const getAllHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const history = yield History_1.default.find();
        res.status(200).json(history);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching history entries", error });
    }
});
exports.getAllHistory = getAllHistory;
// Get a single history entry by ID
const getHistoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const history = yield History_1.default.findById(id);
        if (!history) {
            res.status(404).json({ message: "History entry not found" });
            return;
        }
        res.status(200).json(history);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching history entry", error });
    }
});
exports.getHistoryById = getHistoryById;
// Create a new history entry
const createHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { year, title, description } = req.body;
        const newHistory = new History_1.default({ year, title, description });
        yield newHistory.save();
        res.status(201).json(newHistory);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating history entry", error });
    }
});
exports.createHistory = createHistory;
// Update an existing history entry by ID
const updateHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { year, title, description } = req.body;
        const updatedHistory = yield History_1.default.findByIdAndUpdate(id, { year, title, description }, { new: true });
        if (!updatedHistory) {
            res.status(404).json({ message: "History entry not found" });
            return;
        }
        res.status(200).json(updatedHistory);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating history entry", error });
    }
});
exports.updateHistory = updateHistory;
// Delete a history entry by ID
const deleteHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedHistory = yield History_1.default.findByIdAndDelete(id);
        if (!deletedHistory) {
            res.status(404).json({ message: "History entry not found" });
            return;
        }
        res.status(200).json({ message: "History entry deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting history entry", error });
    }
});
exports.deleteHistory = deleteHistory;
