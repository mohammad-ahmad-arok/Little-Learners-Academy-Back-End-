import  express from "express";





import   {
  getAdditionalService,
  getAllAdditionalServices,
  createAdditionalService,
  updateAdditionalService,
  deleteAdditionalService
} from "../controller/additionalServicesController" ;

export const additionalServicesRouter = express.Router();

additionalServicesRouter
  .route("/")
  .get(getAllAdditionalServices)
  .post(createAdditionalService);

  additionalServicesRouter
  .route("/:id")
  .get(getAdditionalService)
  .put(updateAdditionalService)
  .delete(deleteAdditionalService);

