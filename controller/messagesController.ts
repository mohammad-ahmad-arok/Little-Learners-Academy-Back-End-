import { Request, Response } from "express";
import Messages from "../model/messages";

// Get all Messages
export const getAllMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const messages = await Messages.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
};

// Get a single message
export const getMessageById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const message = await Messages.findById(id);
    if (!message) {
      res.status(404).json({ message: "message not found" });
      return;
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: "Error fetching message", error });
  }
};

//? Create a new message
export const createMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      ParentName,
      EmailAddress,
      PhoneNumber,
      StudentName,
      StudentAge,
      ProgramOfIntrest,
      Message,
    } = req.body;

    const newMessage = new Messages({
      ParentName,
      EmailAddress,
      PhoneNumber,
      StudentName,
      StudentAge,
      ProgramOfIntrest,
      Message,
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Error creating Message", error });
  }
};

//! Delete message
export const deleteMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedMessage = await Messages.findByIdAndDelete(id);
    if (!deletedMessage) {
      res.status(404).json({ message: "Message not found" });
      return;
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Message", error });
  }
};
