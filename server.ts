import express from "express"


import dotenv from "dotenv"

dotenv.config();

const app=express();
import {globalError} from "./middlewares/errorMiddleware"
import {connectDB} from "./DB/connectDb"
import path from "path"

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