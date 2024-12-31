"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feeStructuresRouter = void 0;
const express_1 = __importDefault(require("express"));
const feeStructureController_1 = require("../controller/feeStructureController");
exports.feeStructuresRouter = express_1.default.Router();
exports.feeStructuresRouter
    .route("/")
    .get(feeStructureController_1.getAllFeeStructures)
    .post(feeStructureController_1.createfeeStructure);
exports.feeStructuresRouter
    .route("/:id")
    .get(feeStructureController_1.getfeeStructure)
    .put(feeStructureController_1.updateFeeStructure)
    .delete(feeStructureController_1.deleteFeeStructure);
