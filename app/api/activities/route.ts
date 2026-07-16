import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Activity from "@/models/Activity";

export async function GET() {
  try {
    await connectDB();

    const activities =
      await Activity.find()
        .sort({ createdAt: -1 })
        .limit(10);

    return NextResponse.json(
      activities
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Failed to fetch activities",
      },
      {
        status: 500,
      }
    );
  }
}