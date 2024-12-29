// routes/awardRoutes.ts
import express from "express";

import upload from '../utils/multerConfig'; 

import {
  getAllAwards,
  getAwardById,
  createAward,
  updateAward,
  deleteAward
} from "../controller/awardController";

const router = express.Router();

router.get("/", getAllAwards); // Get all awards
router.get("/:id", getAwardById); // Get a single award by ID
router.post("/", upload.single('icon'), createAward); // Create a new award
router.put("/:id", upload.single('icon'), updateAward); // Update an award by ID
router.delete("/:id", deleteAward); // Delete an award by ID

export default router;
