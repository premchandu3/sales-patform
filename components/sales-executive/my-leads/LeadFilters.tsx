type LeadFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  owner: string;
  setOwner: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
};

export default function LeadFilters({
  search,
  setSearch,
  owner,
  setOwner,
  date,
  setDate,
}: LeadFiltersProps) {
  return (
    <div className="border-t border-[#E5E7EB] pt-8">
      <div className="flex items-end justify-between gap-6">
        <div className="flex gap-6">
          <div>
            <label className="block text-sm text-[#374151] mb-2">
              Search Leads
            </label>

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[250px] h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm text-[#374151] mb-2">
              Filter By Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-[170px] h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#071B3B] text-white px-5 h-11 rounded-lg font-medium">
            Upload Card
          </button>

          <button className="bg-[#071B3B] text-white px-5 h-11 rounded-lg font-medium">
            Add Lead
          </button>
        </div>
      </div>
    </div>
  );
}