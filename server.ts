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

app.use(express.json());


app.use("/api/specialfeatures",specialFeaturesRouter)
app.use("/api/subjects",subjectRouter)
app.use("/api/rooms",roomRouter)




app.use(express.static(path.join(__dirname,"uploads")))

app.use(globalError)
app.listen(process.env.PORT,()=>{
    console.log(`listening on port:${process.env.PORT}`)
    connectDB();
})