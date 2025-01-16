import { Subject } from "../model/subject";


import { createOne, deleteOne, getAll, getOne, updateOne } from "./FactoryHandlers";

export const getAllSubjects = getAll(Subject);

export const createSubject = createOne(Subject);

export const getSubject = getOne(Subject);

export const updateSubject = updateOne(Subject);

export const deleteSubject = deleteOne(Subject);

