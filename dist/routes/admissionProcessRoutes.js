"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissionProcessesRouter = void 0;
const express_1 = __importDefault(require("express"));
const admissionProcessController_1 = require("../controller/admissionProcessController");
exports.admissionProcessesRouter = express_1.default.Router();
exports.admissionProcessesRouter
    .route("/")
    .get(admissionProcessController_1.getAllAdmissionProcesses)
    .post(admissionProcessController_1.createAdmissionProcess);
exports.admissionProcessesRouter
    .route("/:id")
    .get(admissionProcessController_1.getAdmissionProcess)
    .put(admissionProcessController_1.updateAdmissionProcess)
    .delete(admissionProcessController_1.deleteAdmissionProcess);
