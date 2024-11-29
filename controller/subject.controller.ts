import  {Subject} from "../model/subject";

import {ApiFeatures} from  "../utils/ApiFeatures"


import  asyncHandler from  "express-async-handler"

export const getAllSubjects=asyncHandler(async (req:any,res:any)=>{
    const countDocuments=await Subject.countDocuments();

    const feature=new ApiFeatures(Subject.find(),req.query);

    feature.Paginate(countDocuments).Filter();

    const {mongooseQuery,pagination}=feature;

    const subjects=await mongooseQuery;


    res.status(200).json({status:"Success",pagination,data:subjects});    
})

export const createSubject=asyncHandler(async (req:any,res:any)=>{
    const subject=await Subject.create(req.body);
    if(req.file){
        subject.image=req.file.filename;
        await subject.save();
    }
    res.status(201).json({status:"Success",data:subject});
})

export const getSubject=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const subject=await Subject.findById(id);
    if(!subject){
        return res.status(404).json({status:"fail",message:"subject not found"});
    }
    res.status(200).json({status:"Success",data:subject});
})


export const updateSubject=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const subject=await Subject.findByIdAndUpdate(id,req.body,{new:true});
    if(!subject){
        return res.status(404).json({status:"fail",message:"subject not found"});
    }
    res.status(200).json({status:"Success",data:subject});
})

export const deleteSubject=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const subject=await Subject.findByIdAndDelete(id);
    if(!subject){
        return res.status(404).json({status:"fail",message:"subject not found"});
    }
    res.status(200).json({status:"Success",message:"subject deleted successfully"});
})