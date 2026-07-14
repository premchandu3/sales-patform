"use client";

import { useState } from "react";

import LeadStats from "@/components/lead-generator/my-leads/LeadStats";
import LeadsFilters from "@/components/lead-generator/my-leads/LeadsFilters";
import LeadsTable from "@/components/lead-generator/my-leads/LeadsTable";

export default function MyLeadsPage() {
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">
        My Leads
      </h1>

      <LeadStats />

      <LeadsFilters
        search={search}
        setSearch={setSearch}
        source={source}
        setSource={setSource}
        status={status}
        setStatus={setStatus}
        date={date}
        setDate={setDate}
      />

      <LeadsTable
        search={search}
        source={source}
        status={status}
        date={date}
      />
    </div>
  );
}