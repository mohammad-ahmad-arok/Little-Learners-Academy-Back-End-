"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/historyRoutes.ts
const express_1 = __importDefault(require("express"));
const historyController_1 = require("../controller/historyController");
const historyValidator_1 = require("../utils/validator/historyValidator");
const router = express_1.default.Router();
router.get("/", historyController_1.getAllHistory); // Get all history entries
router.get("/:id", historyValidator_1.getHistoryValidator, historyController_1.getHistoryById); // Get a single history entry by ID
router.post("/", historyValidator_1.createHistoryValidator, historyController_1.createHistory); // Create a new history entry
router.put("/:id", historyValidator_1.updateHistoryValidator, historyController_1.updateHistory); // Update an existing history entry by ID
router.delete("/:id", historyValidator_1.deleteHistoryValidator, historyController_1.deleteHistory); // Delete a history entry by ID
exports.default = router;
