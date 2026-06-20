interface PermissionFiltersProps {
  search: string;
  status: string;
  onSearchChange: (
    value: string
  ) => void;
  onStatusChange: (
    value: string
  ) => void;
}

export default function PermissionFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: PermissionFiltersProps) {
  return (
    <div className="flex gap-4">
      <input
        value={search}
        onChange={(e) =>
          onSearchChange(
            e.target.value
          )
        }
        placeholder="Search permission..."
        className="border rounded-lg px-4 py-2 w-72"
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
  );
}