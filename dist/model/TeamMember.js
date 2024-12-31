"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMember = void 0;
const mongoose_1 = require("mongoose");
// TeamMember schema
const teamMemberSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String }, // Store the filename of the uploaded photo
}, { timestamps: true });
// const setImageUrl=async function(doc:IMember){
//     if(doc.photo){
//         const imageUrl=await uploadImage(`./uploads/subject/${doc.photo}`);
//         doc.photo=imageUrl
//       }
// }
// teamMemberSchema.post("save",async function(doc:IMember){
//      await setImageUrl(doc)
// });
// teamMemberSchema.post("init",async function(doc:IMember){
//    await  setImageUrl(doc)
// });
// TeamMember model
const TeamMember = (0, mongoose_1.model)('TeamMember', teamMemberSchema);
exports.TeamMember = TeamMember;
