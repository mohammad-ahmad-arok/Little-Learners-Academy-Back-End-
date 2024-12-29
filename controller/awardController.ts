// controllers/awardController.ts
import { Request, Response } from "express";
import Award from "../model/Award";
import path from "path";
import fs from 'fs';

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
    const { title, description } = req.body;

    // Check if required fields are present
    if (!title || !description  || !req.file) {
      res.status(400).json({ message: 'Missing required fields' }); // No return here
      return; // Only stop further execution, don't "return res"
    }

    const icon = req.file.filename;

    // Save to database
    const newAward = await Award.create({
      title,
      description,
      icon,
    });

    const iconUrl = `${process.env.BASE_URL}/uploads/member/${icon}`;
    res.status(201).json({
      message: 'Award created successfully!',
      data: {
        ...newAward.toObject(),
        icon: iconUrl,
      },
    }); // Again, no explicit `return`
  } catch (error) {
    res.status(500).json({ message: "Error creating award", error });
  }
};

// Update an existing award by ID
export const updateAward = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const existingAward = await Award.findById(id);
    if (!existingAward) {
      res.status(404).json({ message: ' Award not found' });
      return;
    }

    const icon = req.file ? req.file.filename : existingAward.icon;

    if (req.file && existingAward.icon) {
      const oldPhotoPath = path.join('uploads/member', existingAward.icon);
      if (fs.existsSync(oldPhotoPath)) fs.unlinkSync(oldPhotoPath);
    }

    existingAward.title = title;
    existingAward.description = description;
    existingAward.icon = icon;

    await existingAward.save();

    res.status(200).json(existingAward);
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
