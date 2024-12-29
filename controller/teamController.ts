import { Request, Response, NextFunction } from 'express';
import { TeamMember } from '../model/TeamMember';
import path from 'path';
import fs from 'fs';

// Get all team members
export const getAllTeamMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching team members', error });
  }
};

// Get a single team member by ID
export const getTeamMemberById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const teamMember = await TeamMember.findById(id);
    if (!teamMember) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }
    res.status(200).json(teamMember);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching team member', error });
  }
};


export const createTeamMember = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, qualification, description, email } = req.body;

    // Check if required fields are present
    if (!name || !qualification || !description || !email || !req.file) {
      res.status(400).json({ message: 'Missing required fields' }); // No return here
      return; // Only stop further execution, don't "return res"
    }

    const photo = req.file.filename;

    // Save to database
    const newMember = await TeamMember.create({
      name,
      qualification,
      description,
      email,
      photo,
    });

    const photoUrl = `${process.env.BASE_URL}/member/${photo}`;
    res.status(201).json({
      message: 'Team member created successfully!',
      data: {
        ...newMember.toObject(),
        photo: photoUrl,
      },
    }); // Again, no explicit `return`
  } catch (error) {
    console.error('Error creating team member:', error);
    next(error); // Pass the error to the next middleware (e.g., error handler)
  }
};

// Update a team member
export const updateTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, qualification, description, email } = req.body;

    const existingTeamMember = await TeamMember.findById(id);
    if (!existingTeamMember) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }

    const photo = req.file ? req.file.filename : existingTeamMember.photo;

    if (req.file && existingTeamMember.photo) {
      const oldPhotoPath = path.join('uploads/member', existingTeamMember.photo);
      if (fs.existsSync(oldPhotoPath)) fs.unlinkSync(oldPhotoPath);
    }

    existingTeamMember.name = name;
    existingTeamMember.qualification = qualification;
    existingTeamMember.description = description;
    existingTeamMember.email = email;
    existingTeamMember.photo = photo;

    await existingTeamMember.save();

    res.status(200).json(existingTeamMember);
  } catch (error) {
    res.status(500).json({ message: 'Error updating team member', error });
  }
};

// Delete a team member
export const deleteTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const existingTeamMember = await TeamMember.findById(id);
    if (!existingTeamMember) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }

    if (existingTeamMember.photo) {
      const photoPath = path.join('uploads/member', existingTeamMember.photo);
      if (fs.existsSync(photoPath)) fs.unlinkSync(photoPath);
    }

    await TeamMember.findByIdAndDelete(id);

    res.status(200).json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting team member', error });
  }
};
