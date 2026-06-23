import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Permission from "@/models/Permission";

export async function GET() {
  await connectDB();

  const permissions =
    await Permission.find();

  return NextResponse.json(
    permissions
  );
}

export async function POST(
  req: Request
) {
  await connectDB();

  const body =
    await req.json();

  const permission =
    await Permission.create(body);

  return NextResponse.json(
    permission,
    {
      status: 201,
    }
  );
}