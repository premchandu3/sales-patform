"use client";

import { useState } from "react";

import {
  Lead,
  initialLeads,
} from "@/mock/leads";

import LeadStats from "@/modules/admin/leads/components/LeadStats";
import LeadFilters from "@/modules/admin/leads/components/LeadFilters";
import LeadTable from "@/modules/admin/leads/components/LeadTable";
import AddLeadModal from "@/modules/admin/leads/components/AddLeadModal";
import LeadDetailsModal from "@/modules/admin/leads/components/LeadDetailsModal";

export default function LeadsPage() {
  const [leads, setLeads] =
    useState<Lead[]>(initialLeads);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("");

  const [isAddOpen, setIsAddOpen] =
    useState(false);

  const [
    isDetailsOpen,
    setIsDetailsOpen,
  ] = useState(false);

  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  const [editingLead, setEditingLead] =
    useState<Lead | null>(null);

  const filteredLeads = leads.filter(
    (lead) => {
      const matchesSearch =
        lead.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        lead.company
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        !statusFilter ||
        lead.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    }
  );

  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold">
        Leads
      </h1>

      <LeadStats leads={leads} />

      <LeadFilters
        search={search}
        status={statusFilter}
        onSearchChange={setSearch}
        onStatusChange={
          setStatusFilter
        }
        onAddLead={() => {
          setEditingLead(null);
          setIsAddOpen(true);
        }}
      />

      <LeadTable
        leads={filteredLeads}
        onViewDetails={(lead) => {
          setSelectedLead(lead);
          setIsDetailsOpen(true);
        }}
        onEditLead={(lead) => {
          setEditingLead(lead);
          setIsAddOpen(true);
        }}
        onDeleteLead={(lead) => {
          const confirmed =
            window.confirm(
              `Delete ${lead.name}?`
            );

          if (!confirmed) return;

          setLeads((prev) =>
            prev.filter(
              (l) => l.id !== lead.id
            )
          );
        }}
      />

      <AddLeadModal
        isOpen={isAddOpen}
        onClose={() => {
          setEditingLead(null);
          setIsAddOpen(false);
        }}
        editingLead={editingLead}
        onAddLead={(newLead) => {
          if (editingLead) {
            setLeads((prev) =>
              prev.map((lead) =>
                lead.id ===
                editingLead.id
                  ? {
                      ...lead,
                      ...newLead,
                    }
                  : lead
              )
            );
          } else {
            setLeads((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                ...newLead,
              },
            ]);
          }

          setEditingLead(null);
          setIsAddOpen(false);
        }}
      />

      <LeadDetailsModal
        isOpen={isDetailsOpen}
        onClose={() =>
          setIsDetailsOpen(false)
        }
        lead={selectedLead}
      />
    </div>
  );
}