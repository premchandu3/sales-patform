type CallFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
};

export default function CallFilters({
  search,
  setSearch,
  status,
  setStatus,
  date,
  setDate,
}: CallFiltersProps) {
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
            className="w-full h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
          />
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
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#374151] mb-2">
            Filter By Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
          />
        </div>
      </div>
    </div>
  );
}