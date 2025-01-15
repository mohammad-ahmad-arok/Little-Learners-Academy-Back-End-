import { Testimonial } from "../model/Testimonial";

import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./FactoryHandlers";

export const getTestimonials = getAll(Testimonial);

export const getTestimonial = getOne(Testimonial);

export const createTestimonial = createOne(Testimonial);

export const updateTestimonial = updateOne(Testimonial);

export const deleteTestimonial = deleteOne(Testimonial);
