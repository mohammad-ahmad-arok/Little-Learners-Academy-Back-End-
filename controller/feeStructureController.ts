import FeeStructure from "../model/FeeStructure";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getAllFeeStructures = getAll(FeeStructure);

export const createfeeStructure = createOne(FeeStructure);

export const getfeeStructure = getOne(FeeStructure);

export const updateFeeStructure = updateOne(FeeStructure);

export const deleteFeeStructure = deleteOne(FeeStructure);
