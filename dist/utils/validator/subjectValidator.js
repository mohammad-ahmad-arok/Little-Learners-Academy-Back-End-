"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubjectValidator = exports.updateSubjectValidator = exports.getSubjectValidator = exports.createSubjectValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createSubjectValidator = [
    (0, express_validator_1.check)("name")
        .notEmpty()
        .withMessage("name required")
        .isLength({ min: 3 })
        .withMessage("Too Short Subject name")
        .isLength({ max: 50 })
        .withMessage("Too Long Subject name"),
    (0, express_validator_1.check)("description")
        .notEmpty()
        .withMessage("description required")
        .isLength({ min: 10 })
        .withMessage("Too Short description")
        .isLength({ max: 200 })
        .withMessage("Too Long description"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getSubjectValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Subject ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateSubjectValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Subject ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteSubjectValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Subject ID"),
    validatorMiddleware_1.ValidatorMiddle
];
