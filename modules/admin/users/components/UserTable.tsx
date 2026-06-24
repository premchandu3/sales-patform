import StatusBadge from "@/components/ui/StatusBadge";
import { User } from "@/types/user";

interface UserTableProps {
  users: User[];
  onViewDetails: (user: User) => void;
  onEditUser: (user: User) => void;
  onDeleteUser: (user: User) => void;
}

export default function UserTable({
  users,
  onViewDetails,
}: UserTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-x-auto">

      <table className="w-full min-w-[900px]">

        <thead className="bg-[#EEF3FB]">
          <tr>
            <th className="px-6 py-4 text-left text-[15px] font-semibold">
              Name
            </th>

            <th className="px-6 py-4 text-left text-[15px] font-semibold">
              Email
            </th>

            <th className="px-6 py-4 text-left text-[15px] font-semibold">
              Role
            </th>

            <th className="px-6 py-4 text-left text-[15px] font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left text-[15px] font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-t border-[#E5E7EB]"
            >
              <td className="px-6 py-4">

                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-full bg-[#EEF3FB] flex items-center justify-center text-[#071B3B] text-sm font-semibold uppercase">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-[14px] font-medium text-[#111827]">
                      {user.name}
                    </p>

                    <p className="text-[10px] text-[#9CA3AF]">
                      Added on 20 Feb, 2026
                    </p>
                  </div>

                </div>

              </td>

              <td className="px-6 py-4 text-[14px] text-[#4B5563]">
                {user.email}
              </td>

              <td className="px-6 py-4">

                <span className="inline-flex items-center h-[26px] px-3 rounded-full bg-[#EEF3FB] text-[#071B3B] text-[12px] whitespace-nowrap">
                  {user.role}
                </span>

              </td>

              <td className="px-6 py-4">
                <StatusBadge status={user.status} />
              </td>

              <td className="px-6 py-4">

                <button
                  onClick={() =>
                    onViewDetails(user)
                  }
                  className="bg-[#071B3B] text-white h-[36px] px-4 rounded-lg text-[13px] font-medium hover:bg-[#0B2B5C]"
                >
                  View Details
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}