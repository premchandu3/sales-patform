"use client";

import { useState } from "react";

import LeadStats from "@/components/sales-executive/my-leads/LeadStats";
import LeadFilters from "@/components/sales-executive/my-leads/LeadFilters";
import LeadTable from "@/components/sales-executive/my-leads/LeadTable";
import LeadDetailsDrawer from "@/components/sales-executive/my-leads/LeadDetailsDrawer";

export default function MyLeadsPage() {
  const [search, setSearch] = useState("");
  const [owner, setOwner] = useState("All");
  const [date, setDate] = useState("");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#071B3B]">
            My Leads
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage all your leads from one place
          </p>
        </div>

        <LeadStats />

        <LeadFilters
          search={search}
          setSearch={setSearch}
          owner={owner}
          setOwner={setOwner}
          date={date}
          setDate={setDate}
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