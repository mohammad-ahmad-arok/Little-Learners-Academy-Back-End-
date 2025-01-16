import { Room } from "../model/room";
import sharp from "sharp";

import asyncHandler from "express-async-handler";

import { uploadImageCloudinary } from "../utils/cloudinary";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

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
            `./uploads/room/${filename}`
          );
          // fs.unlinkSync(path.join(__dirname,`/uploads/room/${filename}`));

          req.body.images.push({
            url: result.secure_url,
            public_id: result.public_id,
          });
        })
      );
    }
    next();
  }
);

export const getAllRooms = getAll(Room);

export const createRoom = createOne(Room);

export const getRoom = getOne(Room);

export const updateRoom = updateOne(Room);

export const deleteRoom = deleteOne(Room);
