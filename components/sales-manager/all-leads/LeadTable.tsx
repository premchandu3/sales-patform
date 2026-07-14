type Lead = {
  id: number;
  name: string;
  company: string;
  source: string;
  owner: string;
  status: string;
  nextStep: string;
};

type LeadTableProps = {
  onViewDetails: () => void;
};

const leads: Lead[] = [
  {
    id: 1,
    name: "Rohan Mehta",
    company: "Acme Corp",
    source: "LinkedIn",
    owner: "Varshini",
    status: "New",
    nextStep: "Contact",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "TechSolutions",
    source: "Website",
    owner: "Sajaa",
    status: "New",
    nextStep: "Contact",
  },
  {
    id: 3,
    name: "Amit Verma",
    company: "Verma Industries",
    source: "Card AI",
    owner: "Ayasath",
    status: "New",
    nextStep: "Contact",
  },
  {
    id: 4,
    name: "Rohan Mehta",
    company: "abc solutions",
    source: "LinkedIn",
    owner: "Varshini",
    status: "Contacted",
    nextStep: "Follow up",
  },
  {
    id: 5,
    name: "Rohan Mehta",
    company: "rk industries",
    source: "Website",
    owner: "Sajaa",
    status: "Contacted",
    nextStep: "Discovery Call",
  },
  {
    id: 6,
    name: "Rohan Mehta",
    company: "pk technologies",
    source: "Card AI",
    owner: "Ayasath",
    status: "Contacted",
    nextStep: "Follow up",
  },
];

export default function LeadTable({
  onViewDetails,
}: LeadTableProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#DDE7F5]">
              <th className="px-5 py-4 text-left text-sm font-semibold">
                Name
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Company
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Source
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Lead Owner
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Next Step
              </th>

              <th className="px-5 py-4 text-right text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-[#F3F4F6]"
              >
                <td className="px-5 py-4 text-sm">
                  {lead.name}
                </td>

                <td className="px-5 py-4 text-sm">
                  {lead.company}
                </td>

                <td className="px-5 py-4 text-sm">
                  {lead.source}
                </td>

                <td className="px-5 py-4 text-sm">
                  {lead.owner}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      lead.status === "New"
                        ? "bg-[#EEF4FF] text-[#2563EB]"
                        : "bg-[#DDF7E8] text-[#27AE60]"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm">
                  {lead.nextStep}
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    onClick={onViewDetails}
                    className="bg-[#071B3B] text-white px-4 py-2 rounded-lg text-sm"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}