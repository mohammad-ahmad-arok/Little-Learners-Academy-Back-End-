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
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const AdmissionProcess_1 = __importDefault(require("./model/AdmissionProcess"));
const FeeStructure_1 = __importDefault(require("./model/FeeStructure"));
const AdditionalServices_1 = __importDefault(require("./model/AdditionalServices"));
dotenv_1.default.config();
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGO_URL || '');
    }
    catch (error) {
        console.error('MongoDB failed:', error);
    }
});
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AdmissionProcess_1.default.deleteMany();
        yield FeeStructure_1.default.deleteMany();
        yield AdditionalServices_1.default.deleteMany();
        // Admission Process
        yield AdmissionProcess_1.default.insertMany([
            { step: 'Inquiry', description: 'Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.' },
            { step: 'School Tour', description: 'Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.' },
            { step: 'Application Form', description: 'Complete the application form and provide the required documents, including your child\'s birth certificate, medical records, and any previous academic records (if applicable).' },
            { step: 'Parent Interview', description: 'We value parent engagement, and a meeting with our admissions team allows us to understand your child\'s needs and ensure Little Learners Academy aligns with your family\'s expectations.' },
            { step: 'Student Assessment', description: 'For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.' },
            { step: 'Acceptance', description: 'Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.' }
        ]);
        // Fee Structure
        yield FeeStructure_1.default.insertMany([
            { program: 'Nursery', ageGroup: '2-3 Years', annualTuition: '$1,686', registrationFee: '$162', activityFee: '$12' },
            { program: 'Pre-Kindergarten', ageGroup: '3-4 Years', annualTuition: '$1,686', registrationFee: '$162', activityFee: '$12' },
            { program: 'Kindergarten', ageGroup: '4-5 Years', annualTuition: '$1,686', registrationFee: '$162', activityFee: '$12' }
        ]);
        // Additional Services
        yield AdditionalServices_1.default.insertMany([
            { service: 'Before and After-School Care', price: '$120/Month' },
            { service: 'Language Immersion Program', price: '$120/Month' },
            { service: 'Transportation (optional)', price: '$120/Month' }
        ]);
        process.exit(0);
    }
    catch (error) {
        console.error('failed:', error);
        process.exit(1);
    }
});
connectDB().then(seedData);
