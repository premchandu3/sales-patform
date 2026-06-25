import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { generateInviteToken } from "@/utils/generateInviteToken";
import { sendInviteEmail } from "@/services/email.service";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const resetToken = generateInviteToken();

    user.inviteToken = resetToken;
    await user.save();

    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/create-password?token=${resetToken}`;

    await sendInviteEmail({
      email: user.email,
      name: user.name,
      inviteLink: resetLink,
    });

    return NextResponse.json({
      success: true,
      message: "Password reset email sent",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}