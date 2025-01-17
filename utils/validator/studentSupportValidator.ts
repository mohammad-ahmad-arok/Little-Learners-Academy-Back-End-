import { check }  from"express-validator";
import  {ValidatorMiddle}  from"../../middlewares/validatorMiddleware";
export const createStudentSupportValidator = [
  check("name")
    .notEmpty()
    .withMessage("title required")
    .isLength({ min: 3 })
    .withMessage("Too Short title")
    .isLength({ max: 20 })
    .withMessage("Too Long title")
    ,

  check("description")
    .notEmpty()
    .withMessage("description required")
    .isLength({ min: 10 })
    .withMessage("Too Short description")
    .isLength({ max: 200 })
    .withMessage("Too Long description"),

  ValidatorMiddle
];

export const getStudentSupportValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]


export const updateStudentSupportValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]

export const deleteStudentSupportValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]