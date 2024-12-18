import dotenv from "dotenv";
import mongoose from "mongoose";
import AdmissionProcess from "./model/AdmissionProcess";
import FeeStructure from "./model/FeeStructure";
import AdditionalService from "./model/AdditionalServices";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
  } catch (error) {
    console.error("MongoDB failed:", error);
  }
};

const seedData = async () => {
  try {
    await AdmissionProcess.deleteMany();
    await FeeStructure.deleteMany();
    await AdditionalService.deleteMany();

    // Admission Process
    await AdmissionProcess.insertMany([
      {
        step: "Inquiry",
        description:
          "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
      },
      {
        step: "School Tour",
        description:
          "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
      },
      {
        step: "Application Form",
        description:
          "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
      },
      {
        step: "Parent Interview",
        description:
          "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
      },
      {
        step: "Student Assessment",
        description:
          "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
      },
      {
        step: "Acceptance",
        description:
          "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
      },
    ]);

    // Fee Structure
    await FeeStructure.insertMany([
      {
        program: "Nursery",
        ageGroup: "2-3 Years",
        annualTuition: "$1,686",
        registrationFee: "$162",
        activityFee: "$12",
      },
      {
        program: "Pre-Kindergarten",
        ageGroup: "3-4 Years",
        annualTuition: "$1,686",
        registrationFee: "$162",
        activityFee: "$12",
      },
      {
        program: "Kindergarten",
        ageGroup: "4-5 Years",
        annualTuition: "$1,686",
        registrationFee: "$162",
        activityFee: "$12",
      },
    ]);

    // Additional Services
    await AdditionalService.insertMany([
      { service: "Before and After-School Care", price: "$120/Month" },
      { service: "Language Immersion Program", price: "$120/Month" },
      { service: "Transportation (optional)", price: "$120/Month" },
    ]);

    process.exit(0);
  } catch (error) {
    console.error("failed:", error);
    process.exit(1);
  }
};

connectDB().then(seedData);
