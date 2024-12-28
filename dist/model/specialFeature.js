"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialFeature = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const specialFeatureSchema = new mongoose_1.default.Schema({
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
// specialFeatureSchema.pre(/^find/, function(next){
//    this.select("-__v");
//    next();
// })
const setImageUrl = function (doc) {
    if (doc.image) {
        // console.log(doc.image)
        const image = doc.image.split("\\\\");
        console.log(image[4]);
        const imageUrl = `${process.env.BASE_URL}/specialFeature/${doc.image}`;
        doc.image = imageUrl;
    }
};
specialFeatureSchema.post("save", function (doc) {
    setImageUrl(doc);
});
specialFeatureSchema.post("init", function (doc) {
    setImageUrl(doc);
});
exports.SpecialFeature = mongoose_1.default.model('Feature', specialFeatureSchema);
