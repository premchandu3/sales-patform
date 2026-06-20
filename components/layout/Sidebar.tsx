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
    name: "Permissions",
    href: "/admin/permissions",
    icon: Shield,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#071B3B] text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-12">
        LOGO
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition
                ${
                  active
                    ? "bg-[#0E295E]"
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
    </aside>
  );
}