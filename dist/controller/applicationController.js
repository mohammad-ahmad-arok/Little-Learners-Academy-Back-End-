"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApplicationStatus = exports.getAllApplications = exports.createApplication = void 0;
const Application_1 = __importDefault(require("../model/Application"));
const createApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentName, parentName, email, program } = req.body;
    try {
        const application = yield Application_1.default.create({ studentName, parentName, email, program });
        res.status(201).json(application);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create application' });
    }
});
exports.createApplication = createApplication;
const getAllApplications = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applications = yield Application_1.default.find();
        res.status(200).json(applications);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
});
exports.getAllApplications = getAllApplications;
const updateApplicationStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const application = yield Application_1.default.findByIdAndUpdate(id, { status }, { new: true });
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }
        res.status(200).json(application);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to update application status' });
    }
});
exports.updateApplicationStatus = updateApplicationStatus;
