import mongoose from "mongoose";

export const connectDB=()=>{
    const Url:any =process.env.MONGO_URL
    mongoose.connect(Url)
   .then(()=>console.log("MongoDB Connected..."))
}
