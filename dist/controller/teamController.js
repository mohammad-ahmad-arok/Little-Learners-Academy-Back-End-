"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeamMember = exports.updateTeamMember = exports.createTeamMember = exports.getTeamMemberById = exports.getAllTeamMembers = void 0;
const TeamMember_1 = require("../model/TeamMember");
const FactoryHandlers_1 = require("./FactoryHandlers");
// Get all team members
exports.getAllTeamMembers = (0, FactoryHandlers_1.getAll)(TeamMember_1.TeamMember);
// Get a single team member by ID
exports.getTeamMemberById = (0, FactoryHandlers_1.getOne)(TeamMember_1.TeamMember);
exports.createTeamMember = (0, FactoryHandlers_1.createOne)(TeamMember_1.TeamMember);
// Update a team member
exports.updateTeamMember = (0, FactoryHandlers_1.updateOne)(TeamMember_1.TeamMember);
// Delete a team member
exports.deleteTeamMember = (0, FactoryHandlers_1.deleteOne)(TeamMember_1.TeamMember);
