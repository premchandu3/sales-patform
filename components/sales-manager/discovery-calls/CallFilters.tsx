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
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        <div>
          <label className="block text-sm md:text-base font-medium text-[#374151] mb-2">
            Search Leads
          </label>

          <input
            type="text"
            placeholder="Search..."
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
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm md:text-base font-medium text-[#374151] mb-2">
            Filter By Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-11 md:h-12 border border-[#D1D5DB] rounded-lg px-3 text-sm md:text-base"
          />
        </div>
      </div>
    </div>
  );
}