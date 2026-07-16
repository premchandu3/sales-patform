"use client";

import { useEffect, useState } from "react";
import {
  Users,
  CalendarDays,
  Briefcase,
} from "lucide-react";

type Stats = {
  totalLeads: number;
  dailyLeads: number;
  monthlyLeads: number;
};

export default function LeadStats() {
  const [stats, setStats] = useState<Stats>({
    totalLeads: 0,
    dailyLeads: 0,
    monthlyLeads: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/leads");
      const leads = await res.json();

      const today = new Date();
      const todayString = today
        .toISOString()
        .split("T")[0];

      const currentMonth =
        today.getMonth();

      const currentYear =
        today.getFullYear();

      setStats({
        totalLeads: leads.length,

        dailyLeads: leads.filter(
          (lead: any) =>
            lead.createdAt?.split("T")[0] ===
            todayString
        ).length,

        monthlyLeads: leads.filter(
          (lead: any) => {
            const date = new Date(
              lead.createdAt
            );

            return (
              date.getMonth() ===
                currentMonth &&
              date.getFullYear() ===
                currentYear
            );
          }
        ).length,
      });
    } catch (error) {
      console.error(
        "Failed to fetch lead stats",
        error
      );
    }
  };

  const cards = [
    {
      title: "Total Leads",
      value: stats.totalLeads,
      subtitle: "All time",
      icon: Users,
    },
    {
      title: "Daily Leads",
      value: stats.dailyLeads,
      subtitle: "Added today",
      icon: CalendarDays,
    },
    {
      title: "Monthly Leads",
      value: stats.monthlyLeads,
      subtitle: "This month",
      icon: Briefcase,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-[#EEF4FF] flex items-center justify-center">
              <Icon
                size={24}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-[#374151]">
                {stat.title}
              </p>

              <h3 className="text-[36px] font-bold leading-none text-[#071B3B] mt-1">
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