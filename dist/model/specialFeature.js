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
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200,
    },
    image: {
        url: {
            type: String,
        },
        public_id: {
            type: String,
        }
    },
}, { timestamps: true });
// specialFeatureSchema.pre(/^find/, function(next){
//    this.select("-__v");
//    next();
// })
// const setImageUrl=async function(doc:Special){
//     if(doc.image){
//         const imageUrl=await uploadImage(`./uploads/specialFeature/${doc.image}`);
//         doc.image=imageUrl
//       }
// }
// specialFeatureSchema.post("save",async function(doc:Special){
//     await setImageUrl(doc)
// });
// specialFeatureSchema.post("init",async function(doc:Special){
//    await setImageUrl(doc)
// });
exports.SpecialFeature = mongoose_1.default.model("Feature", specialFeatureSchema);
