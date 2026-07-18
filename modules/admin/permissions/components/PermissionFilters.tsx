import Image from "next/image";

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
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">

        <div>
          <label className="block mb-2 text-[#64748B] text-[12px] font-medium">
            Search Permission
          </label>

          <input
            value={search}
            onChange={(e) =>
              onSearchChange(
                e.target.value
              )
            }
            placeholder="Search..."
            className="
              w-full
              h-[36px]
              border
              border-[#E2E8F0]
              rounded-lg
              px-3
              text-[13px]
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
              onStatusChange(
                e.target.value
              )
            }
            className="
              w-full
              h-[36px]
              border
              border-[#E2E8F0]
              rounded-lg
              px-3
              text-[13px]
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
              onRoleChange(
                e.target.value
              )
            }
            className="
              w-full
              h-[40px]
              border
              border-[#E2E8F0]
              rounded-md
              px-3
              text-sm
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
        h-[36px]
        px-4
        rounded-lg
        flex
        items-center
        justify-center
        gap-2
        whitespace-nowrap
        font-medium
        text-[13px]
        w-full
        lg:w-auto
        hover:bg-[#0D274D]
        transition-colors
      "
      >
        <Image
          src="/icons/addpermission.svg"
          alt="Add Permission"
          width={16}
          height={16}
        />

        <span>Add Permission</span>
      </button>

    </div>
  );
}
