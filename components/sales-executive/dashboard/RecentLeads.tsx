"use client";

import { useEffect, useState } from "react";
import LeadDetailsDrawer from "@/components/sales-executive/all-leads/LeadDetailsDrawer";

type Lead = {
  _id: string;
  contactPersonName: string;
  companyName: string;
  leadSource: string;
  createdAt: string;
};

export default function RecentLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("/api/leads");
        const data = await response.json();

        setLeads(data.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <>
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <h2 className="text-lg font-semibold text-[#071B3B]">
            Recent Leads
          </h2>

          <button className="text-sm font-medium text-[#071B3B] self-start sm:self-auto">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB]">
                <th className="text-left py-3 px-2 text-sm text-[#6B7280] font-medium whitespace-nowrap">
                  Name
                </th>

                <th className="text-left py-3 px-2 text-sm text-[#6B7280] font-medium whitespace-nowrap">
                  Company
                </th>

                <th className="text-left py-3 px-2 text-sm text-[#6B7280] font-medium whitespace-nowrap">
                  Source
                </th>

                <th className="text-left py-3 px-2 text-sm text-[#6B7280] font-medium whitespace-nowrap">
                  Date
                </th>

                <th className="text-left py-3 px-2 text-sm text-[#6B7280] font-medium whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-b border-[#F3F4F6]"
                >
                  <td className="py-4 px-2 text-sm whitespace-nowrap">
                    {lead.contactPersonName}
                  </td>

                  <td className="py-4 px-2 text-sm whitespace-nowrap">
                    {lead.companyName}
                  </td>

                  <td className="py-4 px-2 text-sm whitespace-nowrap">
                    {lead.leadSource}
                  </td>

                  <td className="py-4 px-2 text-sm whitespace-nowrap">
                    {new Date(
                      lead.createdAt
                    ).toLocaleDateString("en-GB")}
                  </td>

                  <td className="py-4 text-right">
                    <button
                      onClick={() => {
                        setSelectedLead(lead);
                        setIsDrawerOpen(true);
                      }}
                      className="bg-[#071B3B] hover:bg-[#0A2955] text-white text-sm font-medium px-3 md:px-4 py-2 rounded-lg transition whitespace-nowrap"
                    >
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
                    No Leads Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <LeadDetailsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        lead={selectedLead}
      />
    </>
  );
}