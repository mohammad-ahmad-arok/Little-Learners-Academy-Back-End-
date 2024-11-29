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
exports.deleteAward = exports.updateAward = exports.createAward = exports.getAwardById = exports.getAllAwards = void 0;
const Award_1 = __importDefault(require("../model/Award"));
// Get all awards and recognitions
const getAllAwards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const awards = yield Award_1.default.find();
        res.status(200).json(awards);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching awards", error });
    }
});
exports.getAllAwards = getAllAwards;
// Get a single award by ID
const getAwardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const award = yield Award_1.default.findById(id);
        if (!award) {
            res.status(404).json({ message: "Award not found" });
            return;
        }
        res.status(200).json(award);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching award", error });
    }
});
exports.getAwardById = getAwardById;
// Create a new award
const createAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, icon } = req.body;
        const newAward = new Award_1.default({ title, description, icon });
        yield newAward.save();
        res.status(201).json(newAward);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating award", error });
    }
});
exports.createAward = createAward;
// Update an existing award by ID
const updateAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description, icon } = req.body;
        const updatedAward = yield Award_1.default.findByIdAndUpdate(id, { title, description, icon }, { new: true });
        if (!updatedAward) {
            res.status(404).json({ message: "Award not found" });
            return;
        }
        res.status(200).json(updatedAward);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating award", error });
    }
});
exports.updateAward = updateAward;
// Delete an award by ID
const deleteAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedAward = yield Award_1.default.findByIdAndDelete(id);
        if (!deletedAward) {
            res.status(404).json({ message: "Award not found" });
            return;
        }
        res.status(200).json({ message: "Award deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting award", error });
    }
});
exports.deleteAward = deleteAward;
