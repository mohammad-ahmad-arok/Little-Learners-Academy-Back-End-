import { CommonQuestion } from "../model/CommonQuestion";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getCommonQuestions = getAll(CommonQuestion);

export const getCommonQuestion = getOne(CommonQuestion);

export const createCommonQuestion = createOne(CommonQuestion);

export const updateCommonQuestion = updateOne(CommonQuestion);

export const deleteCommonQuestion = deleteOne(CommonQuestion);
