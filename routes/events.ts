import express from "express" ;

import  multer from "multer";

import uploadImage from "../middlewares/uploadImageMiddlware";

import  {
   createSubjectValidator,
   getSubjectValidator,
   updateSubjectValidator,
   deleteSubjectValidator,
} from "../utils/validator/subjectValidator";

import {createEventValidator,getEventValidator,updateEventValidator,deleteEventValidator} from "../utils/validator/eventValidator"

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
  .post(upload.single("image"),uploadImage("image"), createEventValidator, createEvent);

  eventsRouter
  .route("/:id")
  .get(getEventValidator, getEvent)
  .put(upload.single("image"),uploadImage("image"), updateEventValidator, updateEvent)
  .delete(deleteEventValidator, deleteEvent);


