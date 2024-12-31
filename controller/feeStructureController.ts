import FeeStructure from "../model/FeeStructure";

import { ApiFeatures } from "../utils/ApiFeatures";

import asyncHandler from "express-async-handler";

export const getAllFeeStructures = asyncHandler(
  async (req: any, res: any) => {
    const countDocuments = await FeeStructure.countDocuments();

    const feature = new ApiFeatures(FeeStructure.find(), req.query);

    feature.Paginate(countDocuments).Filter();

    const { mongooseQuery, pagination } = feature;

    const feeStructures = await mongooseQuery;

    res
      .status(200)
      .json({ status: "Success", pagination, data: feeStructures });
  }
);

export const createfeeStructure = asyncHandler(
  async (req: any, res: any) => {
    const {program,ageGroup,annualTuition,registrationFee,activityFee}=req.body;
    if(!program || !ageGroup || annualTuition ||registrationFee || activityFee) { 
      return res.status(400).json({ status: "fail", message: "feilds are required" });
    }
    const feeStructure = await FeeStructure.create(req.body);
    res.status(201).json({ status: "Success", data: feeStructure });
  }
);

export const getfeeStructure = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  const feeStructure = await FeeStructure.findById(id);
  if (!feeStructure) {
    return res
      .status(404)
      .json({ status: "fail", message: "feeStructure not found" });
  }
  res.status(200).json({ status: "Success", data: feeStructure });
});

export const updateFeeStructure = asyncHandler(
  async (req: any, res: any) => {
    const { id } = req.params;
    const feeStructure = await FeeStructure.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!feeStructure) {
      return res
        .status(404)
        .json({ status: "fail", message: "feeStructure not found" });
    }
    res.status(200).json({ status: "Success", data: feeStructure });
  }
);

export const deleteFeeStructure = asyncHandler(
  async (req: any, res: any) => {
    const { id } = req.params;
    const feeStructure = await FeeStructure.findByIdAndDelete(id);
    if (!feeStructure) {
      return res
        .status(404)
        .json({ status: "fail", message: "feeStructure not found" });
    }
    res
      .status(200)
      .json({ status: "Success", message: "feeStructure deleted successfully" });
  }
);
