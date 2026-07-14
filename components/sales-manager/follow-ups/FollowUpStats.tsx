import { Users, CalendarDays, Clock3, CheckSquare } from "lucide-react";

const stats = [
  {
    title: "Total",
    value: "649",
    subtitle: "All Time Follow ups",
    icon: Users,
  },
  {
    title: "Today",
    value: "59",
    subtitle: "Today's follow ups",
    icon: CalendarDays,
  },
  {
    title: "Pending",
    value: "400",
    subtitle: "Pending follow ups",
    icon: Clock3,
  },
  {
    title: "Completed",
    value: "400",
    subtitle: "Completed follow ups",
    icon: CheckSquare,
  },
];

export default function FollowUpStats() {
  return (
    <div className="flex gap-4 max-w-[760px]">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="flex-1 bg-white border border-[#E5E7EB] rounded-[12px] px-4 py-4 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-[8px] bg-[#EAF1FF] flex items-center justify-center flex-shrink-0">
              <Icon
                size={24}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-[13px] font-semibold text-[#374151]">
                {stat.title}
              </p>

              <h3 className="text-[20px] font-bold text-[#071B3B] leading-none mt-1">
                {stat.value}
              </h3>

              <p className="text-[11px] text-[#9CA3AF] mt-1">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}