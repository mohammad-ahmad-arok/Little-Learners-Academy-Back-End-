import mongoose from "mongoose";
import { uploadImageCloudinary } from "../utils/cloudinary";

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
      url: {
        type: String,
      },
      public_id: {
        type: String,
      }
    },
  },
  { timestamps: true }
);

// const setImageUrl = async function (doc: FeatureDocument) {
//   if (doc.icon) {
//     const imageUrl = await uploadImage(`./uploads/subject/${doc.icon}`);
//     doc.icon = imageUrl;
//   }
// };

// BenefitSchema.post("save", async function (doc: FeatureDocument) {
//   await setImageUrl(doc);
// });

// BenefitSchema.post("init", async function (doc: FeatureDocument) {
//   await setImageUrl(doc);
// });

export const Benefit = mongoose.model("Benefit", BenefitSchema);
