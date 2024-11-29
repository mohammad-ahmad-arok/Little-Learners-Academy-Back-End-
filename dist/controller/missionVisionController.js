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
exports.deleteMissionVision = exports.updateMissionVision = exports.createMissionVision = exports.getMissionVision = void 0;
const MissionVision_1 = __importDefault(require("../model/MissionVision"));
// Get the mission & vision statement
const getMissionVision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const missionVision = yield MissionVision_1.default.findOne();
        if (!missionVision) {
            res.status(404).json({ message: "Mission and Vision not found" });
            return;
        }
        res.status(200).json(missionVision);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching mission and vision", error });
    }
});
exports.getMissionVision = getMissionVision;
// Create a new mission & vision statement
const createMissionVision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const newMissionVision = new MissionVision_1.default({ title, description });
        yield newMissionVision.save();
        res.status(201).json(newMissionVision);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating mission and vision", error });
    }
});
exports.createMissionVision = createMissionVision;
// Update the mission & vision statement
const updateMissionVision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        // Check if the mission & vision exists
        const updatedMissionVision = yield MissionVision_1.default.findOneAndUpdate({}, { title, description }, { new: true });
        if (!updatedMissionVision) {
            res.status(404).json({ message: "Mission and Vision not found" });
            return;
        }
        res.status(200).json(updatedMissionVision);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating mission and vision", error });
    }
});
exports.updateMissionVision = updateMissionVision;
// Delete the mission & vision statement
const deleteMissionVision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMissionVision = yield MissionVision_1.default.findOneAndDelete();
        if (!deletedMissionVision) {
            res.status(404).json({ message: "Mission and Vision not found" });
            return;
        }
        res.status(200).json({ message: "Mission and Vision deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting mission and vision", error });
    }
});
exports.deleteMissionVision = deleteMissionVision;
