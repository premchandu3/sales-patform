import { Phone, Calendar, CheckCircle } from "lucide-react";

const stats = [
  {
    title: "Total Calls",
    value: "128",
    subtitle: "All calls",
    icon: Phone,
  },
  {
    title: "Scheduled",
    value: "45",
    subtitle: "Upcoming calls",
    icon: Calendar,
  },
  {
    title: "Completed",
    value: "83",
    subtitle: "Completed calls",
    icon: CheckCircle,
  },
];

export default function CallStats() {
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
              <Icon size={22} className="text-[#071B3B]" />
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