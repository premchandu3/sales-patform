interface LeadFiltersProps {
  search: string;
  status: string;
  onSearchChange: (
    value: string
  ) => void;
  onStatusChange: (
    value: string
  ) => void;
  onAddLead: () => void;
}

export default function LeadFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onAddLead,
}: LeadFiltersProps) {
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
          placeholder="Search lead..."
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

          <option value="New">
            New
          </option>

          <option value="Contacted">
            Contacted
          </option>

          <option value="Qualified">
            Qualified
          </option>

          <option value="Lost">
            Lost
          </option>
        </select>
      </div>

      <button
        onClick={onAddLead}
        className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
      >
        Add Lead
      </button>
    </div>
  );
}