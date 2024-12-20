import  {activities}  from "../model/activities";

import  {ApiFeatures} from "../utils/ApiFeatures"


import  asyncHandler from "express-async-handler"

export const getAllActivities=asyncHandler(async (req:any,res:any)=>{
    const countDocument=await activities.countDocuments();
    
    const Activity=new ApiFeatures(activities.find(),req.query)

    Activity.Paginate(countDocument).Filter();

    const {mongooseQuery,pagination}= Activity;
    
    const Activities=await mongooseQuery;


    res.status(200).json({status:"Success",pagination,data:Activities});    
})

export const createActivity=asyncHandler(async (req:any,res:any)=>{
    const Activity=await activities.create(req.body);
    if(req.file){
        Activity.image=req.file.filename;
        await Activity.save();
    }
    res.status(201).json({status:"Success",data:Activity});
})

export const getActivity=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const Activity=await activities.findById(id);
    if(!Activity){
        return res.status(404).json({status:"fail",message:"Feature not found"});
    }
    res.status(200).json({status:"Success",data:Activity});
})


export const updateActivity=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const Activity=await activities.findByIdAndUpdate(id,req.body,{new:true});
    if(!Activity){
        return res.status(404).json({status:"fail",message:"Feature not found"});
    }
    res.status(200).json({status:"Success",data:Activity});
})

export const deleteActivity=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const Activity=await activities.findByIdAndDelete(id);
    if(!Activity){
        return res.status(404).json({status:"fail",message:"Activity not found"});
    }
    res.status(200).json({status:"Success",message:"Activity deleted successfully"});
})