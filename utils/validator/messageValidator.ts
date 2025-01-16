import { check } from "express-validator";
import { ValidatorMiddle } from "../../middlewares/validatorMiddleware";
export const createMessageValidator = [
  check("ParentName").notEmpty().withMessage("ParentName required"),
  check("EmailAddress")
    .notEmpty()
    .withMessage("EmailAddress required")
    .isEmail()
    .withMessage("Enter Valid Email Address"),
  check("PhoneNumber").notEmpty().withMessage("PhoneNumber required"),
  check("StudentName").notEmpty().withMessage("StudentName required")
  .isString()
  .withMessage("StudentName must be a string"),
  check("StudentAge").notEmpty().withMessage("StudentAge required"),
  check("ProgramOfIntrest").notEmpty().withMessage("ProgramOfIntrest required"),


  check("Message")
    .notEmpty()
    .withMessage("Message required")
    .isLength({ min: 10 })
    .withMessage("Too Short Message")
    .isLength({ max: 200 })
    .withMessage("Too Long Message"),

  ValidatorMiddle,
];

export const getMessageValidator = [
  check("id").isMongoId().withMessage("Invalid  ID"),

  ValidatorMiddle,
];

export const deleteMessageValidator = [
  check("id").isMongoId().withMessage("Invalid  ID"),

  ValidatorMiddle,
];
