import expressAsyncHandler from "express-async-handler"

import {Feature} from "../model/Feature";
import {ApiFeatures} from "../utils/ApiFeatures"

export const getFeatures=expressAsyncHandler( async (req:any, res:any) => {

    const feature=new ApiFeatures(Feature.find(),req.query)

    feature.Paginate();

    const {mongooseQuery}=feature;

    const features=await mongooseQuery
    res.status(200).json(features);

  })

  export const getFeature=expressAsyncHandler( async (req:any, res:any) => {
    const { id } = req.params;
    const feature = await Feature.findById(id);
    if (!feature) {
      return res.status(404).json({ message: "feature not found" });
    }
    res.status(200).json(feature);

})


export const createFeature=expressAsyncHandler( async (req:any, res:any,next:any) => {
    const feature = new Feature({
        title: req.body.title,
        description: req.body.description,
        icon : `http://localhost:5000/${req.file.filename}`
    });
    await feature.save();

    res.status(201).json(feature);

})

export const updateFeature=expressAsyncHandler( async (req:any, res:any) => {
    const feature = await Feature.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        icon : `http://localhost:5000/${req.file.filename}`
        },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!feature) {
      return res.status(404).json({ message: "feature not found" });
    }

    res.status(200).json(feature);

})

export const deleteFeature=expressAsyncHandler( async (req:any, res:any) => {
    const feature = await Feature.findByIdAndDelete(req.params.id);
    if (!feature) {
      return res.status(404).json({ message: "feature not found" });
    }
    res.status(200).json({ message: "feature deleted successfully" });

})




