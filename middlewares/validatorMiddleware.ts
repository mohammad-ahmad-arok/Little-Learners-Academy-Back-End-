import {validationResult} from "express-validator"

export const ValidatorMiddle=(req:any,res:any,next:any)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ erros: errors.array() });
    }
    next()
}
