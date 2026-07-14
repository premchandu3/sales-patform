const leads = [
  {
    id: 1,
    name: "John Smith",
    company: "Acme Technologies",
    source: "Manual",
    date: "12 Jul 2026",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    company: "TechNova",
    source: "Card AI",
    date: "11 Jul 2026",
  },
  {
    id: 3,
    name: "David Brown",
    company: "Growth Labs",
    source: "Manual",
    date: "10 Jul 2026",
  },
];

export default function RecentLeads() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[#071B3B]">
          Recent Leads
        </h2>

        <button className="text-sm font-medium text-[#071B3B]">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E7EB]">
              <th className="text-left py-3 text-sm text-[#6B7280] font-medium">
                Name
              </th>

              <th className="text-left py-3 text-sm text-[#6B7280] font-medium">
                Company
              </th>

              <th className="text-left py-3 text-sm text-[#6B7280] font-medium">
                Source
              </th>

              <th className="text-left py-3 text-sm text-[#6B7280] font-medium">
                Date
              </th>

              <th className="text-right py-3 text-sm text-[#6B7280] font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-[#F3F4F6]"
              >
                <td className="py-4 text-sm">
                  {lead.name}
                </td>

                <td className="py-4 text-sm">
                  {lead.company}
                </td>

                <td className="py-4 text-sm">
                  {lead.source}
                </td>

                <td className="py-4 text-sm">
                  {lead.date}
                </td>

                <td className="py-4 text-right">
                  <button className="text-[#071B3B] font-medium text-sm">
                    View
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