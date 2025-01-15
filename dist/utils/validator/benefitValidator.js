"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBenefitValidator = exports.updateBenefitValidator = exports.getBenefitValidator = exports.createBenefitValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createBenefitValidator = [
    (0, express_validator_1.check)("title")
        .notEmpty()
        .withMessage("title required")
        .isLength({ min: 3 })
        .withMessage("Too Short title")
        .isLength({ max: 20 })
        .withMessage("Too Long title"),
    (0, express_validator_1.check)("description")
        .notEmpty()
        .withMessage("description required")
        .isLength({ min: 10 })
        .withMessage("Too Short description")
        .isLength({ max: 200 })
        .withMessage("Too Long description"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getBenefitValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateBenefitValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteBenefitValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
