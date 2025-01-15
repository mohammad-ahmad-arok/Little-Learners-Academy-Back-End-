import { Benefit } from "../model/Benefit";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getBenefits = getAll(Benefit);

export const getBenefit = getOne(Benefit);

export const createBenefit = createOne(Benefit);

export const updateBenefit = updateOne(Benefit);

export const deleteBenefit = deleteOne(Benefit);
