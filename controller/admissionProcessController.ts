import AdmissionProcess from "../model/AdmissionProcess";

import { ApiFeatures } from "../utils/ApiFeatures";

import asyncHandler from "express-async-handler";

export const getAllAdmissionProcesses = asyncHandler(
  async (req: any, res: any) => {
    const countDocuments = await AdmissionProcess.countDocuments();

    const feature = new ApiFeatures(AdmissionProcess.find(), req.query);

    feature.Paginate(countDocuments).Filter();

    const { mongooseQuery, pagination } = feature;

    const admissionProcesses = await mongooseQuery;

    res
      .status(200)
      .json({ status: "Success", pagination, data: admissionProcesses });
  }
);

export const createAdmissionProcess = asyncHandler(
  async (req: any, res: any) => {
    const {step,description}=req.body;
    if(!step || !description) { 
      return res.status(400).json({ status: "fail", message: "feilds are required" });
    }
    const admissionProcess = await AdmissionProcess.create(req.body);
    res.status(201).json({ status: "Success", data: admissionProcess });
  }
);

export const getAdmissionProcess = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  const admissionProcess = await AdmissionProcess.findById(id);
  if (!admissionProcess) {
    return res
      .status(404)
      .json({ status: "fail", message: "admissionProcess not found" });
  }
  res.status(200).json({ status: "Success", data: admissionProcess });
});

export const updateAdmissionProcess = asyncHandler(
  async (req: any, res: any) => {
    const { id } = req.params;
    const admissionProcess = await AdmissionProcess.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!admissionProcess) {
      return res
        .status(404)
        .json({ status: "fail", message: "admissionProcess not found" });
    }
    res.status(200).json({ status: "Success", data: admissionProcess });
  }
);

export const deleteAdmissionProcess = asyncHandler(
  async (req: any, res: any) => {
    const { id } = req.params;
    const admissionProcess = await AdmissionProcess.findByIdAndDelete(id);
    if (!admissionProcess) {
      return res
        .status(404)
        .json({ status: "fail", message: "admissionProcess not found" });
    }
    res
      .status(200)
      .json({ status: "Success", message: "admissionProcess deleted successfully" });
  }
);
