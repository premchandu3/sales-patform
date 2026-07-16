"use client";

import { useEffect, useState } from "react";

import LeadDetailsDrawer from "./LeadDetailsDrawer";

interface Lead {
  _id: string;
  companyName: string;
  contactPersonName: string;
  leadSource: string;
  leadOwner?: string;
  status?: string;
  nextAction?: string;
  email?: string;
  phoneNumber?: string;
  createdAt?: string;
  addedDate?: string;
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
  const [leads, setLeads] =
    useState<Lead[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  const [isDrawerOpen, setIsDrawerOpen] =
    useState(false);

  useEffect(() => {
    const fetchLeads = async () => {
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

    fetchLeads();
  }, []);

  const handleViewLead = (
    lead: Lead
  ) => {
    setSelectedLead(lead);
    setIsDrawerOpen(true);
  };

  const filteredLeads =
    leads.filter((lead) => {
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
          ) ||
        lead.email
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        lead.phoneNumber
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const sourceMatch =
        source === "" ||
        lead.leadSource === source;

      const statusMatch =
        status === "" ||
        status === "All" ||
        lead.status === status;

      const leadDate = (
        lead.createdAt ||
        lead.addedDate ||
        ""
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
    });

  if (loading) {
    return (
      <div className="bg-white border rounded-xl p-6">
        Loading Leads...
      </div>
    );
  }

  return (
    <>
      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="bg-[#EAF1FB]">

                <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                  Name
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                  Company
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                  Source
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                  Lead Owner
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                  Status
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                  Next Step
                </th>

                <th className="px-5 py-4 text-right text-sm font-medium text-[#071B3B]">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredLeads.map(
                (lead) => (
                  <tr
                    key={lead._id}
                    className="border-b border-[#F3F4F6]"
                  >

                    <td className="px-5 py-4 text-sm">
                      {
                        lead.contactPersonName
                      }
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {
                        lead.companyName
                      }
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {
                        lead.leadSource
                      }
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {lead.leadOwner ||
                        "-"}
                    </td>

                    <td className="px-5 py-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                        {lead.status ||
                          "New"}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {lead.nextAction ||
                        "-"}
                    </td>

                    <td className="px-5 py-4 text-right">

                      <button
                        onClick={() =>
                          handleViewLead(
                            lead
                          )
                        }
                        className="bg-[#071B3B] text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-[#0B2550]"
                      >
                        View Details
                      </button>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

          {filteredLeads.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No Leads Found
            </div>
          )}

        </div>

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