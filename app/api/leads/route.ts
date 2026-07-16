import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import Activity from "@/models/Activity";

export async function GET() {
  try {
    await connectDB();

    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const lead = await Lead.create(body);

    await Activity.create({
      action: "Lead Created",
      description: `Added lead - ${lead.companyName}`,
    });

    return NextResponse.json(
      {
        message: "Lead created successfully",
        lead,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create lead" },
      { status: 500 }
    );
  }
}