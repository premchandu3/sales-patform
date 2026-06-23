interface PermissionFiltersProps {
  search: string;
  status: string;
  role: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onAddPermission: () => void;
}

export default function PermissionFilters({
  search,
  status,
  role,
  onSearchChange,
  onStatusChange,
  onRoleChange,
  onAddPermission,
}: PermissionFiltersProps) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex gap-6">
        <div>
          <label className="block mb-2 text-[#64748B] text-sm font-medium">
            Search Permission
          </label>

          <input
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search..."
            className="
              w-[160px]
              h-[32px]
              border
              border-[#E2E8F0]
              rounded-md
              px-3
              text-xs
              outline-none
            "
          />
        </div>

        <div>
          <label className="block mb-2 text-[#64748B] text-sm font-medium">
            Filter By Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              onStatusChange(e.target.value)
            }
            className="
              w-[145px]
              h-[32px]
              border
              border-[#E2E8F0]
              rounded-md
              px-3
              text-xs
            "
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

        <div>
          <label className="block mb-2 text-[#64748B] text-sm font-medium">
            Filter By Role
          </label>

          <select
            value={role}
            onChange={(e) =>
              onRoleChange(e.target.value)
            }
            className="
              w-[145px]
              h-[32px]
              border
              border-[#E2E8F0]
              rounded-md
              px-3
              text-xs
            "
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
        onClick={onAddPermission}
        className="
          bg-[#071B3B]
          text-white
          h-[32px]
          px-5
          rounded-md
          text-xs
          font-medium
        "
      >
        Add Permission
      </button>
    </div>
  );
}