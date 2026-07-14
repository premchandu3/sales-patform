"use client";

import { Plus, Upload } from "lucide-react";
import Link from "next/link";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  source: string;
  setSource: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
}

export default function LeadsFilters({
  search,
  setSearch,
  date,
  setDate,
}: Props) {
  return (
    <div className="mb-8">
      <div className="border-t border-[#E5E7EB] pt-6">

        <div className="flex items-end justify-between gap-6">

          <div className="flex gap-6">

            <div>
              <p className="text-sm text-[#374151] mb-2">
                Search Leads
              </p>

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-[260px] h-12 border border-[#D1D5DB] rounded-lg px-4"
              />
            </div>

            <div>
              <p className="text-sm text-[#374151] mb-2">
                Filter By Date
              </p>

              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                  className="w-[220px] h-12 border border-[#D1D5DB] rounded-lg px-4"
                />

              </div>
            </div>

          </div>

          <div className="flex gap-3">

            <button className="bg-[#071B3B] text-white h-12 px-5 rounded-lg flex items-center gap-2">
              <Upload size={18} />
              Upload Card
            </button>

            <Link
              href="/lead-generator/add-leads"
              className="bg-[#071B3B] text-white h-12 px-5 rounded-lg flex items-center gap-2"
            >
              <Plus size={18} />
              Add Lead
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}