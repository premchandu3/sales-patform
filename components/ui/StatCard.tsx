"use client";

import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  onClick,
}: StatCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        bg-white
        border
        border-[#E2E8F0]
        rounded-xl
        p-4
        cursor-pointer
        hover:shadow-sm
        transition
      "
    >
      <div className="flex items-start gap-3">

        <div
          className="
            w-12
            h-12
            rounded-lg
            bg-[#EEF3FB]
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          {icon}
        </div>

        <div>
          <p className="text-sm text-[#475569]">
            {title}
          </p>

          <h2 className="text-[32px] font-bold text-[#071B3B]">
            {value}
          </h2>

          <p className="text-xs text-[#94A3B8]">
            {subtitle}
          </p>
        </div>

      </div>
    </div>
  );
}