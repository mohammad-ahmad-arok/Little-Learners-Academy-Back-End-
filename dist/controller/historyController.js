"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistory = exports.updateHistory = exports.createHistory = exports.getHistoryById = exports.getAllHistory = void 0;
const History_1 = __importDefault(require("../model/History"));
const FactoryHandlers_1 = require("./FactoryHandlers");
// Get all history entries
exports.getAllHistory = (0, FactoryHandlers_1.getAll)(History_1.default);
// Get a single history entry by ID
exports.getHistoryById = (0, FactoryHandlers_1.getOne)(History_1.default);
// Create a new history entry
exports.createHistory = (0, FactoryHandlers_1.createOne)(History_1.default);
// Update an existing history entry by ID
exports.updateHistory = (0, FactoryHandlers_1.updateOne)(History_1.default);
// Delete a history entry by ID
exports.deleteHistory = (0, FactoryHandlers_1.deleteOne)(History_1.default);
