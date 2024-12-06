"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ServicesController_1 = require("../controller/ServicesController");
const router = (0, express_1.Router)();
// Admission Process
router.get('/admission-process', ServicesController_1.getAdmissionProcess);
router.post('/admission-process', ServicesController_1.createAdmissionStep);
// Fee Structure
router.get('/fee-structure', ServicesController_1.getFeeStructure);
router.post('/fee-structure', ServicesController_1.createFeeStructure);
// Additional Services
router.get('/additional-services', ServicesController_1.getAdditionalServices);
router.post('/additional-services', ServicesController_1.createAdditionalService);
exports.default = router;
