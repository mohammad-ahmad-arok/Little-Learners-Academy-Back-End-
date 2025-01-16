"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeeStructure = exports.updateFeeStructure = exports.getfeeStructure = exports.createfeeStructure = exports.getAllFeeStructures = void 0;
const FeeStructure_1 = __importDefault(require("../model/FeeStructure"));
const FactoryHandlers_1 = require("./FactoryHandlers");
exports.getAllFeeStructures = (0, FactoryHandlers_1.getAll)(FeeStructure_1.default);
exports.createfeeStructure = (0, FactoryHandlers_1.createOne)(FeeStructure_1.default);
exports.getfeeStructure = (0, FactoryHandlers_1.getOne)(FeeStructure_1.default);
exports.updateFeeStructure = (0, FactoryHandlers_1.updateOne)(FeeStructure_1.default);
exports.deleteFeeStructure = (0, FactoryHandlers_1.deleteOne)(FeeStructure_1.default);
