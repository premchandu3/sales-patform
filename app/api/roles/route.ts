import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Role from "@/models/Role";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const roles = await Role.find();

    const rolesWithUsers = await Promise.all(
      roles.map(async (role) => {
        const usersCount =
          await User.countDocuments({
            role: role.name,
          });

        return {
          ...role.toObject(),
          users: usersCount,
        };
      })
    );

    return NextResponse.json(
      rolesWithUsers
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error fetching roles" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const body =
      await req.json();

    const role =
      await Role.create(body);

    return NextResponse.json(
      role,
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error creating role" },
      { status: 500 }
    );
  }
}