import { Users, CalendarDays, Briefcase } from "lucide-react";

export default function LeadStats() {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <Icon size={26} className="text-[#071B3B]" />
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-[#374151]">
                {stat.title}
              </h3>

              <p className="text-[38px] font-bold text-[#071B3B] leading-none mt-1">
                {stat.value}
              </p>

              <p className="text-sm text-[#9CA3AF] mt-1">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}