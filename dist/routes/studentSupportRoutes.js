"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSupportRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const studentSupportController_1 = require("../controller/studentSupportController");
const studentSupportValidator_1 = require("../utils/validator/studentSupportValidator");
const uploadImageMiddlware_1 = __importDefault(require("../middlewares/uploadImageMiddlware"));
const diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/Benefit");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const fileName = `student-support-${Date.now()}.${ext}`;
        cb(null, fileName);
    },
});
const upload = (0, multer_1.default)({
    storage: diskStorage,
    fileFilter: function (req, file, cb) {
        const type = file.mimetype.split("/")[0];
        if (type === "image") {
            return cb(null, true);
        }
        else {
            return cb(new Error("Only image are allowed."), false);
        }
    },
});
exports.StudentSupportRouter = express_1.default.Router();
exports.StudentSupportRouter.route("/")
    .get(studentSupportController_1.getStudentSupports)
    .post(upload.single("image"), (0, uploadImageMiddlware_1.default)("image"), studentSupportValidator_1.createStudentSupportValidator, studentSupportController_1.createStudentSupport);
exports.StudentSupportRouter.route("/:id")
    .delete(studentSupportValidator_1.deleteStudentSupportValidator, studentSupportController_1.deleteStudentSupport)
    .put(upload.single("image"), (0, uploadImageMiddlware_1.default)("image"), studentSupportValidator_1.updateStudentSupportValidator, studentSupportController_1.updateStudentSupport)
    .get(studentSupportValidator_1.getStudentSupportValidator, studentSupportController_1.getStudentSupport);
