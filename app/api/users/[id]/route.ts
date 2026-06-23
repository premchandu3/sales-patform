import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function PUT(
  req: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await connectDB();

    const { id } =
      await context.params;

    const body =
      await req.json();

    const updatedUser =
      await User.findByIdAndUpdate(
        id,
        body,
        { new: true }
      );

    return NextResponse.json(
      updatedUser
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Update failed" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await connectDB();

    const { id } =
      await context.params;

    console.log(
      "Deleting User:",
      id
    );

    const deletedUser =
      await User.findByIdAndDelete(
        id
      );

    console.log(
      "Deleted:",
      deletedUser
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Delete failed",
      },
      { status: 500 }
    );
  }
}