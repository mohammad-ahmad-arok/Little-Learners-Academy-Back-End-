import  express from "express";

import  multer from "multer";

import uploadImage from "../middlewares/uploadImageMiddlware";

import {
  createFeatureValidator,
  getFeatureValidator,
  updateFeatureValidator,
  deleteFeatureValidator,
} from"../utils/validator/specialFeatureValidator";

import {ApiError} from "../utils/ApiError"

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/specialFeature");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `specialFeature-${Date.now()}.${ext}`;
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
  getAllFeatures,
  createFeature,
  getFeature,
  updateFeature,
  deleteFeature,
} from "../controller/specialFeature.controller" ;

export const specialFeaturesRouter = express.Router();

specialFeaturesRouter
  .route("/")
  .get(getAllFeatures)
  .post(upload.single("image"),uploadImage("image"), createFeatureValidator, createFeature);

  specialFeaturesRouter
  .route("/:id")
  .get(getFeatureValidator, getFeature)
  .put(upload.single("image"),uploadImage("image"),updateFeatureValidator, updateFeature)
  .delete(deleteFeatureValidator, deleteFeature);

