type TeamFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
};

export default function TeamFilters({
  search,
  setSearch,
  status,
  setStatus,
  role,
  setRole,
}: TeamFiltersProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        <div>
          <label className="block text-sm md:text-base font-medium text-[#374151] mb-2">
            Search Users
          </label>

          <input
            type="text"
            placeholder="Search by email or username..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 md:h-12 border border-[#D1D5DB] rounded-lg px-3 text-sm md:text-base"
          />
        </div>

        <div>
          <label className="block text-sm md:text-base font-medium text-[#374151] mb-2">
            Filter By Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full h-11 md:h-12 border border-[#D1D5DB] rounded-lg px-3 text-sm md:text-base"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Invited">Invited</option>
          </select>
        </div>

        <div>
          <label className="block text-sm md:text-base font-medium text-[#374151] mb-2">
            Filter By Role
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full h-11 md:h-12 border border-[#D1D5DB] rounded-lg px-3 text-sm md:text-base"
          >
            <option value="All">All</option>
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
    </div>
  );
}