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
router.put("/:title", updateMissionVision);

// Delete mission & vision
router.delete("/:title", deleteMissionVision);

export default router;
