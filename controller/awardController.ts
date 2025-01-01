// controllers/awardController.ts
import { Request, Response } from "express";
import Award from "../model/Award";
import path from "path";
import fs from "fs";
import {
  removeImageCloudinary,
  uploadImageCloudinary,
} from "../utils/cloudinary";

// Get all awards and recognitions
export const getAllAwards = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const awards = await Award.find();
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching awards", error });
  }
};

// Get a single award by ID
export const getAwardById = async (
  req: Request,
  res: Response
): Promise<void> => {
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
export const createAward = async (req: any, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    // Check if required fields are present
    if (!title || !description || !req.file) {
      res.status(400).json({ message: "Missing required fields" }); // No return here
      return; // Only stop further execution, don't "return res"
    }

    if (req.icon) {
      req.body.icon = req.icon;
    }

    // Save to database
    const newAward = await Award.create(req.body);

    res.status(201).json({
      message: "Team member created successfully!",
      data: newAward,
    }); // Again, no explicit `return`
  } catch (error) {
    res.status(500).json({ message: "Error creating award", error });
  }
};

// Update an existing award by ID
export const updateAward = async (req: any, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (req.file) {
      await removeImageCloudinary(Award, id);
    }
    if (req.icon) {
      req.body.icon = req.icon;
    }
    const existingAward = await Award.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!existingAward) {
      res.status(404).json({ message: "Team member not found" });
      return;
    }

    if (req.file && existingAward.icon) {
      const oldPhotoPath = path.join("uploads/member", existingAward.icon);
      if (fs.existsSync(oldPhotoPath)) fs.unlinkSync(oldPhotoPath);
    }

    res.status(200).json({ data: existingAward });
  } catch (error) {
    res.status(500).json({ message: "Error updating award", error });
  }
};

// Delete an award by ID
export const deleteAward = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await removeImageCloudinary(Award, id);
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
