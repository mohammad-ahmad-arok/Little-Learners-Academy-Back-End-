import mongoose from "mongoose";
import { uploadImageCloudinary } from "../utils/cloudinary";

interface StudentSupport {
  name: string;
  description: string;
  image: string;
}
const StudentSupportSchema = new mongoose.Schema<StudentSupport>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
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

export const StudentSupport = mongoose.model("StudentSupport", StudentSupportSchema);
