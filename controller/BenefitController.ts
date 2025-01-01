import expressAsyncHandler from "express-async-handler";

import { Benefit } from "../model/Benefit";
import { ApiFeatures } from "../utils/ApiFeatures";
import {
  removeImageCloudinary,
  uploadImageCloudinary,
} from "../utils/cloudinary";

export const getBenefits = expressAsyncHandler(async (req: any, res: any) => {
  const countDocument = await Benefit.countDocuments();

  const feature = new ApiFeatures(Benefit.find(), req.query);

  feature.Paginate(countDocument);

  const { mongooseQuery } = feature;

  const Benefits = await mongooseQuery;
  res.status(200).json(Benefits);
});

export const getBenefit = expressAsyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  const benefit = await Benefit.findById(id);
  if (!benefit) {
    return res.status(404).json({ message: "benefit not found" });
  }
  res.status(200).json(benefit);
});

export const createBenefit = expressAsyncHandler(
  async (req: any, res: any, next: any) => {
    if (req.icon) {
      req.body.icon = req.icon;
    }
    const benefit = await Benefit.create(req.body);
    res.status(201).json(benefit);
  }
);

export const updateBenefit = expressAsyncHandler(async (req: any, res: any) => {
  if (req.file) {
    await removeImageCloudinary(Benefit, req.params.id);
  }
  if (req.icon) {
    req.body.icon = req.icon;
  }
  const benefit = await Benefit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!benefit) {
    return res.status(404).json({ message: "benefit not found" });
  }

  res.status(200).json(benefit);
});

export const deleteBenefit = expressAsyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  await removeImageCloudinary(Benefit, id);
  const benefit = await Benefit.findByIdAndDelete(req.params.id);
  if (!benefit) {
    return res.status(404).json({ message: "benefit not found" });
  }
  res.status(200).json({ message: "benefit deleted successfully" });
});
