import {
  Users,
  CalendarDays,
  Clock3,
  Phone,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      title: "Total Leads",
      value: "649",
      subtitle: "All leads",
      icon: Users,
    },
    {
      title: "Assigned Leads",
      value: "59",
      subtitle: "From lead generators",
      icon: CalendarDays,
    },
    {
      title: "Follow ups",
      value: "400",
      subtitle: "Pending follow ups",
      icon: Clock3,
    },
    {
      title: "Discovery Calls",
      value: "400",
      subtitle: "Scheduled Today",
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
                <Icon
                  size={20}
                  className="text-[#374151]"
                />
              </div>

              <div>
                <p className="text-[14px] text-[#374151] font-medium">
                  {item.title}
                </p>

                <h3 className="text-[18px] font-bold text-[#111827] leading-none mt-1">
                  {item.value}
                </h3>

                <p className="text-[11px] text-[#9CA3AF] mt-1">
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