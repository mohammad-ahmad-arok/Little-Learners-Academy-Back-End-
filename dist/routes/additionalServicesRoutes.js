"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.additionalServicesRouter = void 0;
const express_1 = __importDefault(require("express"));
const additionalServicesController_1 = require("../controller/additionalServicesController");
exports.additionalServicesRouter = express_1.default.Router();
exports.additionalServicesRouter
    .route("/")
    .get(additionalServicesController_1.getAllAdditionalServices)
    .post(additionalServicesController_1.createAdditionalService);
exports.additionalServicesRouter
    .route("/:id")
    .get(additionalServicesController_1.getAdditionalService)
    .put(additionalServicesController_1.updateAdditionalService)
    .delete(additionalServicesController_1.deleteAdditionalService);
