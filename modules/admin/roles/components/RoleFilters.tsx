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
    <div className="flex justify-between items-end">
      <div className="flex gap-4">

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
            className="w-[220px] border border-[#E5E7EB] rounded-md px-3 py-2 text-sm"
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
            className="w-[140px] border border-[#E5E7EB] rounded-md px-3 py-2 text-sm"
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
        className="bg-[#071B3B] text-white px-5 py-2 rounded-md text-sm"
      >
        + Add Role
      </button>
    </div>
  );
}