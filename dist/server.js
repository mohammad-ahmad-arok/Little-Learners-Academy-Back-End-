"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const connectDb_1 = require("./DB/connectDb");
const path_1 = __importDefault(require("path"));
const specialFeature_route_1 = require("./routes/specialFeature.route");
const subject_route_1 = require("./routes/subject.route");
const room_route_1 = require("./routes/room.route");
app.use(express_1.default.json());
app.use("/api/specialfeatures", specialFeature_route_1.specialFeaturesRouter);
app.use("/api/subjects", subject_route_1.subjectRouter);
app.use("/api/rooms", room_route_1.roomRouter);
app.use(express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.use(errorMiddleware_1.globalError);
app.listen(process.env.PORT, () => {
    console.log(`listening on port:${process.env.PORT}....`);
    (0, connectDb_1.connectDB)();
});
