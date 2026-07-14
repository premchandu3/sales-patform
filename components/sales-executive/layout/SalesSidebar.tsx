"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  UserRound,
  FileText,
  History,
  Phone,
  CreditCard,
  Search,
  Mail,
} from "lucide-react";

export default function SalesSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Dashboard",
      href: "/sales-executive/dashboard",
      icon: LayoutGrid,
    },

    {
      label: "Add Leads",
      href: "/sales-executive/add-leads",
      icon: UserRound,
      section: "Lead Management",
    },

    {
      label: "My Leads",
      href: "/sales-executive/my-leads",
      icon: FileText,
    },

    {
      label: "All Leads",
      href: "/sales-executive/all-leads",
      icon: FileText,
    },

    {
      label: "Follow Ups",
      href: "/sales-executive/follow-ups",
      icon: History,
      section: "Sales Activities",
    },

    {
      label: "Discovery Calls",
      href: "/sales-executive/discovery-calls",
      icon: Phone,
    },

    {
      label: "Card AI",
      href: "/sales-executive/card-ai",
      icon: CreditCard,
      section: "AI Tools",
    },

    {
      label: "Deep Research",
      href: "/sales-executive/deep-research",
      icon: Search,
    },

    {
      label: "Mail Center",
      href: "/sales-executive/mail-center",
      icon: Mail,
    },
  ];

  return (
    <aside className="w-[240px] bg-[#061B3A] text-white min-h-screen px-5 py-8 flex flex-col">
      <h1 className="text-[20px] font-bold mb-10">
        LOGO
      </h1>

      <div className="flex flex-col gap-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index}>
              {item.section && (
                <p className="text-[13px] text-[#9CA3AF] mt-6 mb-2">
                  {item.section}
                </p>
              )}

              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  pathname === item.href
                    ? "bg-[#081529] text-white"
                    : "text-[#D6DCE8] hover:bg-[#081529]"
                }`}
              >
                <Icon
                  size={18}
                  strokeWidth={1.8}
                />

                <span className="text-[15px] whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
}