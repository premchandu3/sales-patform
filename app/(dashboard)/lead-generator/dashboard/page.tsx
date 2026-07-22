"use client";

import { useEffect, useState } from "react";

import Welcome from "@/components/lead-generator/dashboard/Welcome";
import Stats from "@/components/lead-generator/dashboard/Stats";
import QuickActions from "@/components/lead-generator/dashboard/QuickActions";
import RecentLeads from "@/components/lead-generator/dashboard/RecentLeads";
import Activity from "@/components/lead-generator/dashboard/Activity";
import LeadDetailsModal from "@/components/lead-generator/dashboard/LeadDetailsModal";
import { leadService } from "@/services/lead.service";

type Lead = {
  createdAt: string;
};

export default function DashboardPage() {
  const [totalLeads, setTotalLeads] = useState(0);
  const [dailyLeads, setDailyLeads] = useState(0);
  const [monthlyLeads, setMonthlyLeads] = useState(0);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const leads = await leadService.getLeads();

        const today = new Date();

        setTotalLeads(leads.length);

        const dailyCount = leads.filter((lead: Lead) => {
          const created = new Date(lead.createdAt);

          return (
            created.getDate() === today.getDate() &&
            created.getMonth() === today.getMonth() &&
            created.getFullYear() === today.getFullYear()
          );
        }).length;

        setDailyLeads(dailyCount);

        const monthlyCount = leads.filter((lead: Lead) => {
          const created = new Date(lead.createdAt);

          return (
            created.getMonth() === today.getMonth() &&
            created.getFullYear() === today.getFullYear()
          );
        }).length;

        setMonthlyLeads(monthlyCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="space-y-8">
      <Welcome />

      <Stats
        totalLeads={totalLeads}
        dailyLeads={dailyLeads}
        monthlyLeads={monthlyLeads}
      />

      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentLeads
            onViewLead={(lead) => {
              setSelectedLead(lead);
              setIsModalOpen(true);
            }}
          />
        </div>

        <div>
          <Activity />
        </div>
      </div>
      <LeadDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEdit={() => { }}
        onCreateFollowUp={() => { }}
        lead={selectedLead}
      />
    </div>
  );
}