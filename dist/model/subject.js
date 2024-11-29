"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const subjectSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    image: {
        type: String,
    }
}, { timestamps: true });
const setImageUrl = function (doc) {
    if (doc.image) {
        const imageUrl = `${process.env.BASE_URL}/subject/${doc.image}`;
        doc.image = imageUrl;
    }
};
// subjectSchema.pre(/^find/, function(next){
//    this.select("-__v");
//    next();
// })
subjectSchema.post("save", function (doc) {
    setImageUrl(doc);
});
subjectSchema.post("init", function (doc) {
    setImageUrl(doc);
});
exports.Subject = mongoose_1.default.model('Subject', subjectSchema);
