import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import crypto from "crypto";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find();

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Error fetching users",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      name,
      email,
      contact,
      role,
      permissions,
    } = body;

    const existingUser =
      await User.findOne({
        email,
      });

    if (existingUser) {
      return NextResponse.json(
        {
          message:
            "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const inviteToken =
      crypto.randomBytes(32)
        .toString("hex");

    const user =
      await User.create({
        name,
        email,
        contact,
        role,
        permissions,

        status: "Invited",

        password: "",

        passwordCreated:
          false,

        inviteToken,
      });

    const inviteLink =
      `${process.env.NEXT_PUBLIC_APP_URL}/create-password?token=${inviteToken}`;

    console.log(
      "Invite Link:",
      inviteLink
    );

    return NextResponse.json(
      {
        message:
          "User created successfully",

        inviteLink,

        user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Error creating user",
      },
      {
        status: 500,
      }
    );
  }
}