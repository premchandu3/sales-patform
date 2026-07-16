"use client";

import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

type TeamTableProps = {
  search: string;
  status: string;
  role: string;
  onViewDetails: (user: User) => void;
};

export default function TeamTable({
  search,
  status,
  role,
  onViewDetails,
}: TeamTableProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" ||
      user.status === status;

    const matchesRole =
      role === "All" ||
      user.role === role;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesRole
    );
  });

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#DCE7F6]">
              <th className="px-5 py-5 text-left">
                Name
              </th>

              <th className="px-5 py-5 text-left">
                Email
              </th>

              <th className="px-5 py-5 text-left">
                Role
              </th>

              <th className="px-5 py-5 text-left">
                Status
              </th>

              <th className="px-5 py-5 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user._id}
                className="border-b border-[#EEF2F7]"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#DCE7F6] flex items-center justify-center font-semibold">
                      {user.name?.charAt(0)}
                    </div>

                    <div>
                      <p className="text-[14px] font-medium">
                        {user.name}
                      </p>

                      <p className="text-[10px] text-[#9CA3AF]">
                        Added on{" "}
                        {new Date(
                          user.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-[14px] text-[#6B7280]">
                  {user.email}
                </td>

                <td className="px-5 py-4">
                  <span className="px-3 py-1.5 rounded-full bg-[#DCE7F6] text-xs font-medium">
                    {user.role}
                  </span>
                </td>

                <td className="px-5 py-4">
                  {user.status === "Active" && (
                    <span className="px-3 py-1.5 rounded-full bg-[#DDF7E8] text-[#52C41A] text-xs font-medium">
                      ● Active
                    </span>
                  )}

                  {user.status === "Inactive" && (
                    <span className="px-3 py-1.5 rounded-full bg-[#FFE9E6] text-[#FF6B35] text-xs font-medium">
                      ● Inactive
                    </span>
                  )}

                  {user.status === "Invited" && (
                    <span className="px-3 py-1.5 rounded-full bg-[#FFF3CD] text-[#F5B301] text-xs font-medium">
                      ● Invited
                    </span>
                  )}
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() =>
                      onViewDetails(user)
                    }
                    className="bg-[#071B3B] text-white px-5 py-2 rounded-lg text-sm font-medium"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}