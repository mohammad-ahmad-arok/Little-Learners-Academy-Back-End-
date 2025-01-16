import { event } from "../model/events";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getAllEvents = getAll(event);

export const createEvent = createOne(event);

export const getEvent = getOne(event);

export const updateEvent = updateOne(event);

export const deleteEvent = deleteOne(event);
