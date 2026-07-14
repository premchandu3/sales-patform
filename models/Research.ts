import mongoose from "mongoose";

const ResearchSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    prompt: {
      type: String,
      required: true,
    },

    response: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Research ||
  mongoose.model("Research", ResearchSchema);