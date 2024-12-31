"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const roomSchema = new mongoose_1.default.Schema({
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
    images: [String]
}, { timestamps: true });
// const setImagesUrl=async function(doc:Iroom) {
//     let images:Array<String>=[]
//     if(doc.images){
//        for(let image in doc.images){
//          const imageUrl=await uploadImage(`./uploads/room/${doc.images[image]}`);
//          images.push(imageUrl);
//        }
//        doc.images=images;
//       }
// }
// roomSchema.post("save",async function(doc:Iroom){
//    await setImagesUrl(doc)
// });
// roomSchema.post("init",async function(doc:Iroom){
//    await setImagesUrl(doc)
// });
exports.Room = mongoose_1.default.model('Room', roomSchema);
