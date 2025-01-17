"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSupport = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const StudentSupportSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
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
// const setImageUrl = async function (doc: FeatureDocument) {
//   if (doc.icon) {
//     const imageUrl = await uploadImage(`./uploads/subject/${doc.icon}`);
//     doc.icon = imageUrl;
//   }
// };
// BenefitSchema.post("save", async function (doc: FeatureDocument) {
//   await setImageUrl(doc);
// });
// BenefitSchema.post("init", async function (doc: FeatureDocument) {
//   await setImageUrl(doc);
// });
exports.StudentSupport = mongoose_1.default.model("StudentSupport", StudentSupportSchema);
