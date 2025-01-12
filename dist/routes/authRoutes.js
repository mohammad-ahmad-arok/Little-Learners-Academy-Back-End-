"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controller/authController");
exports.authRouter = express_1.default.Router();
exports.authRouter.post("/login", authController_1.Login);
exports.authRouter.post("/add", authController_1.createAdmin);
