import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import DiscoveryCall from "@/models/DiscoveryCall";

export async function GET() {
  try {
    await connectDB();

    const calls = await DiscoveryCall.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(calls);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch discovery calls" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const {
      leadId,
      meetingDate,
      meetingTime,
      meetingType,
    } = await req.json();

    const call =
      await DiscoveryCall.create({
        leadId,
        meetingDate,
        meetingTime,
        meetingType,
        status: "Scheduled",
      });

    return NextResponse.json(
      call,
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Failed to create discovery call",
      },
      { status: 500 }
    );
  }
}