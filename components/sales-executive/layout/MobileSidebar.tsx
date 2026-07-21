"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, LayoutGrid, UserRound, FileText, History, Phone, CreditCard, Search, Mail } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({
  isOpen,
  onClose,
}: MobileSidebarProps) {
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
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[260px] bg-[#061B3A] text-white px-5 py-6 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold">LOGO</h1>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
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
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    pathname === item.href
                      ? "bg-[#081529] text-white"
                      : "text-[#D6DCE8] hover:bg-[#081529]"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />

                  <span className="text-[15px]">
                    {item.label}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}