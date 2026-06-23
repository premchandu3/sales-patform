import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    contact: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "Lead Generator",
    },

    permissions: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: [
        "Active",
        "Inactive",
        "Invited",
      ],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

delete models.User;

const User = model("User", UserSchema);

export default User;