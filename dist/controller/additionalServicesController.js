"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdditionalService = exports.updateAdditionalService = exports.getAdditionalService = exports.createAdditionalService = exports.getAllAdditionalServices = void 0;
const AdditionalServices_1 = __importDefault(require("../model/AdditionalServices"));
const FactoryHandlers_1 = require("./FactoryHandlers");
exports.getAllAdditionalServices = (0, FactoryHandlers_1.getAll)(AdditionalServices_1.default);
exports.createAdditionalService = (0, FactoryHandlers_1.createOne)(AdditionalServices_1.default);
exports.getAdditionalService = (0, FactoryHandlers_1.getOne)(AdditionalServices_1.default);
exports.updateAdditionalService = (0, FactoryHandlers_1.updateOne)(AdditionalServices_1.default);
exports.deleteAdditionalService = (0, FactoryHandlers_1.deleteOne)(AdditionalServices_1.default);
