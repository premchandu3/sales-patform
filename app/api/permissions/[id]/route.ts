import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Permission from "@/models/Permission";

export async function PUT(
  req: Request,
  { params }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  await connectDB();

  const { id } =
    await params;

  const body =
    await req.json();

  const permission =
    await Permission.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

  return NextResponse.json(
    permission
  );
}

export async function DELETE(
  req: Request,
  { params }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  await connectDB();

  const { id } =
    await params;

  await Permission.findByIdAndDelete(
    id
  );

  return NextResponse.json({
    message:
      "Permission deleted",
  });
}