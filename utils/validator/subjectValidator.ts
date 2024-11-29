import { check }  from"express-validator";
import  {ValidatorMiddle}  from"../../middlewares/validatorMiddleware";
export const createSubjectValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3 })
    .withMessage("Too Short Subject name")
    .isLength({ max: 50 })
    .withMessage("Too Long Subject name"),

  check("description")
    .notEmpty()
    .withMessage("description required")
    .isLength({ min: 10 })
    .withMessage("Too Short description")
    .isLength({ max: 200 })
    .withMessage("Too Long description"),

  ValidatorMiddle
];

export const getSubjectValidator=[
    check("id").isMongoId().withMessage("Invalid Subject ID"),

    ValidatorMiddle
]


export const updateSubjectValidator=[
    check("id").isMongoId().withMessage("Invalid Subject ID"),

    ValidatorMiddle
]

export const deleteSubjectValidator=[
    check("id").isMongoId().withMessage("Invalid Subject ID"),

    ValidatorMiddle
]