// routes/historyRoutes.ts
import express from "express";
import {
  getAllHistory,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory
} from "../controller/historyController";

const router = express.Router();

router.get("/", getAllHistory); // Get all history entries
router.get("/:id", getHistoryById); // Get a single history entry by ID
router.post("/", createHistory); // Create a new history entry
router.put("/:id", updateHistory); // Update an existing history entry by ID
router.delete("/:id", deleteHistory); // Delete a history entry by ID

export default router;
