import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";

import { Role } from "@/types/role";

interface RoleTableProps {
  roles: Role[];
  onViewDetails: (role: Role) => void;
  onEditRole: (role: Role) => void;
  onDeleteRole: (role: Role) => void;
}

export default function RoleTable({
  roles,
  onViewDetails,
}: RoleTableProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <table className="w-full">

        <thead className="bg-[#EEF3FB]">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">
              Role
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Description
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Users
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {roles.map((role) => (
            <tr
              key={role._id}
              className="border-t border-[#E5E7EB]"
            >
              <td className="px-6 py-4">
                {role.name}
              </td>

              <td className="px-6 py-4 text-gray-600 max-w-[300px]">
                {role.description}
              </td>

             <td className="px-6 py-4">
                {role.users || 0}
                </td>

              <td className="px-6 py-4">
                <StatusBadge
                  status={role.status}
                />
              </td>

              <td className="px-6 py-4">
                <Button
                  onClick={() =>
                    onViewDetails(role)
                  }
                  className="bg-[#071B3B]"
                >
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}