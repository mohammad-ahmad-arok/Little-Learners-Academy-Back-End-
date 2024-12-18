import  express from "express";

import  multer from "multer";

import {
  createFeatureValidator,
  getFeatureValidator,
  updateFeatureValidator,
  deleteFeatureValidator,
} from"../utils/validator/specialFeatureValidator";

import {ApiError} from "../utils/ApiError"

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/activities");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `activities-${Date.now()}.${ext}`;
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

import   {
  getAllActivities,
  createActivity,
  getActivity,
  updateActivity,
  deleteActivity,
} from "../controller/activitiesController" ;

export const activitiesRouter = express.Router();

activitiesRouter
  .route("/")
  .get(getAllActivities)
  .post(upload.single("image"), createFeatureValidator, createActivity);

  activitiesRouter
  .route("/:id")
  .get(getFeatureValidator, getActivity)
  .put(updateFeatureValidator, updateActivity)
  .delete(deleteFeatureValidator, deleteActivity);

