"use client";

import { useState } from "react";

import LeadStats from "@/components/sales-executive/all-leads/LeadStats";
import LeadFilters from "@/components/sales-executive/all-leads/LeadFilters";
import LeadTable from "@/components/sales-executive/all-leads/LeadTable";

export default function AllLeadsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#071B3B]">
          All Leads
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          View and manage all leads across the platform
        </p>
      </div>

      <LeadStats />

      <LeadFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <LeadTable
        search={search}
        source=""
        status={status === "All" ? "" : status}
        date=""
      />
    </div>
  );
}