"use client";

import { useEffect, useState } from "react";

import Welcome from "@/components/sales-executive/dashboard/Welcome";
import Stats from "@/components/sales-executive/dashboard/Stats";
import QuickActions from "@/components/sales-executive/dashboard/QuickActions";
import RecentLeads from "@/components/sales-executive/dashboard/RecentLeads";
import Activity from "@/components/sales-executive/dashboard/Activity";

export default function DashboardPage() {
  const [totalLeads, setTotalLeads] = useState(0);
  const [assignedLeads, setAssignedLeads] = useState(0);
  const [followUps, setFollowUps] = useState(0);
  const [discoveryCalls, setDiscoveryCalls] = useState(0);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const leadsRes = await fetch("/api/leads");
        const leads = await leadsRes.json();

        const followUpsRes = await fetch("/api/followups");
        const followups = await followUpsRes.json();

        setTotalLeads(leads.length);

        setAssignedLeads(leads.length);

        setFollowUps(followups.length);

        setDiscoveryCalls(0);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div className="space-y-6">
      <Welcome />

      <Stats
        totalLeads={totalLeads}
        assignedLeads={assignedLeads}
        followUps={followUps}
        discoveryCalls={discoveryCalls}
      />

      <QuickActions />

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <RecentLeads />
        </div>

        <Activity />
      </div>
    </div>
  );
}