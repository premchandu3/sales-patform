import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { sendInviteEmail } from "@/services/email.service";
import { generateInviteToken } from "@/utils/generateInviteToken";

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
      generateInviteToken();

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

    await sendInviteEmail({
      email,
      name,
      inviteLink,
    });
    console.log("✅ Invite email function executed");

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