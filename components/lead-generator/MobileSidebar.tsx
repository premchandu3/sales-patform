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
  X,
} from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function MobileSidebar({
  isOpen,
  onClose,
}: MobileSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-72
          bg-[#071B3B]
          text-white
          z-50
          transform
          transition-transform
          duration-300
          lg:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="px-6 h-20 flex items-center justify-between border-b border-[#14325D]">
          <h1 className="text-3xl font-bold">LOGO</h1>

          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-[#14325D]"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 px-5 py-6 space-y-8 overflow-y-auto">
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
                      onClick={onClose}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                        active
                          ? "bg-[#10264A]"
                          : "hover:bg-[#10264A]"
                      }`}
                    >
                      <Icon size={18} />
                      {item.name}
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
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#10264A]"
          >
            <User size={18} />
            Profile
          </Link>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#10264A]">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}