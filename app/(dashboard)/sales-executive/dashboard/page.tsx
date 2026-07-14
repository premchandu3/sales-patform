import Welcome from "@/components/sales-executive/dashboard/Welcome";
import Stats from "@/components/sales-executive/dashboard/Stats";
import QuickActions from "@/components/sales-executive/dashboard/QuickActions";
import RecentLeads from "@/components/sales-executive/dashboard/RecentLeads";
import Activity from "@/components/sales-executive/dashboard/Activity";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Welcome />

      <Stats />

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