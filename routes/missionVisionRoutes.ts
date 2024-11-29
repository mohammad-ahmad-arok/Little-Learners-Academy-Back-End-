// routes/missionVisionRoutes.ts
import express from "express";
import {
  createMissionVision,
  getMissionVision,
  updateMissionVision,
  deleteMissionVision,
} from "../controller/missionVisionController";

const router = express.Router();

// Get mission & vision
router.get("/", getMissionVision);

// Create mission & vision
router.post("/", createMissionVision);

// Update mission & vision
router.put("/", updateMissionVision);

// Delete mission & vision
router.delete("/", deleteMissionVision);

export default router;
