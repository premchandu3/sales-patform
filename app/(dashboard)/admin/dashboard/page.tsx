import StatCard from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="15"
          subtitle="All active users"
        />

        <StatCard
          title="Total Roles"
          value="4"
          subtitle="System roles"
        />

        <StatCard
          title="Requests"
          value="3"
          subtitle="Requires attention"
        />

        <StatCard
          title="Active Today"
          value="8"
          subtitle="Logged in today"
        />
      </div>

      <div className="bg-white rounded-2xl border p-10">
        <h2 className="text-3xl font-bold mb-8">
          Quick Actions
        </h2>

        <div className="flex gap-8">
          <button className="border rounded-xl px-10 py-5 text-xl">
            Add Employee
          </button>

          <button className="border rounded-xl px-10 py-5 text-xl">
            Create Role
          </button>
        </div>
      </div>
    </div>
  );
}