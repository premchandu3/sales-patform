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
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 max-w-[760px]">
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
              <p className="text-sm md:text-base font-semibold text-[#374151]">
                {stat.title}
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-[#071B3B] leading-none mt-1">
                {stat.value}
              </h3>

              <p className="text-xs text-[#9CA3AF] mt-1">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}