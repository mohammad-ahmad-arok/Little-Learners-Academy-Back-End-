"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/inquiry', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }
    res.json({ message: 'Inquiry received', data: { name, email, message } });
});
router.get('/applications', (req, res) => {
    res.json({ message: 'Fetching all applications' });
});
exports.default = router;
