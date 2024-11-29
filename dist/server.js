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
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes")); // Import your routes
const historyRoutes_1 = __importDefault(require("./routes/historyRoutes"));
const awardRoutes_1 = __importDefault(require("./routes/awardRoutes"));
const missionVisionRoutes_1 = __importDefault(require("./routes/missionVisionRoutes"));
const CommonQuestionsRoutes_1 = require("./routes/CommonQuestionsRoutes");
const TestimonialsRoutes_1 = require("./routes/TestimonialsRoutes");
const BenefitRoutes_1 = require("./routes/BenefitRoutes");
app.use(express_1.default.json());
app.use('/team-members', teamRoutes_1.default); // All routes in teamRouter will now be prefixed with /team-members
app.use("/api/history", historyRoutes_1.default);
app.use("/api/awards", awardRoutes_1.default);
app.use("/api/mission-vision", missionVisionRoutes_1.default);
app.use("/api/commonquestions", CommonQuestionsRoutes_1.commonQuestionRouter);
app.use("/api/testimonials", TestimonialsRoutes_1.TestimonialsRouter);
app.use("/api/benefits", BenefitRoutes_1.BenefitRouter);
app.use("/api/specialfeatures", specialFeature_route_1.specialFeaturesRouter);
app.use("/api/subjects", subject_route_1.subjectRouter);
app.use("/api/rooms", room_route_1.roomRouter);
app.use('/uploads/member', express_1.default.static(path_1.default.join(__dirname, 'uploads/member')));
app.use(express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.use(errorMiddleware_1.globalError);
app.listen(process.env.PORT, () => {
    console.log(`listening on port:${process.env.PORT}....`);
    (0, connectDb_1.connectDB)();
});
