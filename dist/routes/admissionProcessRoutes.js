"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissionProcessesRouter = void 0;
const express_1 = __importDefault(require("express"));
const admissionProcessController_1 = require("../controller/admissionProcessController");
const admissionValidator_1 = require("../utils/validator/admissionValidator");
exports.admissionProcessesRouter = express_1.default.Router();
exports.admissionProcessesRouter
    .route("/")
    .get(admissionProcessController_1.getAllAdmissionProcesses)
    .post(admissionValidator_1.createAdmissionValidator, admissionProcessController_1.createAdmissionProcess);
exports.admissionProcessesRouter
    .route("/:id")
    .get(admissionValidator_1.getAdmissionValidator, admissionProcessController_1.getAdmissionProcess)
    .put(admissionValidator_1.updateAdmissionValidator, admissionProcessController_1.updateAdmissionProcess)
    .delete(admissionValidator_1.deleteAdmissionValidator, admissionProcessController_1.deleteAdmissionProcess);
