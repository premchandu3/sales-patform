import Image from "next/image";

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
      icon: "/icons/users.png",
      filter: "",
    },
    {
      title: "Active Users",
      value: activeUsers,
      subtitle: "Currently active",
      icon: "/icons/users.png",
      filter: "Active",
    },
    {
      title: "Invited Users",
      value: invitedUsers,
      subtitle: "Invitation Pending",
      icon: "/icons/users.png",
      filter: "Invited",
    },
    {
      title: "Inactive Users",
      value: inactiveUsers,
      subtitle: "Not logged in",
      icon: "/icons/users.png",
      filter: "Inactive",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item) => {

        return (
          <div
            key={item.title}
            onClick={() =>
              onFilterStatus?.(
                item.filter
              )
            }
            className="bg-white border border-[#E5E7EB] rounded-xl px-5 py-4 flex items-center gap-4 h-[108px] cursor-pointer hover:border-[#071B3B] transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
              />
            </div>

            <div>
              <p className="text-[14px] text-[#6B7280]">
                {item.title}
              </p>

              <h3 className="text-[28px] leading-none font-bold text-[#071B3B] mt-1">
                {String(item.value).padStart(
                  2,
                  "0"
                )}
              </h3>

              <p className="text-[11px] text-[#64748B] mt-1">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}