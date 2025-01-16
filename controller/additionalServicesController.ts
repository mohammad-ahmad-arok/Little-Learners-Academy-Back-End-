import AdditionalService from "../model/AdditionalServices";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getAllAdditionalServices = getAll(AdditionalService);

export const createAdditionalService = createOne(AdditionalService);

export const getAdditionalService = getOne(AdditionalService);

export const updateAdditionalService = updateOne(AdditionalService);

export const deleteAdditionalService = deleteOne(AdditionalService);
