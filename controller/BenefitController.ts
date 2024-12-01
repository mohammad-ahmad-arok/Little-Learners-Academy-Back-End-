import expressAsyncHandler from "express-async-handler"

import {Benefit} from "../model/Benefit";
import {ApiFeatures} from "../utils/ApiFeatures"

export const getBenefits=expressAsyncHandler( async (req:any, res:any) => {
  const countDocument= await Benefit.countDocuments();

    const feature=new ApiFeatures(Benefit.find(),req.query)

    feature.Paginate(countDocument);

    const {mongooseQuery}=feature;

    const Benefits=await mongooseQuery
    res.status(200).json(Benefits);

  })

  export const getBenefit=expressAsyncHandler( async (req:any, res:any) => {
    const { id } = req.params;
    const benefit = await Benefit.findById(id);
    if (!benefit) {
      return res.status(404).json({ message: "benefit not found" });
    }
    res.status(200).json(benefit);

})


export const createBenefit=expressAsyncHandler( async (req:any, res:any,next:any) => {
    const benefit = new Benefit({
        title: req.body.title,
        description: req.body.description,
        icon : `http://localhost:5000/${req.file.filename}`
    });
    await benefit.save();

    res.status(201).json(benefit);

})

export const updateBenefit=expressAsyncHandler( async (req:any, res:any) => {
    const benefit = await Benefit.findByIdAndUpdate(
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

    if (!benefit) {
      return res.status(404).json({ message: "benefit not found" });
    }

    res.status(200).json(benefit);

})

export const deleteBenefit=expressAsyncHandler( async (req:any, res:any) => {
    const benefit = await Benefit.findByIdAndDelete(req.params.id);
    if (!benefit) {
      return res.status(404).json({ message: "benefit not found" });
    }
    res.status(200).json({ message: "benefit deleted successfully" });

})




