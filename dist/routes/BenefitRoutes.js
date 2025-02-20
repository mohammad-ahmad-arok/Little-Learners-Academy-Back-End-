"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const BenefitController_1 = require("../controller/BenefitController");
const benefitValidator_1 = require("../utils/validator/benefitValidator");
const uploadImageMiddlware_1 = __importDefault(require("../middlewares/uploadImageMiddlware"));
const diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/Benefit");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const fileName = `benefit-${Date.now()}.${ext}`;
        cb(null, fileName);
    },
});
const upload = (0, multer_1.default)({
    storage: diskStorage,
    fileFilter: function (req, file, cb) {
        const type = file.mimetype.split("/")[0];
        if (type === "image") {
            return cb(null, true);
        }
        else {
            return cb(new Error("Only image are allowed."), false);
        }
    },
});
exports.BenefitRouter = express_1.default.Router();
exports.BenefitRouter.route("/")
    .get(BenefitController_1.getBenefits)
    .post(upload.single("icon"), (0, uploadImageMiddlware_1.default)("icon"), benefitValidator_1.createBenefitValidator, BenefitController_1.createBenefit);
exports.BenefitRouter.route("/:id")
    .delete(benefitValidator_1.deleteBenefitValidator, BenefitController_1.deleteBenefit)
    .put(upload.single("icon"), (0, uploadImageMiddlware_1.default)("icon"), benefitValidator_1.updateBenefitValidator, BenefitController_1.updateBenefit)
    .get(benefitValidator_1.getBenefitValidator, BenefitController_1.getBenefit);
