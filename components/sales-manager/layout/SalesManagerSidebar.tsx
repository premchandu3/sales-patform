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
  X,
} from "lucide-react";

interface SalesManagerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function SalesManagerSidebar({
  isOpen,
  onClose,
}: SalesManagerSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-screen
          w-[220px]
          bg-[#071B3B]
          text-white
          flex flex-col
          z-50
          transform transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="px-8 py-6 lg:py-10 text-4xl font-bold">
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
                  onClick={onClose}
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
    </>
  );
}