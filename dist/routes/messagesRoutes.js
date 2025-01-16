"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messagesController_1 = require("../controller/messagesController");
const messageValidator_1 = require("../utils/validator/messageValidator");
const router = express_1.default.Router();
router.get("/", messagesController_1.getAllMessages);
router.get("/:id", messageValidator_1.getMessageValidator, messagesController_1.getMessageById);
router.post("/", messageValidator_1.createMessageValidator, messagesController_1.createMessage);
router.delete("/:id", messageValidator_1.deleteMessageValidator, messagesController_1.deleteMessage);
exports.default = router;
