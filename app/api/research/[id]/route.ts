import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Research from "@/models/Research";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    await Research.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Delete Failed" },
      { status: 500 }
    );
  }
}