"use client";

import Link from "next/link";
import {
  CreditCard,
  PlusCircle,
  ChevronRight,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Upload Card",
      description:
        "Scan a visiting card using AI",
      icon: CreditCard,
      href: "/lead-generator/card-ai",
    },
    {
      title: "Add Lead Manually",
      description:
        "Create a new lead manually",
      icon: PlusCircle,
      href: "/lead-generator/add-leads",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <Link
              key={index}
              href={action.href}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-md hover:border-[#CBD5E1] transition block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
                    <Icon
                      size={28}
                      className="text-[#071B3B]"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#111827]">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={20}
                  className="text-gray-400"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}