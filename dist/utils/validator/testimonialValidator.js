"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonialValidator = exports.updateTestimonialValidator = exports.getTestimonialValidator = exports.createTestimonialValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createTestimonialValidator = [
    (0, express_validator_1.check)("name")
        .notEmpty()
        .withMessage("name required")
        .isLength({ min: 3 })
        .withMessage("Too Short name")
        .isLength({ max: 20 })
        .withMessage("Too Long name"),
    (0, express_validator_1.check)("description")
        .notEmpty()
        .withMessage("description required")
        .isLength({ min: 10 })
        .withMessage("Too Short description")
        .isLength({ max: 200 })
        .withMessage("Too Long description"),
    (0, express_validator_1.check)("evaluation")
        .notEmpty()
        .withMessage("evaluation required")
        .isNumeric()
        .withMessage("evaluation should be a number"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getTestimonialValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateTestimonialValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteTestimonialValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
