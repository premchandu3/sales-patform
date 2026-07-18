"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  User,
  BriefcaseBusiness,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: User,
  },
  {
    name: "Roles",
    href: "/admin/roles",
    icon: BriefcaseBusiness,
  },
  {
    name: "Permission",
    href: "/admin/permissions",
    icon: ShieldCheck,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-[200px] bg-[#071B3B] text-white flex-col min-h-screen">

      <div className="px-8 pt-10">
        <h1 className="text-[32px] font-bold text-white tracking-wide">
          LOGO
        </h1>
      </div>

      <nav className="mt-8 px-10 space-y-2">
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
              h-11
              px-4
              rounded-lg
                transition-all
                ${active
                  ? "bg-[#020E26]"
                  : "hover:bg-[#0E295E]"
                }
              `}
            >
              <Icon size={18} />

              <span className="text-[15px] font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-8 pb-6">
        <div className="w-10 h-10 rounded-full bg-[#0E295E] flex items-center justify-center">
          A
        </div>
      </div>
    </aside>
  );
}