import asyncHandler  from "express-async-handler"
import {Admin} from "../model/Admin"

import jwt from "jsonwebtoken"

import bcrypt from "bcryptjs"

import {ApiError} from "../utils/ApiError"





const createToken = (payload: any) => {
    if (!process.env.SECRET_KEY_JWT) {
        throw new Error("SECRET_KEY_JWT is not defined");
    }
    return jwt.sign({ Id: payload }, process.env.SECRET_KEY_JWT, {
        expiresIn: process.env.EXPIRES_JWT,
    });
};

export const createAdmin =asyncHandler(async (req:any, res:any) =>{
  const { email, password } = req.body;

  const admin = await Admin.create(req.body);
  
  res.status(200).json({ status: "Success", data: admin });
});



export const Login=asyncHandler(async (req:any, res:any) =>{
    const { email, password } = req.body;
  
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const token = createToken(admin._id);
    res.status(200).json({ status: "Success", data: admin, token });
  });

 export const Protect = asyncHandler(async (req: any, res: any, next) => {
     let token;
     if (
       req.headers.authorization &&
       req.headers.authorization.startsWith("Bearer ")
     ) {
       token = req.headers.authorization.split(" ")[1];
     }
     if (!token) {
       return next(
         new ApiError("you are not login, please login to access this route", 401)
       );
     }

     const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT!) as jwt.JwtPayload;

     const admin = await Admin.findOne({ _id: decoded.Id });
     if (!admin) {
       return next(
         new ApiError("admin not found for this token ,you need to login again", 401),
       );
     }

     req.admin = admin;

     next();
   });
