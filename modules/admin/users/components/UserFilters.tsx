interface UserFiltersProps {
  search: string;
  status: string;
  role: string;
  onSearchChange: (
    value: string
  ) => void;
  onStatusChange: (
    value: string
  ) => void;
  onRoleChange: (
    value: string
  ) => void;
  onAddUser: () => void;
}

export default function UserFilters({
  search,
  status,
  role,
  onSearchChange,
  onStatusChange,
  onRoleChange,
  onAddUser,
}: UserFiltersProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-end lg:justify-between">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">

        <div>
          <label className="block text-[14px] text-[#6B7280] mb-2">
            Search Users
          </label>

          <input
            value={search}
            onChange={(e) =>
              onSearchChange(
                e.target.value
              )
            }
            placeholder="Search by email, username"
            className="w-full h-[44px] border border-[#D1D5DB] rounded-lg px-4"
          />
        </div>

        <div>
          <label className="block text-[14px] text-[#6B7280] mb-2">
            Filter By Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              onStatusChange(
                e.target.value
              )
            }
            className="w-full h-[44px] border border-[#D1D5DB] rounded-lg px-4"
          >
            <option value="">
              All
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

            <option value="Invited">
              Invited
            </option>
          </select>
        </div>

        <div>
          <label className="block text-[14px] text-[#6B7280] mb-2">
            Filter By Role
          </label>

          <select
            value={role}
            onChange={(e) =>
              onRoleChange(
                e.target.value
              )
            }
            className="w-full h-[44px] border border-[#D1D5DB] rounded-lg px-4"
          >
            <option value="">
              All
            </option>

            <option value="Lead Generator">
              Lead Generator
            </option>

            <option value="Sales Executive">
              Sales Executive
            </option>

            <option value="Sales Manager">
              Sales Manager
            </option>
          </select>
        </div>

      </div>

      <button
        onClick={onAddUser}
        className="bg-[#071B3B] text-white h-[44px] px-8 rounded-lg font-medium w-full lg:w-auto"
      >
        + Add User
      </button>

    </div>
  );
}