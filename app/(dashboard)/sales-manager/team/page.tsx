"use client";

import { useState } from "react";

import TeamStats from "@/components/sales-manager/team/TeamStats";
import TeamFilters from "@/components/sales-manager/team/TeamFilters";
import TeamTable from "@/components/sales-manager/team/TeamTable";
import TeamDetailsModal from "@/components/sales-manager/team/TeamDetailsModal";

export default function TeamPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [role, setRole] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[48px] font-bold text-[#071B3B]">
          Team
        </h1>

        <p className="text-[#6B7280] mt-2">
          Manage all team members
        </p>
      </div>

      <TeamStats />

      <TeamFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        role={role}
        setRole={setRole}
      />

      <TeamTable
        onViewDetails={() => setIsOpen(true)}
      />

      <TeamDetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}