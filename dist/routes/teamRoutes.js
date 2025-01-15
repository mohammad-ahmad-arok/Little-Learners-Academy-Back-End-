"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teamController_1 = require("../controller/teamController");
const multerConfig_1 = __importDefault(require("../utils/multerConfig")); // Import Multer middleware
const uploadImageMiddlware_1 = __importDefault(require("../middlewares/uploadImageMiddlware"));
const memberValidator_1 = require("../utils/validator/memberValidator");
const router = express_1.default.Router();
// Get all team members
router.get('/', teamController_1.getAllTeamMembers);
// Get a single team member by ID
router.get('/:id', memberValidator_1.getMemberValidator, teamController_1.getTeamMemberById);
// Create a new team member with image upload (POST)
router.post('/', multerConfig_1.default.single('photo'), (0, uploadImageMiddlware_1.default)("photo"), memberValidator_1.createMemberValidator, teamController_1.createTeamMember); // 'photo' is the form field name for the image
// Update a team member by ID with image upload (PUT)
router.put('/:id', multerConfig_1.default.single('photo'), (0, uploadImageMiddlware_1.default)("photo"), memberValidator_1.updateMemberValidator, teamController_1.updateTeamMember);
// Delete a team member by ID
router.delete('/:id', memberValidator_1.deleteMemberValidator, teamController_1.deleteTeamMember);
exports.default = router;
