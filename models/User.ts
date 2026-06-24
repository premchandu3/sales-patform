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

    password: {
      type: String,
      default: "",
    },

    inviteToken: {
      type: String,
      default: "",
    },

    passwordCreated: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: [
        "Active",
        "Inactive",
        "Invited",
      ],
      default: "Invited",
    },
  },
  {
    timestamps: true,
  }
);

const User =
  models.User ||
  model("User", UserSchema);

export default User;