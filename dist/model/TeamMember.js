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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMember = void 0;
const mongoose_1 = require("mongoose");
const uploadImage_1 = require("../utils/uploadImage");
// TeamMember schema
const teamMemberSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String }, // Store the filename of the uploaded photo
}, { timestamps: true });
const setImageUrl = function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (doc.photo) {
            const imageUrl = yield (0, uploadImage_1.uploadImage)(`./uploads/subject/${doc.photo}`);
            doc.photo = imageUrl;
        }
    });
};
teamMemberSchema.post("save", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield setImageUrl(doc);
    });
});
teamMemberSchema.post("init", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield setImageUrl(doc);
    });
});
// TeamMember model
const TeamMember = (0, mongoose_1.model)('TeamMember', teamMemberSchema);
exports.TeamMember = TeamMember;
