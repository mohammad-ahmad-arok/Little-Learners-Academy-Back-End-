import { check }  from"express-validator";
import  {ValidatorMiddle}  from"../../middlewares/validatorMiddleware";
export const createMemberValidator = [
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

    check("qualification")
    .notEmpty()
    .withMessage("qualification required")
    ,
    
    check("email")
    .notEmpty()
    .withMessage("email required")
    .isEmail()
    .withMessage("Enter Valid Email Address")
    ,

  ValidatorMiddle
];

export const getMemberValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]


export const updateMemberValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]

export const deleteMemberValidator=[
    check("id").isMongoId().withMessage("Invalid  ID"),

    ValidatorMiddle
]