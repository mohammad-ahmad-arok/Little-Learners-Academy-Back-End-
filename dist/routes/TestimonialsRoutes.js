"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialsRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const TestimonialsController_1 = require("../controller/TestimonialsController");
const diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        const fileName = `user-${Date.now()}.${ext}`;
        cb(null, fileName);
    }
});
const upload = (0, multer_1.default)({
    storage: diskStorage,
    fileFilter: function (req, file, cb) {
        const type = file.mimetype.split('/')[0];
        if (type === 'image') {
            return cb(null, true);
        }
        else {
            return cb(new Error('Only image are allowed.'), false);
        }
    }
});
exports.TestimonialsRouter = express_1.default.Router();
exports.TestimonialsRouter.route("/").get(TestimonialsController_1.getTestimonials).post(upload.single('image'), TestimonialsController_1.createTestimonial);
exports.TestimonialsRouter.route("/:id").delete(TestimonialsController_1.deleteTestimonial).put(upload.single('image'), TestimonialsController_1.updateTestimonial).get(TestimonialsController_1.getTestimonial);
