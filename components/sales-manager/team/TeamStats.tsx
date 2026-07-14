import {
  Users,
  ShieldCheck,
  UserPlus,
  UserX,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "15",
    subtitle: "All registered users",
    icon: Users,
  },
  {
    title: "Active Roles",
    value: "04",
    subtitle: "Currently active",
    icon: ShieldCheck,
  },
  {
    title: "Invited Users",
    value: "03",
    subtitle: "Invitation Pending",
    icon: UserPlus,
  },
  {
    title: "Inactive Users",
    value: "08",
    subtitle: "Not logged in",
    icon: UserX,
  },
];

export default function TeamStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-4 flex items-center gap-4 h-[108px]"
          >
            <div className="w-[56px] h-[56px] rounded-lg bg-[#EAF1FB] flex items-center justify-center shrink-0">
              <Icon
                size={26}
                className="text-[#071B3B]"
              />
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-[#374151] leading-none">
                {stat.title}
              </h4>

              <p className="text-[42px] font-bold leading-none text-[#071B3B] mt-2">
                {stat.value}
              </p>

              <p className="text-[12px] text-[#9CA3AF] mt-1">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}