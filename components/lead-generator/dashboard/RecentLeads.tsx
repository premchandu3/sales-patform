"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { leadService } from "@/services/lead.service";

type Lead = {
  _id: string;
  contactPersonName: string;
  companyName: string;
  leadSource: string;
  createdAt: string;
};

export default function RecentLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const loadRecentLeads = async () => {
      try {
        const data = await leadService.getLeads();

        setLeads(data.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };

    loadRecentLeads();
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-full">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold">
          Recent Leads
        </h2>

        <Link
          href="/lead-generator/my-leads"
          className="text-sm font-medium text-[#0F172A] hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#EAF2FF]">
            <tr>
              <th className="text-left px-4 py-4">
                Name
              </th>

              <th className="text-left px-4 py-4">
                Company
              </th>

              <th className="text-left px-4 py-4">
                Source
              </th>

              <th className="text-left px-4 py-4">
                Date
              </th>

              <th className="text-left px-4 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead._id}
                className="border-b border-gray-100"
              >
                <td className="px-4 py-4">
                  {lead.contactPersonName || "-"}
                </td>

                <td className="px-4 py-4">
                  {lead.companyName || "-"}
                </td>

                <td className="px-4 py-4">
                  {lead.leadSource || "-"}
                </td>

                <td className="px-4 py-4">
                  {new Date(
                    lead.createdAt
                  ).toLocaleDateString("en-GB")}
                </td>

                <td className="px-4 py-4">
                  <button className="bg-[#071B3B] text-white rounded-lg px-4 py-2 text-sm hover:bg-[#0A2955] transition">
                    View
                  </button>
                </td>
              </tr>
            ))}

            {leads.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-8 text-gray-500"
                >
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}