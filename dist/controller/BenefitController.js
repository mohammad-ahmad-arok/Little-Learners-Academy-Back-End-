"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBenefit = exports.updateBenefit = exports.createBenefit = exports.getBenefit = exports.getBenefits = void 0;
const Benefit_1 = require("../model/Benefit");
const FactoryHandlers_1 = require("./FactoryHandlers");
exports.getBenefits = (0, FactoryHandlers_1.getAll)(Benefit_1.Benefit);
exports.getBenefit = (0, FactoryHandlers_1.getOne)(Benefit_1.Benefit);
exports.createBenefit = (0, FactoryHandlers_1.createOne)(Benefit_1.Benefit);
exports.updateBenefit = (0, FactoryHandlers_1.updateOne)(Benefit_1.Benefit);
exports.deleteBenefit = (0, FactoryHandlers_1.deleteOne)(Benefit_1.Benefit);
