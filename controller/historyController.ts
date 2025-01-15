import History from "../model/History";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

// Get all history entries
export const getAllHistory = getAll(History);

// Get a single history entry by ID
export const getHistoryById = getOne(History);

// Create a new history entry
export const createHistory = createOne(History);

// Update an existing history entry by ID
export const updateHistory = updateOne(History);

// Delete a history entry by ID
export const deleteHistory = deleteOne(History);
