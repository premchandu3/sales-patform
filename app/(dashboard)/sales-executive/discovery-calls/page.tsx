"use client";

import { useState } from "react";

import CallStats from "@/components/sales-executive/discovery-calls/CallStats";
import CallFilters from "@/components/sales-executive/discovery-calls/CallFilters";
import CallTable from "@/components/sales-executive/discovery-calls/CallTable";
import CallDetailsModal from "@/components/sales-executive/discovery-calls/CallDetailsModal";

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

  const [isOpen, setIsOpen] =
    useState(false);

  const [selectedCall, setSelectedCall] =
    useState<DiscoveryCall | null>(
      null
    );

  return (
    <>
      <div className="space-y-5 md:space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#071B3B]">
            Discovery Calls
          </h1>

          <p className="text-xs md:text-sm text-gray-500">
            Manage all scheduled and
            completed discovery calls
          </p>
        </div>

        <CallStats />

        <CallFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          date={date}
          setDate={setDate}
        />

        <CallTable
          onViewDetails={(
            call
          ) => {
            setSelectedCall(call);
            setIsOpen(true);
          }}
        />
      </div>

      <CallDetailsModal
        isOpen={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
        call={selectedCall}
      />
    </>
  );
}