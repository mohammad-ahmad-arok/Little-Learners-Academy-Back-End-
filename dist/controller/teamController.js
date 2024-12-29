"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeamMember = exports.updateTeamMember = exports.createTeamMember = exports.getTeamMemberById = exports.getAllTeamMembers = void 0;
const TeamMember_1 = require("../model/TeamMember");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Get all team members
const getAllTeamMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teamMembers = yield TeamMember_1.TeamMember.find();
        res.status(200).json(teamMembers);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching team members', error });
    }
});
exports.getAllTeamMembers = getAllTeamMembers;
// Get a single team member by ID
const getTeamMemberById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const teamMember = yield TeamMember_1.TeamMember.findById(id);
        if (!teamMember) {
            res.status(404).json({ message: 'Team member not found' });
            return;
        }
        res.status(200).json(teamMember);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching team member', error });
    }
});
exports.getTeamMemberById = getTeamMemberById;
const createTeamMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, qualification, description, email } = req.body;
        // Check if required fields are present
        if (!name || !qualification || !description || !email || !req.file) {
            res.status(400).json({ message: 'Missing required fields' }); // No return here
            return; // Only stop further execution, don't "return res"
        }
        const photo = req.file.filename;
        // Save to database
        const newMember = yield TeamMember_1.TeamMember.create({
            name,
            qualification,
            description,
            email,
            photo,
        });
        const photoUrl = `${process.env.BASE_URL}/uploads/member/${photo}`;
        res.status(201).json({
            message: 'Team member created successfully!',
            data: Object.assign(Object.assign({}, newMember.toObject()), { photo: photoUrl }),
        }); // Again, no explicit `return`
    }
    catch (error) {
        console.error('Error creating team member:', error);
        next(error); // Pass the error to the next middleware (e.g., error handler)
    }
});
exports.createTeamMember = createTeamMember;
// Update a team member
const updateTeamMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, qualification, description, email } = req.body;
        const existingTeamMember = yield TeamMember_1.TeamMember.findById(id);
        if (!existingTeamMember) {
            res.status(404).json({ message: 'Team member not found' });
            return;
        }
        const photo = req.file ? req.file.filename : existingTeamMember.photo;
        if (req.file && existingTeamMember.photo) {
            const oldPhotoPath = path_1.default.join('uploads/member', existingTeamMember.photo);
            if (fs_1.default.existsSync(oldPhotoPath))
                fs_1.default.unlinkSync(oldPhotoPath);
        }
        existingTeamMember.name = name;
        existingTeamMember.qualification = qualification;
        existingTeamMember.description = description;
        existingTeamMember.email = email;
        existingTeamMember.photo = photo;
        yield existingTeamMember.save();
        res.status(200).json(existingTeamMember);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating team member', error });
    }
});
exports.updateTeamMember = updateTeamMember;
// Delete a team member
const deleteTeamMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const existingTeamMember = yield TeamMember_1.TeamMember.findById(id);
        if (!existingTeamMember) {
            res.status(404).json({ message: 'Team member not found' });
            return;
        }
        if (existingTeamMember.photo) {
            const photoPath = path_1.default.join('uploads/member', existingTeamMember.photo);
            if (fs_1.default.existsSync(photoPath))
                fs_1.default.unlinkSync(photoPath);
        }
        yield TeamMember_1.TeamMember.findByIdAndDelete(id);
        res.status(200).json({ message: 'Team member deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting team member', error });
    }
});
exports.deleteTeamMember = deleteTeamMember;
