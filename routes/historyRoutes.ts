// routes/historyRoutes.ts
import express from "express";
import {
  getAllHistory,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory
} from "../controller/historyController";
import { createHistoryValidator, deleteHistoryValidator, getHistoryValidator, updateHistoryValidator } from "../utils/validator/historyValidator";

const router = express.Router();

router.get("/", getAllHistory); // Get all history entries
router.get("/:id", getHistoryValidator,getHistoryById); // Get a single history entry by ID
router.post("/", createHistoryValidator,createHistory); // Create a new history entry
router.put("/:id",updateHistoryValidator, updateHistory); // Update an existing history entry by ID
router.delete("/:id",deleteHistoryValidator, deleteHistory); // Delete a history entry by ID

export default router;
