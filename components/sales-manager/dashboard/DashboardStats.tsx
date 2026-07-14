import {
  Users,
  CalendarDays,
  Clock3,
  Phone,
} from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "649",
    icon: Users,
  },
  {
    title: "New Leads",
    value: "59",
    icon: CalendarDays,
  },
  {
    title: "Follow Ups Due",
    value: "400",
    icon: Clock3,
  },
  {
    title: "Discovery Calls",
    value: "400",
    icon: Phone,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-[#EEF4FF] flex items-center justify-center">
              <Icon
                size={24}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <p className="text-sm text-[#374151]">
                {item.title}
              </p>

              <h3 className="text-[36px] font-bold leading-none text-[#071B3B] mt-1">
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}