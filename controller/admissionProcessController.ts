import AdmissionProcess from "../model/AdmissionProcess";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getAllAdmissionProcesses = getAll(AdmissionProcess);

export const createAdmissionProcess = createOne(AdmissionProcess);

export const getAdmissionProcess = getOne(AdmissionProcess);

export const updateAdmissionProcess = updateOne(AdmissionProcess);

export const deleteAdmissionProcess = deleteOne(AdmissionProcess);
