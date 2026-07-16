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
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white border rounded-xl p-4 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-lg bg-[#EAF1FF] flex items-center justify-center">
              <Icon
                size={24}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-sm font-medium">
                {stat.title}
              </p>

              <h3 className="text-2xl font-bold">
                {stat.value}
              </h3>

              <p className="text-xs text-gray-500">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}