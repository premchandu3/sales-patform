import { User } from "@/mock/users";

interface UserStatsProps {
  users: User[];
}

export default function UserStats({
  users,
}: UserStatsProps) {
  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const invitedUsers = users.filter(
    (user) => user.status === "Invited"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white border rounded-xl p-5">
        <h4>Total Users</h4>
        <p className="text-3xl font-bold mt-2">
          {totalUsers}
        </p>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <h4>Active Users</h4>
        <p className="text-3xl font-bold mt-2">
          {activeUsers}
        </p>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <h4>Invited Users</h4>
        <p className="text-3xl font-bold mt-2">
          {invitedUsers}
        </p>
      </div>

      <div className="bg-white border rounded-xl p-5">
        <h4>Inactive Users</h4>
        <p className="text-3xl font-bold mt-2">
          {inactiveUsers}
        </p>
      </div>
    </div>
  );
}