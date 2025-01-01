import express from "express";

import multer from "multer";

import {getTestimonials,getTestimonial,createTestimonial,updateTestimonial,deleteTestimonial} from "../controller/TestimonialsController"


import uploadImage from "../middlewares/uploadImageMiddlware";


const diskStorage = multer.diskStorage({
    destination : function(req:any, file:any, cb:any) {
        cb(null, 'uploads/Testimonial');
    },
    filename: function(req:any, file:any, cb:any) {
        const ext = file.mimetype.split('/')[1];
        const fileName = `Testimonial-${Date.now()}.${ext}`;
        
        cb(null, fileName);
    }
})
const upload = multer({
    storage : diskStorage ,
fileFilter: function(req:any, file:any, cb:any) {
    const type = file.mimetype.split('/')[0];
    if(type === 'image'){
        return cb(null, true);
    }
    else{
        return cb(new Error('Only image are allowed.'), false);
    }
}
})


export const TestimonialsRouter=express.Router();


TestimonialsRouter.route("/").get(getTestimonials).post(upload.single('image'),uploadImage("image"),createTestimonial)

TestimonialsRouter.route("/:id").delete(deleteTestimonial).put(upload.single('image'),uploadImage("image"),updateTestimonial).get(getTestimonial)

  
  




