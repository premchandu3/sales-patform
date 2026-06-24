interface RoleFiltersProps {
  search: string;
  status: string;
  onSearchChange: (
    value: string
  ) => void;
  onStatusChange: (
    value: string
  ) => void;
  onAddRole: () => void;
}

export default function RoleFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onAddRole,
}: RoleFiltersProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-end">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

        <div>
          <label className="text-sm text-gray-500 block mb-1">
            Search Role
          </label>

          <input
            value={search}
            onChange={(e) =>
              onSearchChange(
                e.target.value
              )
            }
            placeholder="Search..."
            className="w-full border border-[#E5E7EB] rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500 block mb-1">
            Filter By Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              onStatusChange(
                e.target.value
              )
            }
            className="w-full border border-[#E5E7EB] rounded-md px-3 py-2 text-sm"
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
          </select>
        </div>

      </div>

      <button
        onClick={onAddRole}
        className="bg-[#071B3B] text-white px-5 py-2 rounded-md text-sm w-full lg:w-auto"
      >
        + Add Role
      </button>

    </div>
  );
}