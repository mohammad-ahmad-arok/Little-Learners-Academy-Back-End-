import  express from "express";





import   {
    getAllFeeStructures,
    getfeeStructure,
    createfeeStructure,
    updateFeeStructure,
    deleteFeeStructure
} from "../controller/feeStructureController" ;

import { createFeeValidator, deleteFeeValidator, getFeeValidator, updateFeeValidator } from "../utils/validator/FeeValidator"

export const feeStructuresRouter = express.Router();

feeStructuresRouter
  .route("/")
  .get(getAllFeeStructures)
  .post(createFeeValidator,createfeeStructure);

  feeStructuresRouter
  .route("/:id")
  .get(getFeeValidator,getfeeStructure)
  .put(updateFeeValidator,updateFeeStructure)
  .delete(deleteFeeValidator,deleteFeeStructure);

