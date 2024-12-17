import express from "express"

import dotenv from "dotenv"
import cors from 'cors'
dotenv.config();

const app=express();
import {globalError} from "./middlewares/errorMiddleware"
import {connectDB} from "./DB/connectDb"
import path from "path"

import  {activitiesRouter} from "./routes/activities"
import {eventsRouter} from "./routes/events"


app.use(express.json());
app.use(cors());

app.use("/api/activities",activitiesRouter)
app.use("/api/events",eventsRouter)




app.use(express.static(path.join(__dirname,"../uploads")))


app.use(globalError)
app.listen(process.env.PORT,()=>{
    console.log(`listening on port:${process.env.PORT}....`)
    connectDB();
})