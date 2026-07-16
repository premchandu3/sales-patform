"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function CallStats() {
  const [stats, setStats] = useState({
    total: 0,
    scheduled: 0,
    completed: 0,
  });

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    try {
      const res = await fetch("/api/discovery-calls");
      const calls = await res.json();

      setStats({
        total: calls.length,
        scheduled: calls.filter(
          (c: any) => c.status === "Scheduled"
        ).length,
        completed: calls.filter(
          (c: any) => c.status === "Completed"
        ).length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const cards = [
    {
      title: "Total Calls",
      value: stats.total,
      subtitle: "All calls",
      icon: Phone,
    },
    {
      title: "Scheduled",
      value: stats.scheduled,
      subtitle: "Upcoming calls",
      icon: Calendar,
    },
    {
      title: "Completed",
      value: stats.completed,
      subtitle: "Completed calls",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="flex gap-4 max-w-[760px]">
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex-1 bg-white border border-[#E5E7EB] rounded-[12px] px-4 py-4 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-[8px] bg-[#EAF1FF] flex items-center justify-center">
              <Icon
                size={22}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-[13px] font-semibold text-[#374151]">
                {item.title}
              </p>

              <h3 className="text-[20px] font-bold text-[#071B3B] mt-1">
                {item.value}
              </h3>

              <p className="text-[11px] text-[#9CA3AF]">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}