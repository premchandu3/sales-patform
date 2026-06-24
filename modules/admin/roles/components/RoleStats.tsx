import {
  Briefcase,
  CheckCircle,
  XCircle,
  Users,
} from "lucide-react";

import { Role } from "@/types/role";

interface RoleStatsProps {
  roles: Role[];
  onFilterStatus?: (
    status: string
  ) => void;
}

export default function RoleStats({
  roles,
  onFilterStatus,
}: RoleStatsProps) {
  const totalRoles =
    roles.length;

  const activeRoles =
    roles.filter(
      (role) =>
        role.status === "Active"
    ).length;

  const inactiveRoles =
    roles.filter(
      (role) =>
        role.status === "Inactive"
    ).length;

  const totalUsers =
    roles.reduce(
      (sum, role) =>
        sum + (role.users || 0),
      0
    );

  const stats = [
    {
      title: "Total Roles",
      value: totalRoles,
      subtitle: "All roles in system",
      icon: Briefcase,
      filter: "",
    },
    {
      title: "Active Roles",
      value: activeRoles,
      subtitle: "Currently active",
      icon: CheckCircle,
      filter: "Active",
    },
    {
      title: "Inactive Roles",
      value: inactiveRoles,
      subtitle: "Currently inactive",
      icon: XCircle,
      filter: "Inactive",
    },
    {
      title: "Total Users",
      value: totalUsers,
      subtitle: "Across all roles",
      icon: Users,
      filter: "",
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