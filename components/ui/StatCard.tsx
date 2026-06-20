import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="bg-white border rounded-2xl p-6">
        <p className="text-gray-500 text-base leading-tight">
        {title}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {value}
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        {subtitle}
      </p>
    </div>
  );
}