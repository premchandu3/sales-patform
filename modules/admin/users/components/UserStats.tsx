import {
  Users,
  UserCheck,
  UserPlus,
  UserX,
} from "lucide-react";

import { User } from "@/types/user";

interface UserStatsProps {
  users: User[];
  onFilterStatus?: (
    status: string
  ) => void;
}

export default function UserStats({
  users,
  onFilterStatus,
}: UserStatsProps) {
  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const invitedUsers = users.filter(
    (user) => user.status === "Invited"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      subtitle: "All registered users",
      icon: Users,
      filter: "",
    },
    {
      title: "Active Users",
      value: activeUsers,
      subtitle: "Currently active",
      icon: UserCheck,
      filter: "Active",
    },
    {
      title: "Invited Users",
      value: invitedUsers,
      subtitle: "Invitation Pending",
      icon: UserPlus,
      filter: "Invited",
    },
    {
      title: "Inactive Users",
      value: inactiveUsers,
      subtitle: "Not logged in",
      icon: UserX,
      filter: "Inactive",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            onClick={() =>
              onFilterStatus?.(
                item.filter
              )
            }
            className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex items-center gap-4 h-[120px] cursor-pointer hover:border-[#071B3B]"
          >
            <div className="w-14 h-14 rounded-xl bg-[#EEF3FB] flex items-center justify-center">
              <Icon
                size={26}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-[15px] text-[#6B7280]">
                {item.title}
              </p>

              <h3 className="text-[32px] leading-none font-bold text-[#071B3B] mt-1">
                {String(item.value).padStart(
                  2,
                  "0"
                )}
              </h3>

              <p className="text-[12px] text-[#9CA3AF] mt-1">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}