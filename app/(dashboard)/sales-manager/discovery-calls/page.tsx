"use client";

import { useState } from "react";

import DiscoveryStats from "@/components/sales-manager/discovery-calls/CallStats";
import DiscoveryFilters from "@/components/sales-manager/discovery-calls/CallFilters";
import DiscoveryTable from "@/components/sales-manager/discovery-calls/CallTable";
import DiscoveryDetailsModal from "@/components/sales-manager/discovery-calls/CallDetailsModal";

interface DiscoveryCall {
  _id: string;
  leadId: string;
  meetingDate: string;
  meetingTime: string;
  meetingType: string;
  status: string;
}

export default function DiscoveryCallsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [date, setDate] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [selectedCall, setSelectedCall] =
    useState<DiscoveryCall | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[48px] font-bold text-[#071B3B]">
          Discovery Calls
        </h1>

        <p className="text-[#6B7280] mt-2">
          Manage upcoming and completed discovery calls
        </p>
      </div>

      <DiscoveryStats />

      <DiscoveryFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        date={date}
        setDate={setDate}
      />

      <DiscoveryTable
        onViewDetails={(call) => {
          setSelectedCall(call);
          setIsOpen(true);
        }}
      />

      <DiscoveryDetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        call={selectedCall}
      />
    </div>
  );
}