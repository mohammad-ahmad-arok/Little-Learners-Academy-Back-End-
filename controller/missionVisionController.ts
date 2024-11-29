// controllers/missionVisionController.ts
import { Request, Response } from "express";
import MissionVision from "../model/MissionVision";

// Get the mission & vision statement
export const getMissionVision = async (req: Request, res: Response): Promise<void> => {
  try {
    const missionVision = await MissionVision.findOne();
    if (!missionVision) {
      res.status(404).json({ message: "Mission and Vision not found" });
      return;
    }
    res.status(200).json(missionVision);
  } catch (error) {
    res.status(500).json({ message: "Error fetching mission and vision", error });
  }
};

// Create a new mission & vision statement
export const createMissionVision = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;
    const newMissionVision = new MissionVision({ title, description });
    await newMissionVision.save();
    res.status(201).json(newMissionVision);
  } catch (error) {
    res.status(500).json({ message: "Error creating mission and vision", error });
  }
};

// Update the mission & vision statement
export const updateMissionVision = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    // Check if the mission & vision exists
    const updatedMissionVision = await MissionVision.findOneAndUpdate(
      {},
      { title, description },
      { new: true }
    );

    if (!updatedMissionVision) {
      res.status(404).json({ message: "Mission and Vision not found" });
      return;
    }

    res.status(200).json(updatedMissionVision);
  } catch (error) {
    res.status(500).json({ message: "Error updating mission and vision", error });
  }
};

// Delete the mission & vision statement
export const deleteMissionVision = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMissionVision = await MissionVision.findOneAndDelete();
    if (!deletedMissionVision) {
      res.status(404).json({ message: "Mission and Vision not found" });
      return;
    }

    res.status(200).json({ message: "Mission and Vision deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting mission and vision", error });
  }
};
