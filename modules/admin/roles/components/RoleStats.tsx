import {
  Briefcase,
  CheckCircle,
  XCircle,
  Users,
} from "lucide-react";

import { Role } from "@/types/role";

interface RoleStatsProps {
  roles: Role[];
}

export default function RoleStats({
  roles,
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
    },
    {
      title: "Active Roles",
      value: activeRoles,
      subtitle: "Currently active",
      icon: CheckCircle,
    },
    {
      title: "Inactive Roles",
      value: inactiveRoles,
      subtitle: "Currently inactive",
      icon: XCircle,
    },
    {
      title: "Total Users",
      value: totalUsers,
      subtitle: "Across all roles",
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white border border-[#E5E7EB] rounded-lg p-3 flex items-center gap-3 h-[90px]"
          >
            <div className="w-10 h-10 rounded-lg bg-[#EEF3FB] flex items-center justify-center">
              <Icon
                size={20}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-600">
                {item.title}
              </p>

              <h3 className="text-xl font-bold text-[#071B3B]">
                {String(item.value).padStart(
                  2,
                  "0"
                )}
              </h3>

              <p className="text-xs text-gray-400">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}