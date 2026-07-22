import {
  Users,
  CalendarPlus,
  CalendarDays,
} from "lucide-react";

interface StatsProps {
  totalLeads: number;
  dailyLeads: number;
  monthlyLeads: number;
}

export default function Stats({
  totalLeads,
  dailyLeads,
  monthlyLeads,
}: StatsProps) {
  const stats = [
    {
      title: "Total Leads",
      value: totalLeads,
      subtitle: "All time",
      icon: Users,
    },
    {
      title: "Daily Leads",
      value: dailyLeads,
      subtitle: "Added today",
      icon: CalendarPlus,
    },
    {
      title: "Monthly Leads",
      value: monthlyLeads,
      subtitle: "This month",
      icon: CalendarDays,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
                <Icon
                  size={28}
                  className="text-[#0F172A]"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-[#111827]">
                  {item.value}
                </h2>

                <p className="text-xs text-gray-400">
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