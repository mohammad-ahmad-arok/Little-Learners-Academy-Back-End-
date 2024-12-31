import  express from "express";





import   {
getAdmissionProcess,
getAllAdmissionProcesses,
createAdmissionProcess,
updateAdmissionProcess,
deleteAdmissionProcess
} from "../controller/admissionProcessController" ;

export const admissionProcessesRouter = express.Router();

admissionProcessesRouter
  .route("/")
  .get(getAllAdmissionProcesses)
  .post(createAdmissionProcess);

  admissionProcessesRouter
  .route("/:id")
  .get(getAdmissionProcess)
  .put(updateAdmissionProcess)
  .delete(deleteAdmissionProcess);

