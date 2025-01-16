import { check }  from"express-validator";
import  {ValidatorMiddle}  from"../../middlewares/validatorMiddleware";
export const createServiceValidator = [
  check("service")
    .notEmpty()
    .withMessage("Service required")
    .isLength({ min: 3 })
    .withMessage("Too Short Service name")
    .isLength({ max: 50 })
    .withMessage("Too Long Service name"),

  check("price")
    .notEmpty()
    .withMessage("price required")
    
    ,

  ValidatorMiddle
];

export const getServiceValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]


export const updateServiceValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]

export const deleteServiceValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]