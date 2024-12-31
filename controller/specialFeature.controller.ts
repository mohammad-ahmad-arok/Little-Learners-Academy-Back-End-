import  {SpecialFeature}  from "../model/specialFeature";

import  {ApiFeatures} from "../utils/ApiFeatures"


import  asyncHandler from "express-async-handler"
import { uploadImage } from "../utils/uploadImage";

export const getAllFeatures=asyncHandler(async (req:any,res:any)=>{
    const countDocument=await SpecialFeature.countDocuments();
    
    const feature=new ApiFeatures(SpecialFeature.find(),req.query)

    feature.Paginate(countDocument).Filter();

    const {mongooseQuery,pagination}= feature;
    
    const features=await mongooseQuery;


    res.status(200).json({status:"Success",pagination,data:features});    
})

export const createFeature=asyncHandler(async (req:any,res:any)=>{
    const feature=await SpecialFeature.create(req.body);
    if(req.file){
        feature.image=await uploadImage(req.file.path);
        console.log(req.file);
        await feature.save();
    }
    res.status(201).json({status:"Success",data:feature});
})

export const getFeature=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const feature=await SpecialFeature.findById(id);
    if(!feature){
        return res.status(404).json({status:"fail",message:"Feature not found"});
    }
    res.status(200).json({status:"Success",data:feature});
})


export const updateFeature=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    if(req.file){
        req.body.image=await uploadImage(req.file.path);
    }
    const feature=await SpecialFeature.findByIdAndUpdate(id,req.body,{new:true});
    if(!feature){
        return res.status(404).json({status:"fail",message:"Feature not found"});
    }
    res.status(200).json({status:"Success",data:feature});
})

export const deleteFeature=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const feature=await SpecialFeature.findByIdAndDelete(id);
    if(!feature){
        return res.status(404).json({status:"fail",message:"Feature not found"});
    }
    res.status(200).json({status:"Success",message:"Feature deleted successfully"});
})