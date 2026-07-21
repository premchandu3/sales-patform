type LeadFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  owner: string;
  setOwner: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
};

export default function LeadFilters({
  search,
  setSearch,
  owner,
  setOwner,
  status,
  setStatus,
}: LeadFiltersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
      <div>
        <label className="block text-sm md:text-base font-medium text-[#374151] mb-2">
          Search Leads
        </label>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#374151] mb-2">
          Filter By Lead Owner
        </label>

        <select
          value={owner}
          onChange={(e) =>
            setOwner(e.target.value)
          }
          className="w-full h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
        >
          <option>All</option>
          <option>Varshini</option>
          <option>Sajaa</option>
          <option>Ayasath</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#374151] mb-2">
          Filter By Status
        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm"
        >
          <option>All</option>
          <option>New</option>
          <option>Contacted</option>
        </select>
      </div>
    </div>
  );
}