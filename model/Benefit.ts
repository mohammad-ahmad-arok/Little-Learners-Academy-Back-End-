

import mongoose from "mongoose";
    
interface FeatureDocument extends mongoose.Document {
  title: string;
  description: string;
  icon: string;
}
    const BenefitSchema = new mongoose.Schema<FeatureDocument>(
        {
            title: {
                type: String,
                required: true,
              },
              description: {
                type: String,
                required: true,
              },
              icon: {
                type: String,
                required: true,
              }
            
        },
        { timestamps: true }
      );
      
     export const Benefit = mongoose.model("Benefit", BenefitSchema);
      
   








