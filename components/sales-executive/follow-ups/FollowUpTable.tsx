type FollowUp = {
  id: number;
  name: string;
  company: string;
  type: string;
  date: string;
  status: string;
};

type FollowUpTableProps = {
  onViewDetails: () => void;
};

const followUps: FollowUp[] = [
  {
    id: 1,
    name: "Rohan Mehta",
    company: "Acme Corp",
    type: "Cold Call",
    date: "20 May, 2026",
    status: "Pending",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "TechSolutions",
    type: "Email",
    date: "20 May, 2026",
    status: "Pending",
  },
  {
    id: 3,
    name: "Amit Verma",
    company: "Verma Industries",
    type: "Email",
    date: "20 May, 2026",
    status: "Pending",
  },
  {
    id: 4,
    name: "Rohan Mehta",
    company: "abc solutions",
    type: "Cold Call",
    date: "20 May, 2026",
    status: "Pending",
  },
  {
    id: 5,
    name: "Rohan Mehta",
    company: "rk industries",
    type: "Cold Call",
    date: "20 May, 2026",
    status: "Completed",
  },
  {
    id: 6,
    name: "Rohan Mehta",
    company: "pk technologies",
    type: "Email",
    date: "20 May, 2026",
    status: "Completed",
  },
];

export default function FollowUpTable({
  onViewDetails,
}: FollowUpTableProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#D8E3F3]">
              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Name
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Company
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Follow Up Type
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Date
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Status
              </th>

              <th className="px-6 py-5 text-right text-[15px] font-semibold text-[#374151]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {followUps.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#EEF2F7] hover:bg-[#FAFBFD] transition"
              >
                <td className="px-6 py-5 text-sm text-[#374151]">
                  {item.name}
                </td>

                <td className="px-6 py-5 text-sm text-[#374151]">
                  {item.company}
                </td>

                <td className="px-6 py-5">
                  <span className="px-3 py-1.5 rounded-full text-xs bg-[#E8EEF9] text-[#5B6472]">
                    {item.type}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm text-[#6B7280]">
                  {item.date}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      item.status === "Pending"
                        ? "bg-[#FFF3CD] text-[#F5B301]"
                        : "bg-[#DDF7E8] text-[#52C41A]"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-right">
                  <button
                    onClick={onViewDetails}
                    className="bg-[#071B3B] text-white px-5 py-2.5 rounded-[10px] text-sm font-medium hover:bg-[#0A2550] transition"
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