"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Clock3,
  Phone,
  Mail,
  Users,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/sales-manager/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "All Leads",
    href: "/sales-manager/all-leads",
    icon: FileText,
  },
  {
    name: "Follow Ups",
    href: "/sales-manager/follow-ups",
    icon: Clock3,
  },
  {
    name: "Discovery Calls",
    href: "/sales-manager/discovery-calls",
    icon: Phone,
  },
  {
    name: "Mail Center",
    href: "/sales-manager/mail-center",
    icon: Mail,
  },
  {
    name: "Team",
    href: "/sales-manager/team",
    icon: Users,
  },
];

export default function SalesManagerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[220px] bg-[#071B3B] text-white flex flex-col">
      <div className="px-8 py-10 text-4xl font-bold">
        LOGO
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-[#0F274D] text-white"
                    : "text-gray-300 hover:bg-[#0F274D]"
                }`}
              >
                <Icon size={18} />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}