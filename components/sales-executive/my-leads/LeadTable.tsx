"use client";

import { useEffect, useState } from "react";
import LeadDetailsDrawer from "./LeadDetailsDrawer";

interface Lead {
  _id: string;
  companyName: string;
  contactPersonName: string;
  leadSource: string;
  status: string;
  createdAt?: string;
}

interface LeadTableProps {
  search: string;
  source: string;
  status: string;
  date: string;
}

export default function LeadTable({
  search,
  source,
  status,
  date,
}: LeadTableProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  const [isDrawerOpen, setIsDrawerOpen] =
    useState(false);

  useEffect(() => {
    const loadLeads = async () => {
      try {
        const response =
          await fetch("/api/leads");

        const data =
          await response.json();

        setLeads(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadLeads();
  }, []);

  const filteredLeads = leads.filter(
    (lead) => {
      const searchMatch =
        lead.companyName
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        lead.contactPersonName
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const sourceMatch =
        source === "" ||
        lead.leadSource === source;

      const statusMatch =
        status === "" ||
        lead.status === status;

      const leadDate = (
        lead.createdAt || ""
      )
        .toString()
        .split("T")[0];

      const dateMatch =
        date === "" ||
        leadDate === date;

      return (
        searchMatch &&
        sourceMatch &&
        statusMatch &&
        dateMatch
      );
    }
  );

  if (loading) {
    return (
      <div className="bg-white rounded-xl border p-6">
        Loading Leads...
      </div>
    );
  }

  return (
    <>
      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#EAF2FF]">
            <tr>
              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Company
              </th>

              <th className="px-6 py-4 text-left">
                Source
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Date
              </th>

              <th className="px-6 py-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead._id}
                className="border-b border-[#E5E7EB]"
              >
                <td className="px-6 py-5 text-sm">
                  {lead.contactPersonName}
                </td>

                <td className="px-6 py-5 text-sm">
                  {lead.companyName}
                </td>

                <td className="px-6 py-5 text-sm">
                  {lead.leadSource}
                </td>

                <td className="px-6 py-5 text-sm">
                  {lead.status}
                </td>

                <td className="px-6 py-5 text-sm">
                  {lead.createdAt
                    ? new Date(
                        lead.createdAt
                      ).toLocaleDateString(
                        "en-GB"
                      )
                    : "-"}
                </td>

                <td className="px-6 py-5 text-right">
                  <button
                    onClick={() => {
                      setSelectedLead(
                        lead
                      );
                      setIsDrawerOpen(
                        true
                      );
                    }}
                    className="bg-[#071B3B] hover:bg-[#0A2955] text-white text-[13px] font-medium px-5 py-2 rounded-[8px] transition"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredLeads.length ===
          0 && (
          <div className="text-center py-10 text-gray-500">
            No Leads Found
          </div>
        )}
      </div>

      <LeadDetailsDrawer
        isOpen={isDrawerOpen}
        onClose={() =>
          setIsDrawerOpen(false)
        }
        lead={selectedLead}
      />
    </>
  );
}