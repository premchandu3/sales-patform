import { Permission } from "@/types/permission";

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
}: PermissionTableProps) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md overflow-x-auto">

      <table className="w-full min-w-[1000px]">

        <thead className="bg-[#D9E3F0]">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Permission
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Description
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Used In Roles
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Status
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {permissions.length > 0 ? (
            permissions.map(
              (permission) => (
                <tr
                  key={permission._id}
                  className="border-t border-[#EDF2F7]"
                >
                  <td className="px-4 py-3 text-xs text-[#475569]">
                    {permission.name}
                  </td>

                  <td className="px-4 py-3 text-xs text-[#475569]">
                    {permission.description}
                  </td>

                  <td className="px-4 py-3 text-xs text-[#475569]">
                    {permission.roles.join(
                      ", "
                    )}
                  </td>

                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[11px]">
                      {permission.status}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        onViewDetails(
                          permission
                        )
                      }
                      className="
                        bg-[#071B3B]
                        text-white
                        px-3
                        py-1.5
                        rounded-md
                        text-[11px]
                      "
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td
                colSpan={5}
                className="
                  text-center
                  py-20
                  text-lg
                  text-slate-500
                "
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