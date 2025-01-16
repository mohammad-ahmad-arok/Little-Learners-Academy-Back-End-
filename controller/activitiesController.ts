import { activities } from "../model/activities";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getAllActivities = getAll(activities);

export const createActivity = createOne(activities);

export const getActivity = getOne(activities);

export const updateActivity = updateOne(activities);

export const deleteActivity = deleteOne(activities);
