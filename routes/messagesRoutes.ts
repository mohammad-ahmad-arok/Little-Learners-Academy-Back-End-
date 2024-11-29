import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessages,
  getMessageById,
} from "../controller/messagesController";

const router = express.Router();

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.post("/", createMessage);
router.delete("/:id", deleteMessage);

export default router;
