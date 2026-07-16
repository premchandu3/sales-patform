"use client";

import { useEffect, useState } from "react";
import {
  Users,
  CalendarDays,
  Clock3,
  CheckSquare,
} from "lucide-react";

type Stats = {
  total: number;
  today: number;
  pending: number;
  completed: number;
};

export default function FollowUpStats() {
  const [stats, setStats] = useState<Stats>({
    total: 0,
    today: 0,
    pending: 0,
    completed: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/followups");
      const followUps = await res.json();

      const today = new Date()
        .toISOString()
        .split("T")[0];

      setStats({
        total: followUps.length,

        today: followUps.filter(
          (item: any) =>
            item.followUpDate === today
        ).length,

        pending: followUps.filter(
          (item: any) =>
            item.status === "Pending"
        ).length,

        completed: followUps.filter(
          (item: any) =>
            item.status === "Completed"
        ).length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const cards = [
    {
      title: "Total",
      value: stats.total,
      subtitle: "All Time Follow Ups",
      icon: Users,
    },
    {
      title: "Today",
      value: stats.today,
      subtitle: "Today's Follow Ups",
      icon: CalendarDays,
    },
    {
      title: "Pending",
      value: stats.pending,
      subtitle: "Pending Follow Ups",
      icon: Clock3,
    },
    {
      title: "Completed",
      value: stats.completed,
      subtitle: "Completed Follow Ups",
      icon: CheckSquare,
    },
  ];

  return (
    <div className="flex gap-4 max-w-[760px]">
      {cards.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="flex-1 bg-white border border-[#E5E7EB] rounded-[12px] px-4 py-4 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-[8px] bg-[#EAF1FF] flex items-center justify-center flex-shrink-0">
              <Icon
                size={24}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-[13px] font-semibold text-[#374151]">
                {stat.title}
              </p>

              <h3 className="text-[20px] font-bold text-[#071B3B] leading-none mt-1">
                {stat.value}
              </h3>

              <p className="text-[11px] text-[#9CA3AF] mt-1">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}