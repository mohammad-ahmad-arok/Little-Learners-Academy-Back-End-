"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistoryValidator = exports.updateHistoryValidator = exports.getHistoryValidator = exports.createHistoryValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createHistoryValidator = [
    (0, express_validator_1.check)("year")
        .notEmpty()
        .withMessage("year required")
        .isNumeric()
        .withMessage("Year Should be Number"),
    (0, express_validator_1.check)("title")
        .notEmpty()
        .withMessage("title required")
        .isLength({ min: 3 })
        .withMessage("Too Short title")
        .isLength({ max: 40 })
        .withMessage("Too Long title"),
    (0, express_validator_1.check)("description")
        .notEmpty()
        .withMessage("description required")
        .isLength({ min: 10 })
        .withMessage("Too Short description")
        .isLength({ max: 200 })
        .withMessage("Too Long description"),
    validatorMiddleware_1.ValidatorMiddle,
];
exports.getHistoryValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle,
];
exports.updateHistoryValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle,
];
exports.deleteHistoryValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle,
];
