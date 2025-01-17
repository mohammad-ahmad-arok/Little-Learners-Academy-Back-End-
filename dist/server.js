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
const specialFeatureRoutes_1 = require("./routes/specialFeatureRoutes");
const subjectRoutes_1 = require("./routes/subjectRoutes");
const roomRoutes_1 = require("./routes/roomRoutes");
const activities_1 = require("./routes/activities");
const events_1 = require("./routes/events");
const authRoutes_1 = require("./routes/authRoutes");
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes")); // Import your routes
const historyRoutes_1 = __importDefault(require("./routes/historyRoutes"));
const awardRoutes_1 = __importDefault(require("./routes/awardRoutes"));
const missionVisionRoutes_1 = __importDefault(require("./routes/missionVisionRoutes"));
const CommonQuestionsRoutes_1 = require("./routes/CommonQuestionsRoutes");
const TestimonialsRoutes_1 = require("./routes/TestimonialsRoutes");
const BenefitRoutes_1 = require("./routes/BenefitRoutes");
const messagesRoutes_1 = __importDefault(require("./routes/messagesRoutes"));
const cors_1 = __importDefault(require("cors"));
const additionalServicesRoutes_1 = require("./routes/additionalServicesRoutes");
const admissionProcessRoutes_1 = require("./routes/admissionProcessRoutes");
const feeStructureRoutes_1 = require("./routes/feeStructureRoutes");
const studentSupportRoutes_1 = require("./routes/studentSupportRoutes");
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
}));
app.use("/api", authRoutes_1.authRouter);
// All routes in teamRouter will now be prefixed with /team-members
// app.use(Protect)
app.use('/api/team-members', teamRoutes_1.default);
app.use("/api/history", historyRoutes_1.default);
app.use("/api/awards", awardRoutes_1.default);
app.use("/api/mission-vision", missionVisionRoutes_1.default);
app.use("/api/commonquestions", CommonQuestionsRoutes_1.commonQuestionRouter);
app.use("/api/testimonials", TestimonialsRoutes_1.TestimonialsRouter);
app.use("/api/benefits", BenefitRoutes_1.BenefitRouter);
app.use("/api/specialfeatures", specialFeatureRoutes_1.specialFeaturesRouter);
app.use("/api/subjects", subjectRoutes_1.subjectRouter);
app.use("/api/rooms", roomRoutes_1.roomRouter);
app.use("/api/activities", activities_1.activitiesRouter);
app.use("/api/events", events_1.eventsRouter);
app.use("/api/message", messagesRoutes_1.default);
app.use('/api/admission-process', admissionProcessRoutes_1.admissionProcessesRouter);
app.use('/api/additional-services', additionalServicesRoutes_1.additionalServicesRouter);
app.use('/api/fee-structure', feeStructureRoutes_1.feeStructuresRouter);
app.use('/api/student-support', studentSupportRoutes_1.StudentSupportRouter);
app.use(express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.use(errorMiddleware_1.globalError);
app.listen(process.env.PORT, () => {
    console.log(`listening on port:${process.env.PORT}....`);
    (0, connectDb_1.connectDB)();
});
