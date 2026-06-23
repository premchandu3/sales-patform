"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Shield,
  Briefcase,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Roles",
    href: "/admin/roles",
    icon: Briefcase,
  },
  {
    name: "Permission",
    href: "/admin/permissions",
    icon: Shield,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[180px] bg-[#071B3B] text-white flex flex-col min-h-screen">

      <div className="px-6 pt-8">
        <h1 className="text-[18px] font-bold tracking-wide">
          LOGO
        </h1>
      </div>

      <nav className="mt-12 px-4 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center
                gap-3
                h-[46px]
                px-4
                rounded-xl
                text-[14px]
                font-medium
                transition-all
                ${
                  active
                    ? "bg-[#02142D]"
                    : "hover:bg-[#0E295E]"
                }
              `}
            >
              <Icon size={18} />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-5">
        <div className="w-10 h-10 rounded-full bg-black border border-gray-600 flex items-center justify-center">
          N
        </div>
      </div>

    </aside>
  );
}