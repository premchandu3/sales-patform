"use client";

import { useEffect, useState } from "react";
import {
  Users,
  CalendarDays,
  Clock3,
  Phone,
} from "lucide-react";

type Stats = {
  totalLeads: number;
  newLeads: number;
  followUpsDue: number;
  discoveryCalls: number;
};

export default function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    totalLeads: 0,
    newLeads: 0,
    followUpsDue: 0,
    discoveryCalls: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [leadsRes, followUpsRes, callsRes] =
        await Promise.all([
          fetch("/api/leads"),
          fetch("/api/followups"),
          fetch("/api/discovery-calls"),
        ]);

      const leads = await leadsRes.json();
      const followUps = await followUpsRes.json();
      const calls = await callsRes.json();

      const today = new Date().toISOString().split("T")[0];

      setStats({
        totalLeads: leads.length,

        newLeads: leads.filter(
          (lead: any) =>
            lead.createdAt?.split("T")[0] === today
        ).length,

        followUpsDue: followUps.filter(
          (item: any) =>
            item.status === "Pending"
        ).length,

        discoveryCalls: calls.length,
      });
    } catch (error) {
      console.error(
        "Failed to fetch dashboard stats",
        error
      );
    }
  };

  const cards = [
    {
      title: "Total Leads",
      value: stats.totalLeads,
      icon: Users,
    },
    {
      title: "New Leads",
      value: stats.newLeads,
      icon: CalendarDays,
    },
    {
      title: "Follow Ups Due",
      value: stats.followUpsDue,
      icon: Clock3,
    },
    {
      title: "Discovery Calls",
      value: stats.discoveryCalls,
      icon: Phone,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5 flex items-center gap-3 md:gap-4"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#EEF4FF] flex items-center justify-center flex-shrink-0">
              <Icon
                size={24}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-sm md:text-base text-[#374151]">
                {item.title}
              </p>

              <h3 className="text-3xl md:text-[36px] font-bold leading-none text-[#071B3B] mt-1">
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}