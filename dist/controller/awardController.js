"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAward = exports.updateAward = exports.createAward = exports.getAwardById = exports.getAllAwards = void 0;
const Award_1 = __importDefault(require("../model/Award"));
const FactoryHandlers_1 = require("./FactoryHandlers");
// Get all awards and recognitions
exports.getAllAwards = (0, FactoryHandlers_1.getAll)(Award_1.default);
// Get a single award by ID
exports.getAwardById = (0, FactoryHandlers_1.getOne)(Award_1.default);
// Create a new award
exports.createAward = (0, FactoryHandlers_1.createOne)(Award_1.default);
// Update an existing award by ID
exports.updateAward = (0, FactoryHandlers_1.updateOne)(Award_1.default);
// Delete an award by ID
exports.deleteAward = (0, FactoryHandlers_1.deleteOne)(Award_1.default);
