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
    const data = yield AdmissionProcess_1.default.find();
});
exports.getAdmissionProcess = getAdmissionProcess;
const createAdmissionStep = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const step = yield AdmissionProcess_1.default.create(req.body);
});
exports.createAdmissionStep = createAdmissionStep;
// Fee Structure
const getFeeStructure = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield FeeStructure_1.default.find();
});
exports.getFeeStructure = getFeeStructure;
const createFeeStructure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fee = yield FeeStructure_1.default.create(req.body);
});
exports.createFeeStructure = createFeeStructure;
// Additional Services
const getAdditionalServices = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield AdditionalServices_1.default.find();
});
exports.getAdditionalServices = getAdditionalServices;
const createAdditionalService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield AdditionalServices_1.default.create(req.body);
});
exports.createAdditionalService = createAdditionalService;
