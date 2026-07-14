import DashboardStats from "@/components/sales-manager/dashboard/DashboardStats";
import LeadsOverview from "@/components/sales-manager/dashboard/LeadsOverview";
import FollowUpDuesTable from "@/components/sales-manager/dashboard/FollowUpDuesTable";
import DiscoveryCallsTable from "@/components/sales-manager/dashboard/DiscoveryCallsTable";
import TeamTable from "@/components/sales-manager/dashboard/TeamTable";

export default function SalesManagerDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[48px] font-bold text-[#071B3B]">
          Dashboard
        </h1>

        <p className="text-[#6B7280] mt-2">
          Welcome Back Catherine!
        </p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-2 gap-6">
        <LeadsOverview />
        <FollowUpDuesTable />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <DiscoveryCallsTable />
        <TeamTable />
      </div>
    </div>
  );
}