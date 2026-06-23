import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";
import Role from "@/models/Role";
import Permission from "@/models/Permission";

export async function GET() {
  try {
    await connectDB();

    const totalUsers = await User.countDocuments();

    const totalRoles = await Role.countDocuments();

    const totalPermissions =
      await Permission.countDocuments();

    const activeToday =
      await User.countDocuments({
        status: "Active",
      });

    const users = await User.find();

    const roleDistribution =
      await Promise.all(
        (
          await Role.find()
        ).map(async (role) => {
          const count =
            users.filter(
              (user) =>
                user.role === role.name
            ).length;

          return {
            role: role.name,
            users: count,
          };
        })
      );

    const permissionOverview =
      await Promise.all(
        (
          await Role.find()
        ).map((role) => ({
          role: role.name,
          permissions:
            role.permissions?.length ||
            0,
        }))
      );

    return NextResponse.json({
      totalUsers,
      totalRoles,
      totalPermissions,
      activeToday,
      roleDistribution,
      permissionOverview,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Dashboard fetch failed",
      },
      {
        status: 500,
      }
    );
  }
}