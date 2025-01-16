"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmissionProcess = exports.updateAdmissionProcess = exports.getAdmissionProcess = exports.createAdmissionProcess = exports.getAllAdmissionProcesses = void 0;
const AdmissionProcess_1 = __importDefault(require("../model/AdmissionProcess"));
const FactoryHandlers_1 = require("./FactoryHandlers");
exports.getAllAdmissionProcesses = (0, FactoryHandlers_1.getAll)(AdmissionProcess_1.default);
exports.createAdmissionProcess = (0, FactoryHandlers_1.createOne)(AdmissionProcess_1.default);
exports.getAdmissionProcess = (0, FactoryHandlers_1.getOne)(AdmissionProcess_1.default);
exports.updateAdmissionProcess = (0, FactoryHandlers_1.updateOne)(AdmissionProcess_1.default);
exports.deleteAdmissionProcess = (0, FactoryHandlers_1.deleteOne)(AdmissionProcess_1.default);
