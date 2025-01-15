"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMissionVision = exports.updateMissionVision = exports.createMissionVision = exports.getMissionVision = void 0;
const MissionVision_1 = __importDefault(require("../model/MissionVision"));
const FactoryHandlers_1 = require("./FactoryHandlers");
// Get the mission & vision statement
exports.getMissionVision = (0, FactoryHandlers_1.getAll)(MissionVision_1.default);
// Create a new mission & vision statement
exports.createMissionVision = (0, FactoryHandlers_1.createOne)(MissionVision_1.default);
// Update the mission & vision statement
exports.updateMissionVision = (0, FactoryHandlers_1.updateOne)(MissionVision_1.default);
// Delete the mission & vision statement
exports.deleteMissionVision = (0, FactoryHandlers_1.deleteOne)(MissionVision_1.default);
