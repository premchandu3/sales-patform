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
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <input
          value={search}
          onChange={(e) =>
            onSearchChange(
              e.target.value
            )
          }
          placeholder="Search role..."
          className="border rounded-lg px-4 py-2"
        />

        <select
          value={status}
          onChange={(e) =>
            onStatusChange(
              e.target.value
            )
          }
          className="border rounded-lg px-4 py-2"
        >
          <option value="">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>
        </select>
      </div>

      <button
        onClick={onAddRole}
        className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
      >
        Add Role
      </button>
    </div>
  );
}