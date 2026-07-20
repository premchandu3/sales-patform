"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  User,
  BriefcaseBusiness,
  ShieldCheck,
  X,
} from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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
          w-[250px]
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
        <div className="h-20 flex items-center justify-between px-6 border-b border-[#14325D]">
          <h1 className="text-[30px] font-bold">
            LOGO
          </h1>

          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-[#14325D]"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="px-6 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 h-11 px-4 rounded-lg transition-all ${
                  active
                    ? "bg-[#020E26]"
                    : "hover:bg-[#0E295E]"
                }`}
              >
                <Icon size={18} />

                <span className="text-[15px]">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6">
          <div className="w-10 h-10 rounded-full bg-[#0E295E] flex items-center justify-center">
            A
          </div>
        </div>
      </aside>
    </>
  );
}