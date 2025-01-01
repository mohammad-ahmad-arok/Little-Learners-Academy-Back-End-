import { Request, Response, NextFunction } from "express";
import { TeamMember } from "../model/TeamMember";
import path from "path";
import fs from "fs";
import {
  removeImageCloudinary,
  uploadImageCloudinary,
} from "../utils/cloudinary";

// Get all team members
export const getAllTeamMembers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching team members", error });
  }
};

// Get a single team member by ID
export const getTeamMemberById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const teamMember = await TeamMember.findById(id);
    if (!teamMember) {
      res.status(404).json({ message: "Team member not found" });
      return;
    }
    res.status(200).json(teamMember);
  } catch (error) {
    res.status(500).json({ message: "Error fetching team member", error });
  }
};

export const createTeamMember = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, qualification, description, email } = req.body;

    // Check if required fields are present
    if (!name || !qualification || !description || !email || !req.file) {
      res.status(400).json({ message: "Missing required fields" }); // No return here
      return; // Only stop further execution, don't "return res"
    }

    if (req.photo) {
      req.body.photo = req.photo;
    }

    // Save to database
    const newMember = await TeamMember.create(req.body);

    res.status(201).json({
      message: "Team member created successfully!",
      data: newMember,
    }); // Again, no explicit `return`
  } catch (error) {
    console.error("Error creating team member:", error);
    next(error); // Pass the error to the next middleware (e.g., error handler)
  }
};

// Update a team member
export const updateTeamMember = async (
  req: any,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (req.file) {
      await removeImageCloudinary(TeamMember, id);
    }
    if (req.photo) {
      req.body.photo = req.photo;
    }
    const existingTeamMember = await TeamMember.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!existingTeamMember) {
      res.status(404).json({ message: "Team member not found" });
      return;
    }

    res.status(200).json({ data: existingTeamMember });
  } catch (error) {
    res.status(500).json({ message: "Error updating team member", error });
  }
};

// Delete a team member
export const deleteTeamMember = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await removeImageCloudinary(TeamMember, id);
    const existingTeamMember = await TeamMember.findByIdAndDelete(id);
    
    if (!existingTeamMember) {
      res.status(404).json({ message: "Team member not found" });
      return;
    }

    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting team member", error });
  }
};
