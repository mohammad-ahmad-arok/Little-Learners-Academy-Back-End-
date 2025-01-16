"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessageValidator = exports.getMessageValidator = exports.createMessageValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createMessageValidator = [
    (0, express_validator_1.check)("ParentName").notEmpty().withMessage("ParentName required"),
    (0, express_validator_1.check)("EmailAddress")
        .notEmpty()
        .withMessage("EmailAddress required")
        .isEmail()
        .withMessage("Enter Valid Email Address"),
    (0, express_validator_1.check)("PhoneNumber").notEmpty().withMessage("PhoneNumber required"),
    (0, express_validator_1.check)("StudentName").notEmpty().withMessage("StudentName required")
        .isString()
        .withMessage("StudentName must be a string"),
    (0, express_validator_1.check)("StudentAge").notEmpty().withMessage("StudentAge required"),
    (0, express_validator_1.check)("ProgramOfIntrest").notEmpty().withMessage("ProgramOfIntrest required"),
    (0, express_validator_1.check)("Message")
        .notEmpty()
        .withMessage("Message required")
        .isLength({ min: 10 })
        .withMessage("Too Short Message")
        .isLength({ max: 200 })
        .withMessage("Too Long Message"),
    validatorMiddleware_1.ValidatorMiddle,
];
exports.getMessageValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle,
];
exports.deleteMessageValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle,
];
