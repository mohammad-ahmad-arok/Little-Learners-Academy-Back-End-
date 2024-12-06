"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inquiryController_1 = require("../controller/inquiryController");
const router = (0, express_1.Router)();
router.post('/', inquiryController_1.createInquiry); // Create inquiry
router.get('/', inquiryController_1.getAllInquiries); // Fetch all inquiries
exports.default = router;
