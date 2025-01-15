"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.additionalServicesRouter = void 0;
const express_1 = __importDefault(require("express"));
const additionalServicesController_1 = require("../controller/additionalServicesController");
const additionalValidator_1 = require("../utils/validator/additionalValidator");
exports.additionalServicesRouter = express_1.default.Router();
exports.additionalServicesRouter
    .route("/")
    .get(additionalServicesController_1.getAllAdditionalServices)
    .post(additionalValidator_1.createServiceValidator, additionalServicesController_1.createAdditionalService);
exports.additionalServicesRouter
    .route("/:id")
    .get(additionalValidator_1.getServiceValidator, additionalServicesController_1.getAdditionalService)
    .put(additionalValidator_1.updateServiceValidator, additionalServicesController_1.updateAdditionalService)
    .delete(additionalValidator_1.deleteServiceValidator, additionalServicesController_1.deleteAdditionalService);
