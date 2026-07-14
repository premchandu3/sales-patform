import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface LeadFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  onAddLead: () => void;
}

export default function LeadFilters({
  search,
  setSearch,
  status,
  setStatus,
  onAddLead,
}: LeadFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow md:flex-row md:items-center md:justify-between">

      <div className="flex flex-1 flex-col gap-4 md:flex-row">

        <Input
          placeholder="Search by name or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2"
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Proposal Sent">Proposal Sent</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </select>

      </div>

      <Button onClick={onAddLead}>
        Add Lead
      </Button>

    </div>
  );
}