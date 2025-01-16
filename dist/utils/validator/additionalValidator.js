"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteServiceValidator = exports.updateServiceValidator = exports.getServiceValidator = exports.createServiceValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createServiceValidator = [
    (0, express_validator_1.check)("service")
        .notEmpty()
        .withMessage("Service required")
        .isLength({ min: 3 })
        .withMessage("Too Short Service name")
        .isLength({ max: 50 })
        .withMessage("Too Long Service name"),
    (0, express_validator_1.check)("price")
        .notEmpty()
        .withMessage("price required"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getServiceValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateServiceValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteServiceValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
