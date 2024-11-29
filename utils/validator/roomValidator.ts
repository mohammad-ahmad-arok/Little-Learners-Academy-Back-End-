import { check } from "express-validator";
import {ValidatorMiddle}  from "../../middlewares/validatorMiddleware";

export const createRoomValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3 })
    .withMessage("Too Short Room name")
    .isLength({ max: 50 })
    .withMessage("Too Long Room name"),

  check("description")
    .notEmpty()
    .withMessage("description required")
    .isLength({ min: 10 })
    .withMessage("Too Short description")
    .isLength({ max: 200 })
    .withMessage("Too Long description"),

  ValidatorMiddle
];

export const getRoomValidator=[
    check("id").isMongoId().withMessage("Invalid Room ID"),

    ValidatorMiddle
]


export const updateRoomValidator=[
    check("id").isMongoId().withMessage("Invalid Room ID"),

    ValidatorMiddle
]

export const deleteRoomValidator=[
    check("id").isMongoId().withMessage("Invalid Room ID"),

    ValidatorMiddle
]