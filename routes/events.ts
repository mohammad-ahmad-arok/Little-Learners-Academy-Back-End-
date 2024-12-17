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
    cb(null, "uploads/events");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `events-${Date.now()}.${ext}`;
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
  getAllEvents,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
} from  "../controller/eventsController";

export const eventsRouter = express.Router();

eventsRouter
  .route("/")
  .get(getAllEvents)
  .post(upload.single("image"), createSubjectValidator, createEvent);

  eventsRouter
  .route("/:id")
  .get(getSubjectValidator, getEvent)
  .put(updateSubjectValidator, updateEvent)
  .delete(deleteSubjectValidator, deleteEvent);


