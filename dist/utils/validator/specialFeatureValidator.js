"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeatureValidator = exports.updateFeatureValidator = exports.getFeatureValidator = exports.createFeatureValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createFeatureValidator = [
    (0, express_validator_1.check)("name")
        .notEmpty()
        .withMessage("name required")
        .isLength({ min: 3 })
        .withMessage("Too Short Feature name")
        .isLength({ max: 50 })
        .withMessage("Too Long Feature name"),
    (0, express_validator_1.check)("description")
        .notEmpty()
        .withMessage("description required")
        .isLength({ min: 10 })
        .withMessage("Too Short description")
        .isLength({ max: 200 })
        .withMessage("Too Long description"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getFeatureValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Feature ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateFeatureValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Feature ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteFeatureValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Feature ID"),
    validatorMiddleware_1.ValidatorMiddle
];
