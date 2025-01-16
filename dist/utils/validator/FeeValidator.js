"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeeValidator = exports.updateFeeValidator = exports.getFeeValidator = exports.createFeeValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createFeeValidator = [
    (0, express_validator_1.check)("program")
        .notEmpty()
        .withMessage("program required")
        .isLength({ min: 3 })
        .withMessage("Too Short title")
        .isLength({ max: 20 })
        .withMessage("Too Long title"),
    (0, express_validator_1.check)("ageGroup").notEmpty().withMessage("ageGroup required"),
    (0, express_validator_1.check)("annualTuition").notEmpty().withMessage("annualTuition required"),
    (0, express_validator_1.check)("registrationFee").notEmpty().withMessage("registrationFee required"),
    (0, express_validator_1.check)("activityFee").notEmpty().withMessage("activityFee required"),
    validatorMiddleware_1.ValidatorMiddle,
];
exports.getFeeValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle,
];
exports.updateFeeValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle,
];
exports.deleteFeeValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle,
];
