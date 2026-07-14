"use client";

import { useState } from "react";

import LeadStats from "@/components/sales-manager/all-leads/LeadStats";
import LeadFilters from "@/components/sales-manager/all-leads/LeadFilters";
import LeadTable from "@/components/sales-manager/all-leads/LeadTable";
import LeadDetailsModal from "@/components/sales-manager/all-leads/LeadDetailsModal";

export default function AllLeadsPage() {
  const [search, setSearch] = useState("");
  const [owner, setOwner] = useState("All");
  const [status, setStatus] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[48px] font-bold text-[#071B3B]">
          All Leads
        </h1>

        <p className="text-[#6B7280] mt-2">
          View and manage all leads created by the team
        </p>
      </div>

      <LeadStats />

      <LeadFilters
        search={search}
        setSearch={setSearch}
        owner={owner}
        setOwner={setOwner}
        status={status}
        setStatus={setStatus}
      />

      <LeadTable
        onViewDetails={() => setIsOpen(true)}
      />

      <LeadDetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}