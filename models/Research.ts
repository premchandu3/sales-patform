import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "assistant"],
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const ResearchSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },

    title: {
      type: String,
      required: true,
    },

    messages: [MessageSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Research ||
  mongoose.model("Research", ResearchSchema);