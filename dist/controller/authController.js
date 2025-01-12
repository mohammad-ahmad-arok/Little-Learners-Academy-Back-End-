"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protect = exports.Login = exports.createAdmin = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Admin_1 = require("../model/Admin");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const ApiError_1 = require("../utils/ApiError");
const createToken = (payload) => {
    if (!process.env.SECRET_KEY_JWT) {
        throw new Error("SECRET_KEY_JWT is not defined");
    }
    return jsonwebtoken_1.default.sign({ Id: payload }, process.env.SECRET_KEY_JWT, {
        expiresIn: process.env.EXPIRES_JWT,
    });
};
exports.createAdmin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const admin = yield Admin_1.Admin.create(req.body);
    res.status(200).json({ status: "Success", data: admin });
}));
exports.Login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const admin = yield Admin_1.Admin.findOne({ email });
    if (!admin || !(yield bcryptjs_1.default.compare(password, admin.password))) {
        return res
            .status(401)
            .json({ success: false, message: "Invalid email or password" });
    }
    const token = createToken(admin._id);
    res.status(200).json({ status: "Success", data: admin, token });
}));
exports.Protect = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return next(new ApiError_1.ApiError("you are not login, please login to access this route", 401));
    }
    const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY_JWT);
    const admin = yield Admin_1.Admin.findOne({ _id: decoded.Id });
    if (!admin) {
        return next(new ApiError_1.ApiError("admin not found for this token ,you need to login again", 401));
    }
    req.admin = admin;
    next();
}));
