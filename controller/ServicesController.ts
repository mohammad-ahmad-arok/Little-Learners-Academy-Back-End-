import { Request, Response } from 'express';
import AdmissionProcess from '../model/AdmissionProcess';
import FeeStructure from '../model/FeeStructure';
import AdditionalService from '../model/AdditionalServices';

// Admission Process
export const getAdmissionProcess = async (_req: Request, res: Response) => {
  const data = await AdmissionProcess.find();
};

export const createAdmissionStep = async (req: Request, res: Response) => {
  const step = await AdmissionProcess.create(req.body);
};

// Fee Structure
export const getFeeStructure = async (_req: Request, res: Response) => {
  const data = await FeeStructure.find();
};

export const createFeeStructure = async (req: Request, res: Response) => {
  const fee = await FeeStructure.create(req.body);
};

// Additional Services
export const getAdditionalServices = async (_req: Request, res: Response) => {
  const data = await AdditionalService.find();
};

export const createAdditionalService = async (req: Request, res: Response) => {
  const service = await AdditionalService.create(req.body);
};
