import { TeamMember } from "../model/TeamMember";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

// Get all team members
export const getAllTeamMembers = getAll(TeamMember);

// Get a single team member by ID
export const getTeamMemberById = getOne(TeamMember);

export const createTeamMember = createOne(TeamMember);

// Update a team member
export const updateTeamMember = updateOne(TeamMember);

// Delete a team member
export const deleteTeamMember = deleteOne(TeamMember);
