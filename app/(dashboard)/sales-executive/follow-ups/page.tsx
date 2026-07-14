"use client";

import { useState } from "react";

import FollowUpStats from "@/components/sales-executive/follow-ups/FollowUpStats";
import FollowUpFilters from "@/components/sales-executive/follow-ups/FollowUpFilters";
import FollowUpTable from "@/components/sales-executive/follow-ups/FollowUpTable";
import FollowUpDetailsModal from "@/components/sales-executive/follow-ups/FollowUpDetailsModal";

export default function FollowUpsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#071B3B]">
            Follow Ups
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage all upcoming and completed follow ups
          </p>
        </div>

        <FollowUpStats />

        <FollowUpFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        <FollowUpTable
          onViewDetails={() => setIsOpen(true)}
        />
      </div>

      <FollowUpDetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}