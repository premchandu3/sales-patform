import { Role } from "@/mock/roles";

interface RoleStatsProps {
  roles: Role[];
}

export default function RoleStats({
  roles,
}: RoleStatsProps) {
  const totalRoles = roles.length;

  const activeRoles = roles.filter(
    (role) => role.status === "Active"
  ).length;

  const inactiveRoles = roles.filter(
    (role) => role.status === "Inactive"
  ).length;

  const totalUsers = roles.reduce(
    (sum, role) => sum + role.users,
    0
  );

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white border rounded-xl p-5">
        <h4>Total Roles</h4>
        <p className="text-3xl font-bold mt-2">
          {totalRoles}
        </p>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <h4>Active Roles</h4>
        <p className="text-3xl font-bold mt-2">
          {activeRoles}
        </p>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <h4>Inactive Roles</h4>
        <p className="text-3xl font-bold mt-2">
          {inactiveRoles}
        </p>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <h4>Total Users</h4>
        <p className="text-3xl font-bold mt-2">
          {totalUsers}
        </p>
      </div>
    </div>
  );
}