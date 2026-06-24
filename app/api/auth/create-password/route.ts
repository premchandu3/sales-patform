import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      token,
      password,
    } = body;

    if (!token || !password) {
      return NextResponse.json(
        {
          message:
            "Token and password are required",
        },
        {
          status: 400,
        }
      );
    }

    const user =
      await User.findOne({
        inviteToken: token,
      });

    if (!user) {
      return NextResponse.json(
        {
          message:
            "Invalid or expired invitation link",
        },
        {
          status: 404,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    user.password =
      hashedPassword;

    user.passwordCreated =
      true;

    user.status =
      "Active";

    user.inviteToken =
      "";

    await user.save();

    return NextResponse.json(
      {
        success: true,
        message:
          "Password created successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create password",
      },
      {
        status: 500,
      }
    );
  }
}