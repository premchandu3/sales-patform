"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  Calendar,
  CheckCircle,
} from "lucide-react";

interface DiscoveryCall {
  status: string;
}

export default function CallStats() {
  const [totalCalls, setTotalCalls] =
    useState(0);

  const [scheduledCalls,
    setScheduledCalls] =
    useState(0);

  const [completedCalls,
    setCompletedCalls] =
    useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response =
          await fetch(
            "/api/discovery-calls"
          );

        const calls: DiscoveryCall[] =
          await response.json();

        setTotalCalls(calls.length);

        setScheduledCalls(
          calls.filter(
            (call) =>
              call.status ===
              "Scheduled"
          ).length
        );

        setCompletedCalls(
          calls.filter(
            (call) =>
              call.status ===
              "Completed"
          ).length
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      title: "Total Calls",
      value: totalCalls,
      subtitle: "All calls",
      icon: Phone,
    },
    {
      title: "Scheduled",
      value: scheduledCalls,
      subtitle: "Upcoming calls",
      icon: Calendar,
    },
    {
      title: "Completed",
      value: completedCalls,
      subtitle: "Completed calls",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="flex gap-4 max-w-[760px]">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
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
                {stat.title}
              </p>

              <h3 className="text-[20px] font-bold text-[#071B3B] mt-1">
                {stat.value}
              </h3>

              <p className="text-[11px] text-[#9CA3AF]">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}