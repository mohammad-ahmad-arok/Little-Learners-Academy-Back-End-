"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMemberValidator = exports.updateMemberValidator = exports.getMemberValidator = exports.createMemberValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createMemberValidator = [
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
    (0, express_validator_1.check)("qualification")
        .notEmpty()
        .withMessage("qualification required"),
    (0, express_validator_1.check)("email")
        .notEmpty()
        .withMessage("email required")
        .isEmail()
        .withMessage("Enter Valid Email Address"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getMemberValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateMemberValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteMemberValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid  ID"),
    validatorMiddleware_1.ValidatorMiddle
];
