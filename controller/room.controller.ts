import { Room } from "../model/room";
import sharp from "sharp";

import fs from "fs";
import path from "path";

import asyncHandler from "express-async-handler";

import { ApiFeatures } from "../utils/ApiFeatures";
import { removeImageCloudinary, removeImagesCloudinary, uploadImageCloudinary } from "../utils/cloudinary";

export const processImages = asyncHandler(
  async (req: any, res: any, next: any) => {
    console.log(req.files);
    req.body.images = [];
    if (req.files.images) {
      await Promise.all(
        req.files.images.map(async (image: any, index: number) => {
          const filename = `room-${Date.now()}-${index}.jpeg`;
          await sharp(image.buffer)
            .resize(400, 400)
            .toFormat("jpeg")
            .jpeg({ quality: 100 })
            .toFile(`uploads/room/${filename}`);
          const result = await uploadImageCloudinary(
            path.join(__dirname,`../uploads/room/${filename}`)
          );
          // fs.unlinkSync(path.join(__dirname,`/uploads/room/${filename}`));
          
          req.body.images.push({
            url: result.secure_url,
            public_id:result.public_id
          });
        })
      );
    }
    next();
  }
);

export const getAllRooms = asyncHandler(async (req: any, res: any) => {
  const countDocuments = await Room.countDocuments();
  const feature = new ApiFeatures(Room.find({}), req.query);

  feature.Paginate(countDocuments).Filter();

  const { mongooseQuery, pagination } = feature;

  const rooms = await mongooseQuery;

  res.status(200).json({ status: "Success", pagination, data: rooms });
});

export const createRoom = asyncHandler(async (req: any, res: any) => {
  const room = await Room.create(req.body);
  res.status(201).json({ status: "Success", data: room });
});

export const getRoom = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;

  const room = await Room.findById(id);
  if (!room) {
    return res.status(404).json({ status: "fail", message: "room not found" });
  }
  res.status(200).json({ status: "Success", data: room });
});

export const updateRoom = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  if(req.files){
    await removeImagesCloudinary(Room,id);
  }
  const room = await Room.findByIdAndUpdate(id, req.body, { new: true });
  if (!room) {
    return res.status(404).json({ status: "fail", message: "room not found" });
  }
  res.status(200).json({ status: "Success", data: room });
});

export const deleteRoom = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  await removeImagesCloudinary(Room,id);
  const room = await Room.findByIdAndDelete(id);
  if (!room) {
    return res.status(404).json({ status: "fail", message: "room not found" });
  }
  res
    .status(200)
    .json({ status: "Success", message: "room deleted successfully" });
});
