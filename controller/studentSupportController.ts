import { StudentSupport } from "../model/StudentSupport";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getStudentSupports = getAll(StudentSupport);

export const getStudentSupport = getOne(StudentSupport);

export const createStudentSupport = createOne(StudentSupport);

export const updateStudentSupport = updateOne(StudentSupport);

export const deleteStudentSupport = deleteOne(StudentSupport);
