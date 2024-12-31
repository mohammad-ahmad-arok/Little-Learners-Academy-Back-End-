import { Request, Response, NextFunction } from 'express';
import { TeamMember } from '../model/TeamMember';
import path from 'path';
import fs from 'fs';
import { uploadImage } from '../utils/uploadImage';

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

       // Save to database
       const newMember = await TeamMember.create(req.body);

    if(req.file){
      newMember.photo=req.file.filename;
      await newMember.save();
    }

    
    res.status(201).json({
      message: 'Team member created successfully!',
      data: newMember,
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
    
    if(req.file){
      req.body.photo =req.file.filename;
    }
    const existingTeamMember = await TeamMember.findByIdAndUpdate(id,req.body,{new:true});
    if (!existingTeamMember) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }
    
    
    if (req.file && existingTeamMember.photo) {
      const oldPhotoPath = path.join('uploads/member', existingTeamMember.photo);
      if (fs.existsSync(oldPhotoPath)) fs.unlinkSync(oldPhotoPath);
    }

    

    
    res.status(200).json({data:existingTeamMember});
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
