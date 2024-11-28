// controllers/awardController.ts
import { Request, Response } from "express";
import Award from "../model/Award";

// Get all awards and recognitions
export const getAllAwards = async (req: Request, res: Response): Promise<void> => {
  try {
    const awards = await Award.find();
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching awards", error });
  }
};

// Get a single award by ID
export const getAwardById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const award = await Award.findById(id);
    if (!award) {
      res.status(404).json({ message: "Award not found" });
      return;
    }
    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: "Error fetching award", error });
  }
};

// Create a new award
export const createAward = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, icon } = req.body;
    const newAward = new Award({ title, description, icon });
    await newAward.save();
    res.status(201).json(newAward);
  } catch (error) {
    res.status(500).json({ message: "Error creating award", error });
  }
};

// Update an existing award by ID
export const updateAward = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, icon } = req.body;
    const updatedAward = await Award.findByIdAndUpdate(
      id,
      { title, description, icon },
      { new: true }
    );
    if (!updatedAward) {
      res.status(404).json({ message: "Award not found" });
      return;
    }
    res.status(200).json(updatedAward);
  } catch (error) {
    res.status(500).json({ message: "Error updating award", error });
  }
};

// Delete an award by ID
export const deleteAward = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedAward = await Award.findByIdAndDelete(id);
    if (!deletedAward) {
      res.status(404).json({ message: "Award not found" });
      return;
    }
    res.status(200).json({ message: "Award deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting award", error });
  }
};
