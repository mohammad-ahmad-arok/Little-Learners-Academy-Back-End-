"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialFeaturesRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const uploadImageMiddlware_1 = __importDefault(require("../middlewares/uploadImageMiddlware"));
const specialFeatureValidator_1 = require("../utils/validator/specialFeatureValidator");
const ApiError_1 = require("../utils/ApiError");
const diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/specialFeature");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const filename = `specialFeature-${Date.now()}.${ext}`;
        cb(null, filename);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    }
    else {
        cb(new ApiError_1.ApiError("only  image allowed", 400), false);
    }
};
const upload = (0, multer_1.default)({ storage: diskStorage, fileFilter });
const specialFeatureController_1 = require("../controller/specialFeatureController");
exports.specialFeaturesRouter = express_1.default.Router();
exports.specialFeaturesRouter
    .route("/")
    .get(specialFeatureController_1.getAllFeatures)
    .post(upload.single("image"), (0, uploadImageMiddlware_1.default)("image"), specialFeatureValidator_1.createFeatureValidator, specialFeatureController_1.createFeature);
exports.specialFeaturesRouter
    .route("/:id")
    .get(specialFeatureValidator_1.getFeatureValidator, specialFeatureController_1.getFeature)
    .put(upload.single("image"), (0, uploadImageMiddlware_1.default)("image"), specialFeatureValidator_1.updateFeatureValidator, specialFeatureController_1.updateFeature)
    .delete(specialFeatureValidator_1.deleteFeatureValidator, specialFeatureController_1.deleteFeature);
