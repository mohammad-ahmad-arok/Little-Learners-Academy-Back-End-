import  { check } from "express-validator";
import  {ValidatorMiddle} from "../../middlewares/validatorMiddleware";
export const createFeatureValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3 })
    .withMessage("Too Short Feature name")
    .isLength({ max: 50 })
    .withMessage("Too Long Feature name"),

  check("description")
    .notEmpty()
    .withMessage("description required")
    .isLength({ min: 10 })
    .withMessage("Too Short description")
    .isLength({ max: 200 })
    .withMessage("Too Long description"),

  ValidatorMiddle
];

export const  getFeatureValidator=[
    check("id").isMongoId().withMessage("Invalid Feature ID"),

    ValidatorMiddle
]


export const updateFeatureValidator=[
    check("id").isMongoId().withMessage("Invalid Feature ID"),

    ValidatorMiddle
]

export const deleteFeatureValidator=[
    check("id").isMongoId().withMessage("Invalid Feature ID"),

    ValidatorMiddle
]