import express from "express";

import multer from "multer";
import {
  getBenefit,
  getBenefits,
  createBenefit,
  updateBenefit,
  deleteBenefit,
} from "../controller/BenefitController";

import {
  createBenefitValidator,
  getBenefitValidator,
  updateBenefitValidator,
  deleteBenefitValidator,
} from "../utils/validator/benefitValidator";

import uploadImage from "../middlewares/uploadImageMiddlware";

const diskStorage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "uploads/Benefit");
  },
  filename: function (req: any, file: any, cb: any) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `benefit-${Date.now()}.${ext}`;

    cb(null, fileName);
  },
});
const upload = multer({
  storage: diskStorage,
  fileFilter: function (req: any, file: any, cb: any) {
    const type = file.mimetype.split("/")[0];
    if (type === "image") {
      return cb(null, true);
    } else {
      return cb(new Error("Only image are allowed."), false);
    }
  },
});

export const BenefitRouter = express.Router();

BenefitRouter.route("/")
  .get(getBenefits)
  .post(
    upload.single("icon"),
    uploadImage("icon"),
    createBenefitValidator,
    createBenefit
  );
BenefitRouter.route("/:id")
  .delete(deleteBenefitValidator, deleteBenefit)
  .put(
    upload.single("icon"),
    uploadImage("icon"),
    updateBenefitValidator,
    updateBenefit
  )
  .get(getBenefitValidator, getBenefit);
