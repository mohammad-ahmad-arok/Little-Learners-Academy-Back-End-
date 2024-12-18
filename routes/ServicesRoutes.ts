import { Router } from 'express';
import {
  getAdmissionProcess,
  createAdmissionStep,
  getFeeStructure,
  createFeeStructure,
  getAdditionalServices,
  createAdditionalService,
} from '../controller/ServicesController';

const router = Router();

router.get('/admission-process', getAdmissionProcess);
router.post('/admission-process', createAdmissionStep);

router.get('/fee-structure', getFeeStructure);
router.post('/fee-structure', createFeeStructure);


router.get('/additional-services', getAdditionalServices);
router.post('/additional-services', createAdditionalService);

export default router;
