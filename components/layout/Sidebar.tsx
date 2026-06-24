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
    <aside className="hidden md:flex md:w-20 lg:w-[220px] bg-[#071B3B] text-white flex-col min-h-screen">

      <div className="px-4 lg:px-6 pt-8">
        <h1 className="text-lg font-bold tracking-wide text-center lg:text-left">
          LOGO
        </h1>
      </div>

      <nav className="mt-12 px-3 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center
                gap-3
                h-12
                px-4
                rounded-xl
                transition-all
                ${
                  active
                    ? "bg-[#02142D]"
                    : "hover:bg-[#0E295E]"
                }
              `}
            >
              <Icon size={18} />

              <span className="hidden lg:block text-sm font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-5 flex justify-center lg:justify-start">
        <div className="w-10 h-10 rounded-full bg-black border border-gray-600 flex items-center justify-center">
          N
        </div>
      </div>
    </aside>
  );
}