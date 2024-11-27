import express from "express";

import multer from "multer";
import {getFeatures,getFeature,createFeature,updateFeature,deleteFeature} from "../controller/FeaturesController"


const diskStorage = multer.diskStorage({
  destination : function(req:any, file:any, cb:any) {
      cb(null, 'uploads');
  },
  filename: function(req:any, file:any, cb:any) {
      const ext = file.mimetype.split('/')[1];
      const fileName = `user-${Date.now()}.${ext}`;
      
      cb(null, fileName);
  }
})
const upload = multer({
  storage : diskStorage ,
fileFilter: function(req:any, file:any, cb:any) {
  const type = file.mimetype.split('/')[0];
  if(type === 'image'){
      return cb(null, true);
  }
  else{
      return cb(new Error('Only image are allowed.'), false);
  }
}
})

export const FeaturesRouter=express.Router();

FeaturesRouter.route("/").get(getFeatures).post(upload.single('icon'),createFeature);
FeaturesRouter.route("/:id").delete(deleteFeature).put(upload.single('icon'),updateFeature).get(getFeature)

