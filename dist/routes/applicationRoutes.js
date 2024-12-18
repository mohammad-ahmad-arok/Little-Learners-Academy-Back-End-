"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const applicationController_1 = require("../controller/applicationController");
const router = (0, express_1.Router)();
router.post('/', applicationController_1.createApplication); // Create application
router.get('/', applicationController_1.getAllApplications); // Fetch all applications
router.put('/:id', applicationController_1.updateApplicationStatus); // Update application by ID
exports.default = router;
