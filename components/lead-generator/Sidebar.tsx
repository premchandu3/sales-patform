"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UserPlus,
  ClipboardList,
  CreditCard,
  Search,
  User,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "",
    items: [
      {
        name: "Dashboard",
        href: "/lead-generator/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "Lead Management",
    items: [
      {
        name: "Add Leads",
        href: "/lead-generator/add-leads",
        icon: UserPlus,
      },
      {
        name: "My Leads",
        href: "/lead-generator/my-leads",
        icon: ClipboardList,
      },
    ],
  },

  {
    title: "AI Tools",
    items: [
      {
        name: "Card AI",
        href: "/lead-generator/card-ai",
        icon: CreditCard,
      },
      {
        name: "Deep Research",
        href: "/lead-generator/deep-research",
        icon: Search,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#071B3B] text-white flex flex-col">


      <div className="px-8 py-8">
        <h1 className="text-4xl font-bold">LOGO</h1>
      </div>


      <div className="flex-1 px-5 space-y-8">

        {menu.map((section) => (
          <div key={section.title}>

            {section.title && (
              <p className="text-xs text-gray-400 uppercase mb-3">
                {section.title}
              </p>
            )}

            <div className="space-y-2">

              {section.items.map((item) => {
                const Icon = item.icon;

                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                      ${
                        active
                          ? "bg-[#10264A]"
                          : "hover:bg-[#10264A]"
                      }`}
                  >
                    <Icon size={18} />

                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      

      <div className="px-5 pb-8 space-y-2">

        <Link
          href="/lead-generator/profile"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#10264A]"
        >
          <User size={18} />
          Profile
        </Link>

        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#10264A]"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}