import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

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

    console.log(
      "REQUEST BODY:",
      body
    );

    const {
      name,
      email,
      contact,
      role,
      permissions,
      status,
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

    const user =
      await User.create({
        name,
        email,
        contact,
        role,
        permissions,
        status,
      });

    console.log(
      "SAVED USER:",
      user
    );

    return NextResponse.json(
      {
        message:
          "User created successfully",
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