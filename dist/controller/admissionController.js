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
const Inquiry = require('../model/Inquiry');
const Application = require('../model/Application');
// Handle inquiries
exports.createInquiry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiry = yield Inquiry.create(req.body);
        res.status(201).json(inquiry);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Handle application submission
exports.submitApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const application = yield Application.create(req.body);
        res.status(201).json(application);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Get all applications
exports.getApplications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applications = yield Application.find();
        res.status(200).json(applications);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
