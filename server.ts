import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app=express();

import {globalError} from "./middlewares/errorMiddleware"
import {connectDB} from "./DB/connectDb"
import path from "path"


import  {specialFeaturesRouter} from "./routes/specialFeature.route"
import {subjectRouter} from "./routes/subject.route"
import {roomRouter} from "./routes/room.route"

import  {activitiesRouter} from "./routes/activities"
import {eventsRouter} from "./routes/events"

import teamRouter from './routes/teamRoutes'; // Import your routes
import historyRoutes from "./routes/historyRoutes";
import awardRoutes from "./routes/awardRoutes"; 
import missionVisionRoutes from "./routes/missionVisionRoutes"; 
import {commonQuestionRouter} from "./routes/CommonQuestionsRoutes"
import {TestimonialsRouter} from "./routes/TestimonialsRoutes"
import {BenefitRouter} from "./routes/BenefitRoutes"

import messagesRouter from "./routes/messagesRoutes";

import cors from 'cors';
import generalRoutes from './routes/ServicesRoutes'; // Routes for admission process, fee structure, and additional services


app.use(express.json());

app.use(cors({
    origin:"*",
    methods:["GET","POST","DELETE","PUT"],
}))


app.use('/api/team-members', teamRouter); // All routes in teamRouter will now be prefixed with /team-members
app.use("/api/history", historyRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/mission-vision", missionVisionRoutes);





app.use("/api/commonquestions",commonQuestionRouter)
app.use("/api/testimonials",TestimonialsRouter)
app.use("/api/benefits",BenefitRouter)





app.use("/api/specialfeatures",specialFeaturesRouter)
app.use("/api/subjects",subjectRouter)
app.use("/api/rooms",roomRouter)

app.use("/api/activities",activitiesRouter)
app.use("/api/events",eventsRouter)



app.use("/api/message", messagesRouter);


app.use(express.static(path.join(__dirname,"../uploads")))

app.use('/uploads/member', express.static(path.join(__dirname, 'uploads/member')));

app.use('/api/general', generalRoutes);



app.use(globalError)



app.listen(process.env.PORT,()=>{
    console.log(`listening on port:${process.env.PORT}....`)
    connectDB();
})

