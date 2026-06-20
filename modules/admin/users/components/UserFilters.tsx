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
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <input
          value={search}
          onChange={(e) =>
            onSearchChange(
              e.target.value
            )
          }
          placeholder="Search user..."
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

          <option value="Invited">
            Invited
          </option>
        </select>

        <select
          value={role}
          onChange={(e) =>
            onRoleChange(
              e.target.value
            )
          }
          className="border rounded-lg px-4 py-2"
        >
          <option value="">
            All Roles
          </option>

          <option value="Lead Generator">
            Lead Generator
          </option>

          <option value="Sales Executive">
            Sales Executive
          </option>

          <option value="Admin">
            Admin
          </option>
        </select>
      </div>

      <button
        onClick={onAddUser}
        className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
      >
        Add User
      </button>
    </div>
  );
}