"use client";

import { useEffect, useState } from "react";

interface Lead {
  _id: string;
  contactPersonName: string;
  companyName: string;
  leadSource: string;
  leadOwner: string;
  status: string;
}

type LeadTableProps = {
  search: string;
  owner: string;
  status: string;
  onViewDetails: (lead: Lead) => void;
};

export default function LeadTable({
  search,
  owner,
  status,
  onViewDetails,
}: LeadTableProps) {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setLeads(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.contactPersonName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.companyName
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesOwner =
      owner === "All" ||
      lead.leadOwner === owner;

    const matchesStatus =
      status === "All" ||
      lead.status === status;

    return (
      matchesSearch &&
      matchesOwner &&
      matchesStatus
    );
  });

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full">
          <thead>
            <tr className="bg-[#DDE7F5]">
              <th className="px-5 py-4 text-left text-sm font-semibold whitespace-nowrap">
                Name
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold whitespace-nowrap">
                Company
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold whitespace-nowrap">
                Source
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold whitespace-nowrap">
                Lead Owner
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold whitespace-nowrap">
                Status
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold whitespace-nowrap">
                Next Step
              </th>

              <th className="px-5 py-4 text-right text-sm font-semibold whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead._id}
                className="border-b border-[#F3F4F6]"
              >
                <td className="px-5 py-4 text-sm whitespace-nowrap">
                  {lead.contactPersonName}
                </td>

                <td className="px-5 py-4 text-sm whitespace-nowrap">
                  {lead.companyName}
                </td>

                <td className="px-5 py-4 text-sm whitespace-nowrap">
                  {lead.leadSource || "-"}
                </td>

                <td className="px-5 py-4 text-sm whitespace-nowrap">
                  {lead.leadOwner || "-"}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                      lead.status === "New"
                        ? "bg-[#EEF4FF] text-[#2563EB]"
                        : "bg-[#DDF7E8] text-[#27AE60]"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm whitespace-nowrap">
                  {lead.status === "New"
                    ? "Contact"
                    : "Follow Up"}
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() =>
                      onViewDetails(lead)
                    }
                    className="bg-[#071B3B] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}