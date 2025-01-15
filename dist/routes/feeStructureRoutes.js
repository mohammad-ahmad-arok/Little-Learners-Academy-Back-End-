"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feeStructuresRouter = void 0;
const express_1 = __importDefault(require("express"));
const feeStructureController_1 = require("../controller/feeStructureController");
const FeeValidator_1 = require("../utils/validator/FeeValidator");
exports.feeStructuresRouter = express_1.default.Router();
exports.feeStructuresRouter
    .route("/")
    .get(feeStructureController_1.getAllFeeStructures)
    .post(FeeValidator_1.createFeeValidator, feeStructureController_1.createfeeStructure);
exports.feeStructuresRouter
    .route("/:id")
    .get(FeeValidator_1.getFeeValidator, feeStructureController_1.getfeeStructure)
    .put(FeeValidator_1.updateFeeValidator, feeStructureController_1.updateFeeStructure)
    .delete(FeeValidator_1.deleteFeeValidator, feeStructureController_1.deleteFeeStructure);
