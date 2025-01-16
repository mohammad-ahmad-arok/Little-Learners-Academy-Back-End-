import { check }  from"express-validator";
import  {ValidatorMiddle}  from"../../middlewares/validatorMiddleware";
export const createTestimonialValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3 })
    .withMessage("Too Short name")
    .isLength({ max: 20 })
    .withMessage("Too Long name")
    ,

  check("description")
    .notEmpty()
    .withMessage("description required")
    .isLength({ min: 10 })
    .withMessage("Too Short description")
    .isLength({ max: 200 })
    .withMessage("Too Long description"),

    check("evaluation")
    .notEmpty()
    .withMessage("evaluation required")
    .isNumeric()
    .withMessage("evaluation should be a number")
    ,

  ValidatorMiddle
];

export const getTestimonialValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]


export const updateTestimonialValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]

export const deleteTestimonialValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]