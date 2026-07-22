"use client";

import { useEffect, useState } from "react";

import DashboardStats from "@/components/sales-manager/dashboard/DashboardStats";
import LeadsOverview from "@/components/sales-manager/dashboard/LeadsOverview";
import FollowUpDuesTable from "@/components/sales-manager/dashboard/FollowUpDuesTable";
import DiscoveryCallsTable from "@/components/sales-manager/dashboard/DiscoveryCallsTable";
import TeamTable from "@/components/sales-manager/dashboard/TeamTable";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function SalesManagerDashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="space-y-5 md:space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl md:text-[48px] font-bold text-[#071B3B]">
          Dashboard
        </h1>

        <p className="text-xs md:text-base text-[#6B7280]">
          Welcome Back {user?.name || "User"}!
        </p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6">
        <LeadsOverview />
        <FollowUpDuesTable />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-6">
        <DiscoveryCallsTable />
        <TeamTable />
      </div>
    </div>
  );
}