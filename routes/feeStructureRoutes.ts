import  express from "express";





import   {
    getAllFeeStructures,
    getfeeStructure,
    createfeeStructure,
    updateFeeStructure,
    deleteFeeStructure
} from "../controller/feeStructureController" ;

export const feeStructuresRouter = express.Router();

feeStructuresRouter
  .route("/")
  .get(getAllFeeStructures)
  .post(createfeeStructure);

  feeStructuresRouter
  .route("/:id")
  .get(getfeeStructure)
  .put(updateFeeStructure)
  .delete(deleteFeeStructure);

