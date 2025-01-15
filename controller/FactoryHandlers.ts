import expressAsyncHandler from "express-async-handler";
import { Model } from "mongoose";
import { ApiFeatures } from "../utils/ApiFeatures";
import {
  removeImageCloudinary,
  removeImagesCloudinary,
} from "../utils/cloudinary";

export const createOne = (Modal: Model<any>) =>
  expressAsyncHandler(async (req: any, res: any) => {
    if (req.image) {
      req.body.image = req.image;
    } else if (req.icon) {
      req.body.icon = req.icon;
    } else if (req.photo) {
      req.body.photo = req.photo;
    }
    const document = await Modal.create(req.body);
    res.status(201).json({ status: "Success", data: document });
  });

export const getAll = (Modal: Model<any>) =>
  expressAsyncHandler(async (req: any, res: any) => {
    const countDocument = await Modal.countDocuments();

    const feature = new ApiFeatures(Modal.find(), req.query);

    feature.Paginate(countDocument).Filter();

    const { mongooseQuery, pagination } = feature;

    const documents = await mongooseQuery;

    res.status(200).json({ status: "Success", pagination, data: documents });
  });

export const getOne = (Modal: Model<any>) =>
  expressAsyncHandler(async (req: any, res: any) => {
    const { id } = req.params;
    const document = await Modal.findById(id);
    if (!document) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Document not found" });
    }
    res.status(200).json({ status: "Success", data: document });
  });

export const updateOne = (Modal: Model<any>) =>
  expressAsyncHandler(async (req: any, res: any) => {
    let param;
    if (req.params.id) {
      param = req.params.id;
    } else if (req.params.title) {
      param = req.params.title;
    }

    // Check For remove Image is cloudinary
    if (req.file) {
      await removeImageCloudinary(Modal, param);
    } else if (req.files) {
      await removeImagesCloudinary(Modal, param);
    }

    // check to add feild to body
    if (req.image) {
      req.body.image = req.image;
    } else if (req.icon) {
      req.body.icon = req.icon;
    } else if (req.photo) {
      req.body.photo = req.photo;
    }

    // this for param title or id
    let document;
    if (req.params.id) {
      document = await Modal.findByIdAndUpdate(param, req.body, {
        new: true,
      });
    } else if (req.params.title) {
      document = await Modal.findOneAndUpdate(
        { title: req.params.title },
        req.body,
        { new: true }
      );
    }

    if (!document) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Document not found" });
    }
    res.status(200).json({ status: "Success", data: document });
  });

export const deleteOne = (Modal: Model<any>) =>
  expressAsyncHandler(async (req: any, res: any) => {
    let document;
    // find Document To Check If Contain Image In Clundinary To Remove
    if (req.params.id) {
      const findDocument = await Modal.findById(req.params.id);

      if (findDocument.image || findDocument.icon || findDocument.photo) {
        await removeImageCloudinary(Modal, req.params.id);
      } else if (findDocument.images) {
        await removeImagesCloudinary(Modal, req.params.id);
      }
      // this for param title or id
       document = await Modal.findByIdAndDelete(req.params.id);
    }

    else if(req.params.title){
      document=await Modal.findOneAndDelete({title:req.params.title})
    }

    if (!document) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Document not found" });
    }
    res
      .status(200)
      .json({ status: "Success", message: "Document deleted successfully" });
  });
