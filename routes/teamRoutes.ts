import express from 'express';
import {
  getAllTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from '../controller/teamController';
import upload from '../utils/multerConfig'; // Import Multer middleware

const router = express.Router();

// Get all team members
router.get('/', getAllTeamMembers);

// Get a single team member by ID
router.get('/:id', getTeamMemberById);

// Create a new team member with image upload (POST)
router.post('/', upload.single('photo'), createTeamMember); // 'photo' is the form field name for the image

// Update a team member by ID with image upload (PUT)
router.put('/:id', upload.single('photo'), updateTeamMember);

// Delete a team member by ID
router.delete('/:id', deleteTeamMember);

export default router;
