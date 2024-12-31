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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
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
        const { title, description } = req.body;
        // Check if required fields are present
        if (!title || !description || !req.file) {
            res.status(400).json({ message: 'Missing required fields' }); // No return here
            return; // Only stop further execution, don't "return res"
        }
        // Save to database
        const newAward = yield Award_1.default.create(req.body);
        if (req.file) {
            newAward.icon = req.file.filename;
            yield newAward.save();
        }
        res.status(201).json({
            message: 'Team member created successfully!',
            data: newAward,
        }); // Again, no explicit `return`
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
        if (req.file) {
            req.body.icon = req.file.filename;
        }
        const existingAward = yield Award_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!existingAward) {
            res.status(404).json({ message: 'Team member not found' });
            return;
        }
        if (req.file && existingAward.icon) {
            const oldPhotoPath = path_1.default.join('uploads/member', existingAward.icon);
            if (fs_1.default.existsSync(oldPhotoPath))
                fs_1.default.unlinkSync(oldPhotoPath);
        }
        res.status(200).json({ data: existingAward });
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
