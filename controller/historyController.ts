// controllers/historyController.ts
import { Request, Response } from "express";
import History from "../model/History";

// Get all history entries
export const getAllHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const history = await History.find();
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history entries", error });
  }
};

// Get a single history entry by ID
export const getHistoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const history = await History.findById(id);
    if (!history) {
      res.status(404).json({ message: "History entry not found" });
      return;
    }
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history entry", error });
  }
};

// Create a new history entry
export const createHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { year, title, description } = req.body;
    const newHistory = new History({ year, title, description });
    await newHistory.save();
    res.status(201).json(newHistory);
  } catch (error) {
    res.status(500).json({ message: "Error creating history entry", error });
  }
};

// Update an existing history entry by ID
export const updateHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { year, title, description } = req.body;
    const updatedHistory = await History.findByIdAndUpdate(
      id,
      { year, title, description },
      { new: true }
    );
    if (!updatedHistory) {
      res.status(404).json({ message: "History entry not found" });
      return;
    }
    res.status(200).json(updatedHistory);
  } catch (error) {
    res.status(500).json({ message: "Error updating history entry", error });
  }
};

// Delete a history entry by ID
export const deleteHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedHistory = await History.findByIdAndDelete(id);
    if (!deletedHistory) {
      res.status(404).json({ message: "History entry not found" });
      return;
    }
    res.status(200).json({ message: "History entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting history entry", error });
  }
};
