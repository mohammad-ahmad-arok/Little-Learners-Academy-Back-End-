// routes/awardRoutes.ts
import express from "express";

import upload from '../utils/multerConfig'; 

import uploadImage from "../middlewares/uploadImageMiddlware";

import {
  getAllAwards,
  getAwardById,
  createAward,
  updateAward,
  deleteAward
} from "../controller/awardController";


import {createAwardValidator,getAwardValidator,updateAwardValidator,deleteAwardValidator} from "../utils/validator/awardValidator"

const router = express.Router();

router.get("/", getAllAwards); // Get all awards
router.get("/:id",getAwardValidator, getAwardById); // Get a single award by ID
router.post("/", upload.single('icon'),uploadImage("icon"),createAwardValidator, createAward); // Create a new award
router.put("/:id", upload.single('icon'),uploadImage("icon"),updateAwardValidator, updateAward); // Update an award by ID
router.delete("/:id",deleteAwardValidator, deleteAward); // Delete an award by ID

export default router;
