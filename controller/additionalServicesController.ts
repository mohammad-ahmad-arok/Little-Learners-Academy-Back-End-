import AdditionalService from "../model/AdditionalServices";

import { ApiFeatures } from "../utils/ApiFeatures";

import asyncHandler from "express-async-handler";

export const getAllAdditionalServices = asyncHandler(
  async (req: any, res: any) => {
    const countDocuments = await AdditionalService.countDocuments();

    const feature = new ApiFeatures(AdditionalService.find(), req.query);

    feature.Paginate(countDocuments).Filter();

    const { mongooseQuery, pagination } = feature;

    const additionalServices = await mongooseQuery;

    res
      .status(200)
      .json({ status: "Success", pagination, data: additionalServices });
  }
);

export const createAdditionalService = asyncHandler(
  async (req: any, res: any) => {
    const {service,price}=req.body;
    if(!service || !price) { 
      return res.status(400).json({ status: "fail", message: "feilds are required" });
    }
    const additionalService = await AdditionalService.create(req.body);
    res.status(201).json({ status: "Success", data: additionalService });
  }
);

export const getAdditionalService = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  const additionalService = await AdditionalService.findById(id);
  if (!additionalService) {
    return res
      .status(404)
      .json({ status: "fail", message: "additionalService not found" });
  }
  res.status(200).json({ status: "Success", data: additionalService });
});

export const updateAdditionalService = asyncHandler(
  async (req: any, res: any) => {
    const { id } = req.params;
    const additionalService = await AdditionalService.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!additionalService) {
      return res
        .status(404)
        .json({ status: "fail", message: "additionalService not found" });
    }
    res.status(200).json({ status: "Success", data: additionalService });
  }
);

export const deleteAdditionalService = asyncHandler(
  async (req: any, res: any) => {
    const { id } = req.params;
    const additionalService = await AdditionalService.findByIdAndDelete(id);
    if (!additionalService) {
      return res
        .status(404)
        .json({ status: "fail", message: "additionalService not found" });
    }
    res
      .status(200)
      .json({ status: "Success", message: "additionalService deleted successfully" });
  }
);
