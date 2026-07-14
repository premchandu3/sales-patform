import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const lead = await Lead.findById(id);

    if (!lead) {
      return NextResponse.json(
        { message: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(lead);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch lead" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const body = await req.json();
    const { id } = await params;

    const lead = await Lead.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    return NextResponse.json(lead);
  } catch {
    return NextResponse.json(
      { message: "Failed to update lead" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    await Lead.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Lead deleted successfully",
    });
  } catch {
    return NextResponse.json(
      { message: "Failed to delete lead" },
      { status: 500 }
    );
  }
}