"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/missionVisionRoutes.ts
const express_1 = __importDefault(require("express"));
const missionVisionController_1 = require("../controller/missionVisionController");
const router = express_1.default.Router();
// Get mission & vision
router.get("/", missionVisionController_1.getMissionVision);
// Create mission & vision
router.post("/", missionVisionController_1.createMissionVision);
// Update mission & vision
router.put("/:title", missionVisionController_1.updateMissionVision);
// Delete mission & vision
router.delete("/:title", missionVisionController_1.deleteMissionVision);
exports.default = router;
