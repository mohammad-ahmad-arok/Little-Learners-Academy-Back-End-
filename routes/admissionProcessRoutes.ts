import  express from "express";





import   {
getAdmissionProcess,
getAllAdmissionProcesses,
createAdmissionProcess,
updateAdmissionProcess,
deleteAdmissionProcess
} from "../controller/admissionProcessController" ;

import {createAdmissionValidator,getAdmissionValidator,updateAdmissionValidator,deleteAdmissionValidator} from "../utils/validator/admissionValidator"

export const admissionProcessesRouter = express.Router();

admissionProcessesRouter
  .route("/")
  .get(getAllAdmissionProcesses)
  .post(createAdmissionValidator,createAdmissionProcess);

  admissionProcessesRouter
  .route("/:id")
  .get(getAdmissionValidator,getAdmissionProcess)
  .put(updateAdmissionValidator,updateAdmissionProcess)
  .delete(deleteAdmissionValidator,deleteAdmissionProcess);

