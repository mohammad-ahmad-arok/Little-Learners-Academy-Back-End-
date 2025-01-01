import expressAsyncHandler from "express-async-handler";

import { Testimonial } from "../model/Testimonial";
import { ApiFeatures } from "../utils/ApiFeatures";
import { removeImageCloudinary, uploadImageCloudinary } from "../utils/cloudinary";

export const getTestimonials = expressAsyncHandler(
  async (req: any, res: any) => {
    const countDocument = await Testimonial.countDocuments();

    const feature = new ApiFeatures(Testimonial.find(), req.query);

    feature.Paginate(countDocument);

    const { mongooseQuery } = feature;

    const testimonials = await mongooseQuery;

    res.status(200).json(testimonials);
  }
);

export const getTestimonial = expressAsyncHandler(
  async (req: any, res: any) => {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res.status(404).json({ message: "testimonial not found" });
    }
    res.status(200).json(testimonial);
  }
);

export const createTestimonial = expressAsyncHandler(
  async (req: any, res: any, next: any) => {
    if(req.image){
      req.body.image=req.image;
    }
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  }
);

export const updateTestimonial = expressAsyncHandler(
  async (req: any, res: any) => {
    if (req.file) {
     await removeImageCloudinary(Testimonial,req.params.id);
    }
    if(req.image){
      req.body.image=req.image;
    }
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!testimonial) {
      return res.status(404).json({ message: "testimonial not found" });
    }

    res.status(200).json(testimonial);
  }
);

export const deleteTestimonial = expressAsyncHandler(
  async (req: any, res: any) => {
      const { id } = req.params;
      await removeImageCloudinary(Testimonial,id);
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: "testimonial not found" });
    }
    res.status(200).json({ message: "testimonial deleted successfully" });
  }
);
