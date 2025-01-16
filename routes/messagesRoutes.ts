import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessages,
  getMessageById,
} from "../controller/messagesController";
import { createMessageValidator, deleteMessageValidator, getMessageValidator } from "../utils/validator/messageValidator";

const router = express.Router();

router.get("/", getAllMessages);
router.get("/:id",getMessageValidator, getMessageById);
router.post("/", createMessageValidator,createMessage);
router.delete("/:id", deleteMessageValidator,deleteMessage);

export default router;
