import express from "express";

import { Login,createAdmin } from "../controller/authController";

export const authRouter = express.Router();

authRouter.post("/login", Login);
authRouter.post("/add",createAdmin);
