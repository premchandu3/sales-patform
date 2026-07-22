import { Schema, model, models } from "mongoose";

const ActivitySchema = new Schema(
  {
    action: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    createdBy: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default
  models.Activity ||
  model("Activity", ActivitySchema);