"use client";

import { useState } from "react";

import FollowUpStats from "@/components/sales-manager/follow-ups/FollowUpStats";
import FollowUpFilters from "@/components/sales-manager/follow-ups/FollowUpFilters";
import FollowUpTable from "@/components/sales-manager/follow-ups/FollowUpTable";
import FollowUpDetailsModal from "@/components/sales-manager/follow-ups/FollowUpDetailsModal";

export default function FollowUpsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFollowUp, setSelectedFollowUp] =
    useState<any>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[48px] font-bold text-[#071B3B]">
          Follow Ups
        </h1>

        <p className="text-[#6B7280] mt-2">
          Manage pending and completed follow ups
        </p>
      </div>

      <FollowUpStats />

      <FollowUpFilters
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        status={status}
        setStatus={setStatus}
      />

      <FollowUpTable
        onViewDetails={(followUp) => {
          setSelectedFollowUp(followUp);
          setIsOpen(true);
        }}
      />

      <FollowUpDetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        followUp={selectedFollowUp}
      />
    </div>
  );
}