"use client";

import { useState } from "react";

import { Lead } from "@/types/lead";
import { initialLeads } from "@/mock/leads";

import LeadStats from "./components/LeadStats";
import LeadFilters from "./components/LeadFilters";
import LeadTable from "./components/LeadTable";
import AddLeadModal from "./components/AddLeadModal";
import LeadDetailsModal from "./components/LeadDetailsModal";

export default function AddLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || lead.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">

      <LeadStats leads={leads} />

      <LeadFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onAddLead={() => setIsAddModalOpen(true)}
      />

      <LeadTable
        leads={filteredLeads}
        onView={(lead) => setSelectedLead(lead)}
      />

      <AddLeadModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={(lead) => {
          setLeads([
            {
              ...lead,
              id: Date.now(),
            },
            ...leads,
          ]);

          setIsAddModalOpen(false);
        }}
      />

      <LeadDetailsModal
        lead={selectedLead}
        isOpen={!!selectedLead}
        onClose={() => setSelectedLead(null)}
      />

    </div>
  );
}





// "use client";

// export default function AddLeadsPage() {
//   return (
//     <div className="p-6">
//       <h1>Add Leads Page</h1>
//     </div>
//   );
// }