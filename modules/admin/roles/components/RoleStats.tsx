import Image from "next/image";

import { Role } from "@/types/role";

interface RoleStatsProps {
  roles: Role[];
  onFilterStatus?: (status: string) => void;
}

export default function RoleStats({
  roles,
  onFilterStatus,
}: RoleStatsProps) {
  const totalRoles = roles.length;

  const activeRoles = roles.filter(
    (role) => role.status === "Active"
  ).length;

  const inactiveRoles = roles.filter(
    (role) => role.status === "Inactive"
  ).length;

  const totalUsers = roles.reduce(
    (sum, role) => sum + (role.users || 0),
    0
  );

  const stats = [
    {
      title: "Total Roles",
      value: totalRoles,
      subtitle: "All roles in system",
      icon: "/icons/briefcase.png",
      filter: "",
    },
    {
      title: "Active Roles",
      value: activeRoles,
      subtitle: "Currently active",
      icon: "/icons/briefcase.png",
      filter: "Active",
    },
    {
      title: "Inactive Roles",
      value: inactiveRoles,
      subtitle: "Currently inactive",
      icon: "/icons/briefcase.png",
      filter: "Inactive",
    },
    {
      title: "Total Users",
      value: totalUsers,
      subtitle: "Across all roles",
      icon: "/icons/users.png",
      filter: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item) => (
        <div
          key={item.title}
          onClick={() => onFilterStatus?.(item.filter)}
          className="bg-white border border-[#E5E7EB] rounded-xl px-5 py-4 flex items-center gap-4 h-[108px] cursor-pointer hover:border-[#071B3B] transition-all"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="text-[14px] font-medium text-[#6B7280]">
              {item.title}
            </p>

            <h3 className="text-[28px] leading-none font-bold text-[#071B3B] mt-1">
              {String(item.value).padStart(2, "0")}
            </h3>

            <p className="text-[11px] text-[#64748B] mt-1">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}