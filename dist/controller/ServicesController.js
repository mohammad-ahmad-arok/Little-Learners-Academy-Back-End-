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
exports.createAdditionalService = exports.getAdditionalServices = exports.createFeeStructure = exports.getFeeStructure = exports.createAdmissionStep = exports.getAdmissionProcess = void 0;
const AdmissionProcess_1 = __importDefault(require("../model/AdmissionProcess"));
const FeeStructure_1 = __importDefault(require("../model/FeeStructure"));
const AdditionalServices_1 = __importDefault(require("../model/AdditionalServices"));
// Admission Process
const getAdmissionProcess = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AdmissionProcess_1.default.find();
        res.status(200).json(data);
    }
    catch (error) {
        console.error('Error fetching admission process:', error);
        res.status(500).json({ error: 'Failed to fetch admission process' });
    }
});
exports.getAdmissionProcess = getAdmissionProcess;
const createAdmissionStep = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const step = yield AdmissionProcess_1.default.create(req.body);
        res.status(201).json(step);
    }
    catch (error) {
        console.error('Error creating admission step:', error);
        res.status(500).json({ error: 'Failed to create admission step' });
    }
});
exports.createAdmissionStep = createAdmissionStep;
// Fee Structure
const getFeeStructure = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield FeeStructure_1.default.find();
        res.status(200).json(data);
    }
    catch (error) {
        console.error('Error fetching fee structure:', error);
        res.status(500).json({ error: 'Failed to fetch fee structure' });
    }
});
exports.getFeeStructure = getFeeStructure;
const createFeeStructure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fee = yield FeeStructure_1.default.create(req.body);
        res.status(201).json(fee);
    }
    catch (error) {
        console.error('Error creating fee structure:', error);
        res.status(500).json({ error: 'Failed to create fee structure' });
    }
});
exports.createFeeStructure = createFeeStructure;
// Additional Services
const getAdditionalServices = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AdditionalServices_1.default.find();
        res.status(200).json(data);
    }
    catch (error) {
        console.error('Error fetching additional services:', error);
        res.status(500).json({ error: 'Failed to fetch additional services' });
    }
});
exports.getAdditionalServices = getAdditionalServices;
const createAdditionalService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield AdditionalServices_1.default.create(req.body);
        res.status(201).json(service);
    }
    catch (error) {
        console.error('Error creating additional service:', error);
        res.status(500).json({ error: 'Failed to create additional service' });
    }
});
exports.createAdditionalService = createAdditionalService;
