"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeature = exports.updateFeature = exports.getFeature = exports.createFeature = exports.getAllFeatures = void 0;
const specialFeature_1 = require("../model/specialFeature");
const FactoryHandlers_1 = require("./FactoryHandlers");
exports.getAllFeatures = (0, FactoryHandlers_1.getAll)(specialFeature_1.SpecialFeature);
exports.createFeature = (0, FactoryHandlers_1.createOne)(specialFeature_1.SpecialFeature);
exports.getFeature = (0, FactoryHandlers_1.getOne)(specialFeature_1.SpecialFeature);
exports.updateFeature = (0, FactoryHandlers_1.updateOne)(specialFeature_1.SpecialFeature);
exports.deleteFeature = (0, FactoryHandlers_1.deleteOne)(specialFeature_1.SpecialFeature);
