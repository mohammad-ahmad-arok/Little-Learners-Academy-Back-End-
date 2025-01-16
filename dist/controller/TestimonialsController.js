"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonial = exports.getTestimonials = void 0;
const Testimonial_1 = require("../model/Testimonial");
const FactoryHandlers_1 = require("./FactoryHandlers");
exports.getTestimonials = (0, FactoryHandlers_1.getAll)(Testimonial_1.Testimonial);
exports.getTestimonial = (0, FactoryHandlers_1.getOne)(Testimonial_1.Testimonial);
exports.createTestimonial = (0, FactoryHandlers_1.createOne)(Testimonial_1.Testimonial);
exports.updateTestimonial = (0, FactoryHandlers_1.updateOne)(Testimonial_1.Testimonial);
exports.deleteTestimonial = (0, FactoryHandlers_1.deleteOne)(Testimonial_1.Testimonial);
