"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const subjectValidator_1 = require("../utils/validator/subjectValidator");
const ApiError_1 = require("../utils/ApiError");
const diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/events");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const filename = `events-${Date.now()}.${ext}`;
        cb(null, filename);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    }
    else {
        cb(new ApiError_1.ApiError("only  image allowed", 400), false);
    }
};
const upload = (0, multer_1.default)({ storage: diskStorage, fileFilter });
const eventsController_1 = require("../controller/eventsController");
exports.eventsRouter = express_1.default.Router();
exports.eventsRouter
    .route("/")
    .get(eventsController_1.getAllEvents)
    .post(upload.single("image"), subjectValidator_1.createSubjectValidator, eventsController_1.createEvent);
exports.eventsRouter
    .route("/:id")
    .get(subjectValidator_1.getSubjectValidator, eventsController_1.getEvent)
    .put(subjectValidator_1.updateSubjectValidator, eventsController_1.updateEvent)
    .delete(subjectValidator_1.deleteSubjectValidator, eventsController_1.deleteEvent);