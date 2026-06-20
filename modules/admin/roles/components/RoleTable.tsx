import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";

import { Role } from "@/mock/roles";

interface RoleTableProps {
  roles: Role[];
  onViewDetails: (role: Role) => void;
  onEditRole: (role: Role) => void;
  onDeleteRole: (role: Role) => void;
}

export default function RoleTable({
  roles,
  onViewDetails,
  onEditRole,
  onDeleteRole,
}: RoleTableProps) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              Role
            </th>

            <th className="p-4 text-left">
              Description
            </th>

            <th className="p-4 text-left">
              Users
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {roles.map((role) => (
            <tr
              key={role.id}
              className="border-b"
            >
              <td className="p-4">
                {role.name}
              </td>

              <td className="p-4">
                {role.description}
              </td>

              <td className="p-4">
                {role.users}
              </td>

              <td className="p-4">
                <StatusBadge
                  status={role.status}
                />
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <Button
                    onClick={() =>
                      onViewDetails(role)
                    }
                  >
                    View Details
                  </Button>

                  <Button
                    className="bg-yellow-500"
                    onClick={() =>
                      onEditRole(role)
                    }
                  >
                    Edit
                  </Button>

                  <Button
                    className="bg-red-600"
                    onClick={() =>
                      onDeleteRole(role)
                    }
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}