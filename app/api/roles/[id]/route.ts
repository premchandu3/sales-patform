import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Role from "@/models/Role";

export async function PUT(
  req: Request,
  {
    params,
  }: {
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

  const role =
    await Role.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

  return NextResponse.json(
    role
  );
}

export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  await connectDB();

  const { id } =
    await params;

  await Role.findByIdAndDelete(
    id
  );

  return NextResponse.json({
    message:
      "Role deleted successfully",
  });
}