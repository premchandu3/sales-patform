"use client";

import Link from "next/link";

type LeadFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
};

export default function LeadFilters({
  search,
  setSearch,
  status,
  setStatus,
}: LeadFiltersProps) {
  return (
    <div className="border-t border-[#E5E7EB] pt-8">
      <div className="flex items-end justify-between gap-6">
        <div className="flex gap-6">
          <div>
            <label className="block text-sm text-[#374151] mb-2">
              Search Leads
            </label>

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[260px] h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm text-[#374151] mb-2">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-[180px] h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
            >
              <option value="All">All</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#071B3B] text-white px-5 h-11 rounded-lg">
            Upload Card
          </button>

          <Link
            href="/sales-executive/add-leads"
            className="bg-[#071B3B] text-white px-5 h-11 rounded-lg flex items-center"
          >
            Add Lead
          </Link>
        </div>
      </div>
    </div>
  );
}