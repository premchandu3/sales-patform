import {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface IDiscoveryCall
  extends Document {
  leadId: string;
  meetingDate: string;
  meetingTime: string;
  meetingType: string;
  status: string;
}

const DiscoveryCallSchema =
  new Schema(
    {
      leadId: {
        type: String,
        required: true,
      },

      meetingDate: {
        type: String,
        required: true,
      },

      meetingTime: {
        type: String,
        required: true,
      },

      meetingType: {
        type: String,
        default: "Online",
      },

      status: {
        type: String,
        default: "Scheduled",
      },
    },
    {
      timestamps: true,
    }
  );

const DiscoveryCall =
  models.DiscoveryCall ||
  model<IDiscoveryCall>(
    "DiscoveryCall",
    DiscoveryCallSchema
  );

export default DiscoveryCall;