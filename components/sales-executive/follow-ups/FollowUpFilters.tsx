type FollowUpFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
};

export default function FollowUpFilters({
  search,
  setSearch,
  type,
  setType,
  status,
  setStatus,
}: FollowUpFiltersProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Search Leads
          </label>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Filter By Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
          >
            <option value="All">All</option>
            <option value="Cold Call">Cold Call</option>
            <option value="Email">Email</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Filter By Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}