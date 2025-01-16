import { SpecialFeature } from "../model/specialFeature";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getAllFeatures = getAll(SpecialFeature);

export const createFeature = createOne(SpecialFeature);

export const getFeature = getOne(SpecialFeature);

export const updateFeature = updateOne(SpecialFeature);

export const deleteFeature = deleteOne(SpecialFeature);
