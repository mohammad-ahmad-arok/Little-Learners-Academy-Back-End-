import { uploadImageCloudinary } from "../utils/cloudinary";
import fs from "fs";
const uploadImage = (imageOrIcon: "image" | "icon" | "photo") => {
  return async (req: any, res: any, next: any) => {
    if (req.file) {
      try {
        const result = await uploadImageCloudinary(req.file.path);
        if (imageOrIcon == "image") {
          req.image = {
            url: result.secure_url,
            public_id: result.public_id,
          };
        } else if (imageOrIcon == "icon") {
          req.icon = {
            url: result.secure_url,
            public_id: result.public_id,
          };
        } else if (imageOrIcon == "photo") {
          req.photo = {
            url: result.secure_url,
            public_id: result.public_id,
          };
        }
        fs.unlinkSync(req.file.path);
      } catch (error) {
        console.log(error);
      }
    }
    next();
  };
};

export default uploadImage;
