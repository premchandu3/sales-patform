import {
  Users,
  CalendarDays,
  Briefcase,
} from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "649",
    subtitle: "All time",
    icon: Users,
  },
  {
    title: "Daily Leads",
    value: "59",
    subtitle: "Added today",
    icon: CalendarDays,
  },
  {
    title: "Monthly Leads",
    value: "400",
    subtitle: "This month",
    icon: Briefcase,
  },
];

export default function LeadStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {stats.map((stat) => {
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