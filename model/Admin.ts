import mongoose from "mongoose";

import bcrypt from "bcryptjs"

interface IAdmin {
  name:string,
  email:string,
  password:string
}

const adminSchema = new mongoose.Schema<IAdmin>(
  {
    name:{
      type:String,
      minLength:5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxLength:25
    },

  },
  { timestamps: true }
);

adminSchema.pre("save",async function(next){
  if(!this.isModified("password")){
      next();
  }
  // Hashing password
  this.password= await bcrypt.hash(this.password,12);

  next();
})



export const Admin = mongoose.model("Admin", adminSchema);
