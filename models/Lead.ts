import mongoose, { Schema, Document, models, model } from "mongoose";

export interface ILead extends Document {
  companyName: string;
  businessType: string;
  industryCategory: string;
  address: string;
  location: string;
  contactPersonName: string;
  phoneNumber: string;
  email: string;
  website: string;
  linkedinPage: string;
  instagramPage: string;
  youtubePage: string;
  googleMapsLink: string;
  serviceOffered: string;
  yearsOfExperience: string;
  employeeCount: string;
  targetMarket: string;
  leadPriority: string;
  reasonForPriority: string;
  strength: string;
  weakness: string;
  opportunity: string;
  bestTimeToContact: string;
  addedDate: string;
  leadSource: string;
  leadOwner: string;
  additionalNotes: string;
  status: string;
}

const LeadSchema = new Schema<ILead>(
  {
    companyName: { type: String, required: true },
    businessType: { type: String, default: "" },
    industryCategory: { type: String, default: "" },
    address: { type: String, default: "" },
    location: { type: String, default: "" },
    contactPersonName: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    email: { type: String, default: "" },
    website: { type: String, default: "" },
    linkedinPage: { type: String, default: "" },
    instagramPage: { type: String, default: "" },
    youtubePage: { type: String, default: "" },
    googleMapsLink: { type: String, default: "" },
    serviceOffered: { type: String, default: "" },
    yearsOfExperience: { type: String, default: "" },
    employeeCount: { type: String, default: "" },
    targetMarket: { type: String, default: "" },
    leadPriority: { type: String, default: "" },
    reasonForPriority: { type: String, default: "" },
    strength: { type: String, default: "" },
    weakness: { type: String, default: "" },
    opportunity: { type: String, default: "" },
    bestTimeToContact: { type: String, default: "" },
    addedDate: { type: String, default: "" },
    leadSource: { type: String, default: "" },
    leadOwner: { type: String, default: "" },
    additionalNotes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Lost"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Lead = models.Lead || model<ILead>("Lead", LeadSchema);

export default Lead;