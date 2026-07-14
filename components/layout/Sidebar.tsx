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
    <aside className="hidden lg:flex w-[312px] bg-[#071B3B] text-white flex-col min-h-screen">

      <div className="px-6 pt-10">
        <h1 className="text-[56px] font-semibold text-white">
          LOGO
        </h1>
      </div>

      <nav className="mt-16 px-4 space-y-6">
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
                h-[-52px]
                px-4
                rounded-xl
                transition-all
                ${
                  active
                    ? "bg-[#020E26]"
                    : "hover:bg-[#0E295E]"
                }
              `}
            >
              <Icon size={24} />

                <span className="text-[20px] font-medium">   
                  {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-6 pb-8">
        <div className="w-12 h-12 rounded-full bg-[#0E295E] flex items-center justify-center">
          A
        </div>
      </div>
    </aside>
  );
}