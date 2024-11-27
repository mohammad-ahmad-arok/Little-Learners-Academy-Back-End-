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
const CommonQuestionsRoutes_1 = require("./routes/CommonQuestionsRoutes");
const TestimonialsRoutes_1 = require("./routes/TestimonialsRoutes");
const FeaturesRoutes_1 = require("./routes/FeaturesRoutes");
app.use(express_1.default.json());
app.use("/api/commonquestions", CommonQuestionsRoutes_1.commonQuestionRouter);
app.use("/api/testimonials", TestimonialsRoutes_1.TestimonialsRouter);
app.use("/api/features", FeaturesRoutes_1.FeaturesRouter);
app.use(express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.use(errorMiddleware_1.globalError);
app.listen(process.env.PORT, () => {
    console.log(`listening on port:${process.env.PORT}....`);
    (0, connectDb_1.connectDB)();
});
