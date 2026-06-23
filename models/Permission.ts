import mongoose from "mongoose";

const PermissionSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      description: {
        type: String,
      },

      roles: [
        {
          type: String,
        },
      ],

      status: {
        type: String,
        enum: [
          "Active",
          "Inactive",
        ],
        default: "Active",
      },
    },
    {
      timestamps: true,
    }
  );

export default
  mongoose.models.Permission ||
  mongoose.model(
    "Permission",
    PermissionSchema
  );