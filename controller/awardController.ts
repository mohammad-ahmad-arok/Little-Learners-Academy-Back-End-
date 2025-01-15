import Award from "../model/Award";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

// Get all awards and recognitions
export const getAllAwards = getAll(Award);

// Get a single award by ID
export const getAwardById = getOne(Award);

// Create a new award
export const createAward = createOne(Award);

// Update an existing award by ID
export const updateAward = updateOne(Award);

// Delete an award by ID
export const deleteAward = deleteOne(Award);
