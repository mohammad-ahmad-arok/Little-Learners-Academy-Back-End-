import { check } from "express-validator";
import { ValidatorMiddle } from "../../middlewares/validatorMiddleware";
export const createFeeValidator = [
  check("program")
    .notEmpty()
    .withMessage("program required")
    .isLength({ min: 3 })
    .withMessage("Too Short title")
    .isLength({ max: 20 })
    .withMessage("Too Long title"),
  check("ageGroup").notEmpty().withMessage("ageGroup required"),
  check("annualTuition").notEmpty().withMessage("annualTuition required"),
  check("registrationFee").notEmpty().withMessage("registrationFee required"),
  check("activityFee").notEmpty().withMessage("activityFee required"),


  ValidatorMiddle,
];

export const getFeeValidator = [
  check("id").isMongoId().withMessage("Invalid  ID"),

  ValidatorMiddle,
];

export const updateFeeValidator = [
  check("id").isMongoId().withMessage("Invalid  ID"),

  ValidatorMiddle,
];

export const deleteFeeValidator = [
  check("id").isMongoId().withMessage("Invalid  ID"),

  ValidatorMiddle,
];
