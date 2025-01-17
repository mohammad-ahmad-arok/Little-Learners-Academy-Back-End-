import  express  from "express";

import  multer  from "multer";

import {
createRoomValidator,
getRoomValidator,
updateRoomValidator,
deleteRoomValidator
} from"../utils/validator/roomValidator";

import {ApiError} from "../utils/ApiError"

const storage=multer.memoryStorage();

const fileFilter=(req:any,file:any,cb:any)=>{
  if(file.mimetype.startsWith("image")){
    cb(null, true);
  }
  else{
    cb(new ApiError("Allowed file only image",400),false)
  }
}

const upload=multer({ storage,fileFilter});

import {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  processImages
}  from "../controller/roomController" ;

export const roomRouter = express.Router();

roomRouter
  .route("/")
  .get(getAllRooms)
  .post(upload.fields([
    {
      name: "images",
      maxCount: 10
    }
  ]),processImages, createRoomValidator, createRoom);

  roomRouter
  .route("/:id")
  .get(getRoomValidator, getRoom)
  .put(upload.fields([
    {
      name: "images",
      maxCount: 10
    }
  ]),processImages,updateRoomValidator, updateRoom)
  .delete(deleteRoomValidator, deleteRoom);


