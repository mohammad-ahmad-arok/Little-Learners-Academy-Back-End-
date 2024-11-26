"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomValidator = exports.updateRoomValidator = exports.getRoomValidator = exports.createRoomValidator = void 0;
const express_validator_1 = require("express-validator");
const validatorMiddleware_1 = require("../../middlewares/validatorMiddleware");
exports.createRoomValidator = [
    (0, express_validator_1.check)("name")
        .notEmpty()
        .withMessage("name required")
        .isLength({ min: 3 })
        .withMessage("Too Short Room name")
        .isLength({ max: 50 })
        .withMessage("Too Long Room name"),
    (0, express_validator_1.check)("description")
        .notEmpty()
        .withMessage("description required")
        .isLength({ min: 10 })
        .withMessage("Too Short description")
        .isLength({ max: 200 })
        .withMessage("Too Long description"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.getRoomValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Room ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.updateRoomValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Room ID"),
    validatorMiddleware_1.ValidatorMiddle
];
exports.deleteRoomValidator = [
    (0, express_validator_1.check)("id").isMongoId().withMessage("Invalid Room ID"),
    validatorMiddleware_1.ValidatorMiddle
];
