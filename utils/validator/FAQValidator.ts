import { check }  from"express-validator";
import  {ValidatorMiddle}  from"../../middlewares/validatorMiddleware";
export const createFaqValidator = [
  check("question")
    .notEmpty()
    .withMessage("question required")
    .isLength({ min: 3 })
    .withMessage("Too Short question")
    .isLength({ max: 100 })
    .withMessage("Too Long question")
    ,

  check("answer")
    .notEmpty()
    .withMessage("answer required")
     ,

  ValidatorMiddle
];

export const getFaqValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]


export const updateFaqValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]

export const deleteFaqValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]