import express from "express" ;

import  multer from "multer";

import  {
   createSubjectValidator,
   getSubjectValidator,
   updateSubjectValidator,
   deleteSubjectValidator,
} from "../utils/validator/subjectValidator";

import {ApiError} from "../utils/ApiError"

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/subject");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `subject-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});


const fileFilter = (req:any, file:any, cb:any) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new ApiError("only  image allowed", 400), false);
  }
};

const upload = multer({ storage: diskStorage, fileFilter });

import  {
  getAllSubjects,
  getSubject,
  createSubject,
  updateSubject,
  deleteSubject,
} from  "../controller/subject.controller";

export const subjectRouter = express.Router();

subjectRouter
  .route("/")
  .get(getAllSubjects)
  .post(upload.single("image"), createSubjectValidator, createSubject);

  subjectRouter
  .route("/:id")
  .get(getSubjectValidator, getSubject)
  .put(upload.single("image"),updateSubjectValidator, updateSubject)
  .delete(deleteSubjectValidator, deleteSubject);


