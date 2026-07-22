"use client";

import { useEffect, useState } from "react";

type Overview = {
  total: number;
  newLeads: number;
  inProgress: number;
  converted: number;
  closedLost: number;
};

export default function LeadsOverview() {
  const [overview, setOverview] = useState<Overview>({
    total: 0,
    newLeads: 0,
    inProgress: 0,
    converted: 0,
    closedLost: 0,
  });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const leads = await res.json();

      const today = new Date().toISOString().split("T")[0];

      setOverview({
        total: leads.length,

        newLeads: leads.filter(
          (lead: any) =>
            lead.createdAt?.split("T")[0] === today
        ).length,

        inProgress: leads.filter(
          (lead: any) =>
            lead.status === "In Progress"
        ).length,

        converted: leads.filter(
          (lead: any) =>
            lead.status === "Converted"
        ).length,

        closedLost: leads.filter(
          (lead: any) =>
            lead.status === "Closed Lost"
        ).length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 md:mb-6">
        <h3 className="text-2xl md:text-[28px] font-bold text-[#111827]">
          Leads Overview
        </h3>

        <button className="text-sm font-medium self-start sm:self-auto">
          View All →
        </button>
      </div>

      <div className="space-y-4 md:space-y-5">
        <div className="flex items-center justify-between text-sm md:text-base">
          <span>Total Leads</span>
          <span>{overview.total}</span>
        </div>

        <div className="flex items-center justify-between text-sm md:text-base">
          <span>New Leads</span>
          <span>{overview.newLeads}</span>
        </div>

        <div className="flex items-center justify-between text-sm md:text-base">
          <span>In Progress</span>
          <span>{overview.inProgress}</span>
        </div>

        <div className="flex items-center justify-between text-sm md:text-base">
          <span>Converted</span>
          <span>{overview.converted}</span>
        </div>

        <div className="flex items-center justify-between text-sm md:text-base">
          <span>Closed Lost</span>
          <span>{overview.closedLost}</span>
        </div>
      </div>
    </div>
  );
}