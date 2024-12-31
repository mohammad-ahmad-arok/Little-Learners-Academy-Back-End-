import  {event} from "../model/events";

import {ApiFeatures} from  "../utils/ApiFeatures"


import  asyncHandler from  "express-async-handler"
import { uploadImage } from "../utils/uploadImage";

export const getAllEvents=asyncHandler(async (req:any,res:any)=>{
    const countDocuments=await event.countDocuments();

    const Event=new ApiFeatures(event.find(),req.query);

    Event.Paginate(countDocuments).Filter();

    const {mongooseQuery,pagination}=Event;

    const Events=await mongooseQuery;


    res.status(200).json({status:"Success",pagination,data:Events});    
})

export const createEvent=asyncHandler(async (req:any,res:any)=>{
    const Event=await event.create(req.body);
    if(req.file){
        Event.image=await uploadImage(req.file.path);
        await Event.save();
    }
    res.status(201).json({status:"Success",data:Event});
})

export const getEvent=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const Event=await event.findById(id);
    if(!Event){
        return res.status(404).json({status:"fail",message:"Event not found"});
    }
    res.status(200).json({status:"Success",data:Event});
})


export const updateEvent=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    if(req.file){
        req.body.image=await uploadImage(req.file.path)
    }
    const Event=await event.findByIdAndUpdate(id,req.body,{new:true});
    if(!Event){
        return res.status(404).json({status:"fail",message:"Event not found"});
    }
    res.status(200).json({status:"Success",data:Event});
})

export const deleteEvent=asyncHandler(async (req:any,res:any)=>{
    const {id}=req.params;
    const Event=await event.findByIdAndDelete(id);
    if(!Event){
        return res.status(404).json({status:"fail",message:"Event not found"});
    }
    res.status(200).json({status:"Success",message:"Event deleted successfully"});
})