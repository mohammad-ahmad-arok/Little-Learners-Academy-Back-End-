"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.getOne = exports.getAll = exports.createOne = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const ApiFeatures_1 = require("../utils/ApiFeatures");
const cloudinary_1 = require("../utils/cloudinary");
const createOne = (Modal) => (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.image) {
        req.body.image = req.image;
    }
    else if (req.icon) {
        req.body.icon = req.icon;
    }
    else if (req.photo) {
        req.body.photo = req.photo;
    }
    const document = yield Modal.create(req.body);
    res.status(201).json({ status: "Success", data: document });
}));
exports.createOne = createOne;
const getAll = (Modal) => (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countDocument = yield Modal.countDocuments();
    const feature = new ApiFeatures_1.ApiFeatures(Modal.find(), req.query);
    feature.Paginate(countDocument).Filter();
    const { mongooseQuery, pagination } = feature;
    const documents = yield mongooseQuery;
    res.status(200).json({ status: "Success", pagination, data: documents });
}));
exports.getAll = getAll;
const getOne = (Modal) => (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const document = yield Modal.findById(id);
    if (!document) {
        return res
            .status(404)
            .json({ status: "Fail", message: "Document not found" });
    }
    res.status(200).json({ status: "Success", data: document });
}));
exports.getOne = getOne;
const updateOne = (Modal) => (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let param;
    if (req.params.id) {
        param = req.params.id;
    }
    else if (req.params.title) {
        param = req.params.title;
    }
    // Check For remove Image is cloudinary
    if (req.file) {
        yield (0, cloudinary_1.removeImageCloudinary)(Modal, param);
    }
    else if (req.files) {
        yield (0, cloudinary_1.removeImagesCloudinary)(Modal, param);
    }
    // check to add feild to body
    if (req.image) {
        req.body.image = req.image;
    }
    else if (req.icon) {
        req.body.icon = req.icon;
    }
    else if (req.photo) {
        req.body.photo = req.photo;
    }
    // this for param title or id
    let document;
    if (req.params.id) {
        document = yield Modal.findByIdAndUpdate(param, req.body, {
            new: true,
        });
    }
    else if (req.params.title) {
        document = yield Modal.findOneAndUpdate({ title: req.params.title }, req.body, { new: true });
    }
    if (!document) {
        return res
            .status(404)
            .json({ status: "Fail", message: "Document not found" });
    }
    res.status(200).json({ status: "Success", data: document });
}));
exports.updateOne = updateOne;
const deleteOne = (Modal) => (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let document;
    // find Document To Check If Contain Image In Clundinary To Remove
    if (req.params.id) {
        const findDocument = yield Modal.findById(req.params.id);
        if (findDocument.image || findDocument.icon || findDocument.photo) {
            yield (0, cloudinary_1.removeImageCloudinary)(Modal, req.params.id);
        }
        else if (findDocument.images) {
            yield (0, cloudinary_1.removeImagesCloudinary)(Modal, req.params.id);
        }
        // this for param title or id
        document = yield Modal.findByIdAndDelete(req.params.id);
    }
    else if (req.params.title) {
        document = yield Modal.findOneAndDelete({ title: req.params.title });
    }
    if (!document) {
        return res
            .status(404)
            .json({ status: "Fail", message: "Document not found" });
    }
    res
        .status(200)
        .json({ status: "Success", message: "Document deleted successfully" });
}));
exports.deleteOne = deleteOne;
