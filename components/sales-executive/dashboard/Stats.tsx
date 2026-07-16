"use client";

import {
  Users,
  CalendarDays,
  Clock3,
  Phone,
} from "lucide-react";

interface StatsProps {
  totalLeads: number;
  assignedLeads: number;
  followUps: number;
  discoveryCalls: number;
}

export default function Stats({
  totalLeads,
  assignedLeads,
  followUps,
  discoveryCalls,
}: StatsProps) {
  const stats = [
    {
      title: "Total Leads",
      value: totalLeads,
      subtitle: "All leads",
      icon: Users,
    },
    {
      title: "Assigned Leads",
      value: assignedLeads,
      subtitle: "From lead generators",
      icon: CalendarDays,
    },
    {
      title: "Follow Ups",
      value: followUps,
      subtitle: "Pending follow ups",
      icon: Clock3,
    },
    {
      title: "Discovery Calls",
      value: discoveryCalls,
      subtitle: "Scheduled today",
      icon: Phone,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white border border-[#E5E7EB] rounded-xl p-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-md bg-[#EEF4FF] flex items-center justify-center">
                <Icon size={20} />
              </div>

              <div>
                <p className="text-[14px] font-medium">
                  {item.title}
                </p>

                <h3 className="text-[18px] font-bold mt-1">
                  {item.value}
                </h3>

                <p className="text-[11px] text-gray-400 mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}