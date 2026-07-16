"use client";

import { useEffect, useState } from "react";
import {
  Users,
  ShieldCheck,
  UserPlus,
  UserX,
} from "lucide-react";

type Stats = {
  totalUsers: number;
  activeUsers: number;
  invitedUsers: number;
  inactiveUsers: number;
};

export default function TeamStats() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    activeUsers: 0,
    invitedUsers: 0,
    inactiveUsers: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/users");
      const users = await res.json();

      setStats({
        totalUsers: users.length,

        activeUsers: users.filter(
          (user: any) => user.status === "Active"
        ).length,

        invitedUsers: users.filter(
          (user: any) => user.status === "Invited"
        ).length,

        inactiveUsers: users.filter(
          (user: any) => user.status === "Inactive"
        ).length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      subtitle: "All registered users",
      icon: Users,
    },
    {
      title: "Active Users",
      value: stats.activeUsers,
      subtitle: "Currently active",
      icon: ShieldCheck,
    },
    {
      title: "Invited Users",
      value: stats.invitedUsers,
      subtitle: "Invitation pending",
      icon: UserPlus,
    },
    {
      title: "Inactive Users",
      value: stats.inactiveUsers,
      subtitle: "Currently inactive",
      icon: UserX,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-4 flex items-center gap-4 h-[108px]"
          >
            <div className="w-[56px] h-[56px] rounded-lg bg-[#EAF1FB] flex items-center justify-center">
              <Icon
                size={26}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-[#374151]">
                {item.title}
              </h4>

              <p className="text-[42px] font-bold text-[#071B3B] leading-none mt-2">
                {item.value}
              </p>

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