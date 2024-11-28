import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app=express();
import {globalError} from "./middlewares/errorMiddleware"
import {connectDB} from "./DB/connectDb"
import path from "path"

import teamRouter from './routes/teamRoutes'; // Import your routes
import historyRoutes from "./routes/historyRoutes";
import awardRoutes from "./routes/awardRoutes"; 
import missionVisionRoutes from "./routes/missionVisionRoutes"; 


app.use(express.json());


app.use('/team-members', teamRouter); // All routes in teamRouter will now be prefixed with /team-members
app.use("/api/history", historyRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/mission-vision", missionVisionRoutes);

app.use('/uploads/member', express.static(path.join(__dirname, 'uploads/member')));


import {commonQuestionRouter} from "./routes/CommonQuestionsRoutes"
import {TestimonialsRouter} from "./routes/TestimonialsRoutes"
import {FeaturesRouter} from "./routes/FeaturesRoutes"

app.use(express.json());

app.use("/api/commonquestions",commonQuestionRouter)
app.use("/api/testimonials",TestimonialsRouter)
app.use("/api/features",FeaturesRouter)


app.use(express.static(path.join(__dirname,"../uploads")))


app.use(globalError)



app.listen(process.env.PORT,()=>{
    console.log(`listening on port:${process.env.PORT}....`)
    connectDB();
})