"use client";

import { useState } from "react";

import LeadStats from "@/components/sales-executive/all-leads/LeadStats";
import LeadFilters from "@/components/sales-executive/all-leads/LeadFilters";
import LeadTable from "@/components/sales-executive/all-leads/LeadTable";
import LeadDetailsDrawer from "@/components/sales-executive/all-leads/LeadDetailsDrawer";

export default function AllLeadsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
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
          onViewDetails={() => setIsDrawerOpen(true)}
        />
      </div>

      <LeadDetailsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}