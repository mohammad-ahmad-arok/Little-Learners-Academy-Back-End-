"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmissionValidator = exports.updateAdmissionValidator = exports.getAdmissionValidator = exports.createAdmissionValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createAdmissionValidator = [
    (0, express_validator_1.check)("step")
        .notEmpty()
        .withMessage("step required"),
    (0, express_validator_1.check)("description")
        .notEmpty()
        .withMessage("description required")
        .isLength({ min: 10 })
        .withMessage("Too Short description")
        .isLength({ max: 200 })
        .withMessage("Too Long description"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getAdmissionValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateAdmissionValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteAdmissionValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
