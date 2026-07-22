"use client";

import { useEffect, useState } from "react";
import {
  Users,
  CalendarDays,
  Clock3,
  CheckSquare,
} from "lucide-react";

interface FollowUp {
  status: string;
  createdAt: string;
}

export default function FollowUpStats() {
  const [total, setTotal] = useState(0);
  const [today, setToday] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch("/api/followups");
      const data: FollowUp[] =
        await response.json();

      setTotal(data.length);

      const todayDate =
        new Date().toDateString();

      setToday(
        data.filter(
          (item) =>
            new Date(
              item.createdAt
            ).toDateString() ===
            todayDate
        ).length
      );

      setPending(
        data.filter(
          (item) =>
            item.status === "Pending"
        ).length
      );

      setCompleted(
        data.filter(
          (item) =>
            item.status === "Completed"
        ).length
      );
    };

    fetchStats();
  }, []);

  const stats = [
    {
      title: "Total",
      value: total,
      subtitle: "All Time Follow Ups",
      icon: Users,
    },
    {
      title: "Today",
      value: today,
      subtitle: "Today's Follow Ups",
      icon: CalendarDays,
    },
    {
      title: "Pending",
      value: pending,
      subtitle: "Pending Follow Ups",
      icon: Clock3,
    },
    {
      title: "Completed",
      value: completed,
      subtitle: "Completed Follow Ups",
      icon: CheckSquare,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5 flex items-center gap-3 md:gap-4"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#EAF1FF] flex items-center justify-center flex-shrink-0">
              <Icon
                size={24}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-sm md:text-base font-medium">
                {stat.title}
              </p>

              <h3 className="text-3xl md:text-4xl font-bold leading-none mt-1">
                {stat.value}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}