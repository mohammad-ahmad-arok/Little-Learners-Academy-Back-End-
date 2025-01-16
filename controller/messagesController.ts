import Messages from "../model/messages";
import { createOne, deleteOne, getAll, getOne } from "./FactoryHandlers";

// Get all Messages
export const getAllMessages = getAll(Messages);

// Get a single message
export const getMessageById = getOne(Messages)

//? Create a new message
export const createMessage = createOne(Messages);

//! Delete message
export const deleteMessage = deleteOne(Messages)