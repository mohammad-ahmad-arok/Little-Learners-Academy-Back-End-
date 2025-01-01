"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const uploadImageMiddlware_1 = __importDefault(require("../middlewares/uploadImageMiddlware"));
const subjectValidator_1 = require("../utils/validator/subjectValidator");
const ApiError_1 = require("../utils/ApiError");
const diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/subject");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const filename = `subject-${Date.now()}.${ext}`;
        cb(null, filename);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    }
    else {
        cb(new ApiError_1.ApiError("only  image allowed", 400), false);
    }
};
const upload = (0, multer_1.default)({ storage: diskStorage, fileFilter });
const subject_controller_1 = require("../controller/subject.controller");
exports.subjectRouter = express_1.default.Router();
exports.subjectRouter
    .route("/")
    .get(subject_controller_1.getAllSubjects)
    .post(upload.single("image"), (0, uploadImageMiddlware_1.default)("image"), subjectValidator_1.createSubjectValidator, subject_controller_1.createSubject);
exports.subjectRouter
    .route("/:id")
    .get(subjectValidator_1.getSubjectValidator, subject_controller_1.getSubject)
    .put(upload.single("image"), (0, uploadImageMiddlware_1.default)("image"), subjectValidator_1.updateSubjectValidator, subject_controller_1.updateSubject)
    .delete(subjectValidator_1.deleteSubjectValidator, subject_controller_1.deleteSubject);
