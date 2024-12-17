"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorMiddle = void 0;
const express_validator_1 = require("express-validator");
const ValidatorMiddle = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }
    next();
};
exports.ValidatorMiddle = ValidatorMiddle;
