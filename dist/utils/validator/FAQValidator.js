"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFaqValidator = exports.updateFaqValidator = exports.getFaqValidator = exports.createFaqValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createFaqValidator = [
    (0, express_validator_1.check)("question")
        .notEmpty()
        .withMessage("question required")
        .isLength({ min: 3 })
        .withMessage("Too Short question")
        .isLength({ max: 100 })
        .withMessage("Too Long question"),
    (0, express_validator_1.check)("answer")
        .notEmpty()
        .withMessage("answer required"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getFaqValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateFaqValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteFaqValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
