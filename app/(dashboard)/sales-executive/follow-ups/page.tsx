"use client";

import { useState } from "react";

import FollowUpStats from "@/components/sales-executive/follow-ups/FollowUpStats";
import FollowUpFilters from "@/components/sales-executive/follow-ups/FollowUpFilters";
import FollowUpTable from "@/components/sales-executive/follow-ups/FollowUpTable";

export default function FollowUpsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  return (
    <div className="space-y-5 md:space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-[#071B3B]">
          Follow Ups
        </h1>

        <p className="text-xs md:text-sm text-gray-500">
          Manage all upcoming and completed follow ups
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
        search={search}
        type={type}
        status={status}
      />
    </div>
  );
}