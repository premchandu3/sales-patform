"use client";

import { useEffect, useState } from "react";
import LeadDetailsDrawer from "./LeadDetailsDrawer";
import EditLeadModal from "./EditLeadModal";
import CreateFollowUpModal from "./CreateFollowUpModal";

interface Lead {
  _id: string;
  companyName: string;
  contactPersonName: string;
  leadSource: string;
  status: string;
  email?: string;
  phoneNumber?: string;
  industryCategory?: string;
  location?: string;
  website?: string;
  strength?: string;
  weakness?: string;
  opportunity?: string;
  createdAt?: string;
  addedDate?: string;
}

interface LeadsTableProps {
  search: string;
  source: string;
  status: string;
  date: string;
}

export default function LeadsTable({
  search,
  source,
  status,
  date,
}: LeadsTableProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isFollowUpOpen, setIsFollowUpOpen] = useState(false);

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/leads");
      const data = await response.json();

      setLeads(data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  const loadLeads = async () => {
    try {
      const response = await fetch("/api/leads");
      const data = await response.json();

      setLeads(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  loadLeads();
}, []);

  const handleViewLead = (lead: Lead) => {
    setSelectedLead(lead);
    setIsDrawerOpen(true);
  };

  const filteredLeads = leads.filter((lead) => {
    const searchMatch =
      lead.companyName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.contactPersonName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.email
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      lead.phoneNumber
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const sourceMatch =
      source === "" ||
      lead.leadSource === source;

    const statusMatch =
      status === "" ||
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
      <div className="bg-white rounded-2xl border p-6">
        Loading Leads...
      </div>
    );
  }

return (
  <>
    <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#EAF2FF]">
          <tr>
            <th className="text-left px-6 py-4 font-semibold text-[#111827]">
              Name
            </th>

            <th className="text-left px-6 py-4 font-semibold text-[#111827]">
              Company
            </th>

            <th className="text-left px-6 py-4 font-semibold text-[#111827]">
              Source
            </th>

            <th className="text-left px-6 py-4 font-semibold text-[#111827]">
              Date
            </th>

            <th className="text-left px-6 py-4 font-semibold text-[#111827]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredLeads.map((lead) => (
            <tr
              key={lead._id}
              className="border-b border-[#E5E7EB] last:border-none"
            >
              <td className="px-6 py-5 text-sm">
                {lead.contactPersonName || "-"}
              </td>

              <td className="px-6 py-5 text-sm">
                {lead.companyName || "-"}
              </td>

              <td className="px-6 py-5 text-sm">
                {lead.leadSource || "-"}
              </td>

              <td className="px-6 py-5 text-sm">
                {lead.createdAt
                  ? new Date(
                      lead.createdAt
                    ).toLocaleDateString()
                  : "-"}
              </td>

              <td className="px-6 py-5">
                <button
                  onClick={() =>
                    handleViewLead(lead)
                  }
                  className="bg-[#071B3B] hover:bg-[#0A2955] text-white text-sm px-5 py-2 rounded-lg transition"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredLeads.length === 0 && (
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
      onEdit={() => {
        setIsDrawerOpen(false);
        setIsEditOpen(true);
      }}
      onCreateFollowUp={() => {
        setIsDrawerOpen(false);
        setIsFollowUpOpen(true);
      }}
      lead={selectedLead}
    />

    <EditLeadModal
      isOpen={isEditOpen}
      onClose={() =>
        setIsEditOpen(false)
      }
      lead={selectedLead}
      onUpdated={fetchLeads}
    />

    <CreateFollowUpModal
      isOpen={isFollowUpOpen}
      onClose={() =>
        setIsFollowUpOpen(false)
      }
      leadId={selectedLead?._id || ""}
      onCreated={() => {
        console.log(
          "Follow Up Created"
        );
      }}
    />
  </>
);}