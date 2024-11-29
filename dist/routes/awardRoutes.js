"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/awardRoutes.ts
const express_1 = __importDefault(require("express"));
const awardController_1 = require("../controller/awardController");
const router = express_1.default.Router();
router.get("/", awardController_1.getAllAwards); // Get all awards
router.get("/:id", awardController_1.getAwardById); // Get a single award by ID
router.post("/", awardController_1.createAward); // Create a new award
router.put("/:id", awardController_1.updateAward); // Update an award by ID
router.delete("/:id", awardController_1.deleteAward); // Delete an award by ID
exports.default = router;
