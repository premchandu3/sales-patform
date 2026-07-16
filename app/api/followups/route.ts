import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import FollowUp from "@/models/FollowUp";

export async function GET() {
  try {
    await connectDB();

    const followups = await FollowUp.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(followups);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch followups" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const {
      leadId,
      followUpType,
      followUpDate,
      followUpTime,
      priority,
      notes,
    } = await req.json();

    const followup = await FollowUp.create({
      leadId,
      followUpType,
      followUpDate,
      followUpTime,
      priority,
      notes,
      status: "Pending",
    });

    return NextResponse.json(
      followup,
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to create followup" },
      { status: 500 }
    );
  }
}