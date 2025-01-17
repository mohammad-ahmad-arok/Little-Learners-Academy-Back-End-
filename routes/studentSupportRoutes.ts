import express from "express";

import multer from "multer";
import {
getStudentSupport,
getStudentSupports,
createStudentSupport,
updateStudentSupport,
deleteStudentSupport
} from "../controller/studentSupportController";

import {
createStudentSupportValidator,
getStudentSupportValidator,
updateStudentSupportValidator,
deleteStudentSupportValidator
} from "../utils/validator/studentSupportValidator";

import uploadImage from "../middlewares/uploadImageMiddlware";

const diskStorage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "uploads/Benefit");
  },
  filename: function (req: any, file: any, cb: any) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `student-support-${Date.now()}.${ext}`;

    cb(null, fileName);
  },
});
const upload = multer({
  storage: diskStorage,
  fileFilter: function (req: any, file: any, cb: any) {
    const type = file.mimetype.split("/")[0];
    if (type === "image") {
      return cb(null, true);
    } else {
      return cb(new Error("Only image are allowed."), false);
    }
  },
});

export const StudentSupportRouter = express.Router();

StudentSupportRouter.route("/")
  .get(getStudentSupports)
  .post(
    upload.single("image"),
    uploadImage("image"),
    createStudentSupportValidator,
    createStudentSupport
  );
  StudentSupportRouter.route("/:id")
  .delete(deleteStudentSupportValidator, deleteStudentSupport)
  .put(
    upload.single("image"),
    uploadImage("image"),
    updateStudentSupportValidator,
    updateStudentSupport
  )
  .get(getStudentSupportValidator, getStudentSupport);
