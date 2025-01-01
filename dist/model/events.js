"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const eventSchema = new mongoose_1.default.Schema({
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
// const setImageUrl=async function(doc:Sub){
//     if(doc.image){
//         const imageUrl=await uploadImage(`./uploads/events/${doc.image}`);
//         doc.image=imageUrl
//       }
// }
// eventSchema.post("save",async function(doc:Sub){
//     await setImageUrl(doc)
// });
// eventSchema.post("init",async function(doc:Sub){
//    await  setImageUrl(doc)
// });
exports.event = mongoose_1.default.model("Event", eventSchema);
