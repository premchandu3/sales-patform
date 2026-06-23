import mongoose from "mongoose";

const RoleSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      description: {
        type: String,
      },

      status: {
        type: String,
        enum: [
          "Active",
          "Inactive",
        ],
        default: "Active",
      },

      permissions: [
        {
          type: String,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

export default
  mongoose.models.Role ||
  mongoose.model(
    "Role",
    RoleSchema
  );