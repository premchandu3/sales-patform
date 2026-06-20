import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";

import { Permission } from "@/mock/permissions";

interface PermissionTableProps {
  permissions: Permission[];

  onViewDetails: (
    permission: Permission
  ) => void;

  onEditPermission: (
    permission: Permission
  ) => void;

  onDeletePermission: (
    permission: Permission
  ) => void;
}

export default function PermissionTable({
  permissions,
  onViewDetails,
  onEditPermission,
  onDeletePermission,
}: PermissionTableProps) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              Permission
            </th>

            <th className="p-4 text-left">
              Description
            </th>

            <th className="p-4 text-left">
              Used In
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
          {permissions.length > 0 ? (
            permissions.map(
              (permission) => (
                <tr
                  key={permission.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {permission.name}
                  </td>

                  <td className="p-4">
                    {permission.description}
                  </td>

                  <td className="p-4">
                    {permission.usedIn}
                  </td>

                  <td className="p-4">
                    <StatusBadge
                      status={
                        permission.status
                      }
                    />
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button
                        onClick={() =>
                          onViewDetails(
                            permission
                          )
                        }
                      >
                        View
                      </Button>

                      <button
                        onClick={() =>
                          onEditPermission(
                            permission
                          )
                        }
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          onDeletePermission(
                            permission
                          )
                        }
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td
                colSpan={5}
                className="text-center py-8 text-gray-500"
              >
                No permissions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}