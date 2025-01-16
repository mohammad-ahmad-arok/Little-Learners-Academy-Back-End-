import  express from "express";





import   {
  getAdditionalService,
  getAllAdditionalServices,
  createAdditionalService,
  updateAdditionalService,
  deleteAdditionalService
} from "../controller/additionalServicesController" ;


import {createServiceValidator,getServiceValidator,updateServiceValidator,deleteServiceValidator} from "../utils/validator/additionalValidator"

export const additionalServicesRouter = express.Router();

additionalServicesRouter
  .route("/")
  .get(getAllAdditionalServices)
  .post(createServiceValidator,createAdditionalService);

  additionalServicesRouter
  .route("/:id")
  .get(getServiceValidator,getAdditionalService)
  .put(updateServiceValidator,updateAdditionalService)
  .delete(deleteServiceValidator,deleteAdditionalService);

