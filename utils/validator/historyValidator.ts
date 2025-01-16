import { check } from "express-validator";
import { ValidatorMiddle } from "../../middlewares/validatorMiddleware";
export const createHistoryValidator = [
  check("year")
    .notEmpty()
    .withMessage("year required")
    .isNumeric()
    .withMessage("Year Should be Number"),
  check("title")
    .notEmpty()
    .withMessage("title required")
    .isLength({ min: 3 })
    .withMessage("Too Short title")
    .isLength({ max: 40 })
    .withMessage("Too Long title")
    ,
  check("description")
    .notEmpty()
    .withMessage("description required")
    .isLength({ min: 10 })
    .withMessage("Too Short description")
    .isLength({ max: 200 })
    .withMessage("Too Long description"),

  ValidatorMiddle,
];

export const getHistoryValidator = [
  check("id").isMongoId().withMessage("Invalid  ID"),

  ValidatorMiddle,
];

export const updateHistoryValidator = [
  check("id").isMongoId().withMessage("Invalid  ID"),

  ValidatorMiddle,
];

export const deleteHistoryValidator = [
  check("id").isMongoId().withMessage("Invalid  ID"),

  ValidatorMiddle,
];
