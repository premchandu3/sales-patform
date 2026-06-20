import StatCard from "@/components/ui/StatCard";
import { Permission } from "@/mock/permissions";

interface PermissionStatsProps {
  permissions: Permission[];
}

export default function PermissionStats({
  permissions,
}: PermissionStatsProps) {
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatCard
        title="Total Permissions"
        value={permissions.length}
        subtitle="System permissions"
      />

      <StatCard
        title="Active Permissions"
        value={
          permissions.filter(
            (p) => p.status === "Active"
          ).length
        }
        subtitle="Currently active"
      />

      <StatCard
        title="Inactive Permissions"
        value={
          permissions.filter(
            (p) => p.status === "Inactive"
          ).length
        }
        subtitle="Currently inactive"
      />

      <StatCard
        title="Used Roles"
        value="3"
        subtitle="Roles assigned"
      />
    </div>
  );
}