import { Schema, model, models, Document } from "mongoose";

export interface IFollowUp extends Document {
  leadId: string;
  followUpType: string;
  followUpDate: string;
  followUpTime: string;
  priority: string;
  notes: string;
  status: string;
}

const FollowUpSchema = new Schema(
  {
    leadId: {
      type: String,
      required: true,
    },

    followUpType: {
      type: String,
      default: "Call",
    },

    priority: {
      type: String,
      default: "Medium",
    },

    followUpDate: {
      type: String,
      required: true,
    },

    followUpTime: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const FollowUp =
  models.FollowUp ||
  model<IFollowUp>("FollowUp", FollowUpSchema);

export default FollowUp;