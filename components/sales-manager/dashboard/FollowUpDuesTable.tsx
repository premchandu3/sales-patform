const followUps = [
  {
    lead: "Rahul K...",
    owner: "Varshini",
    priority: "High",
    date: "20 May, 2026",
  },
  {
    lead: "Rahul K...",
    owner: "Varshini",
    priority: "Medium",
    date: "20 May, 2026",
  },
  {
    lead: "Rahul K...",
    owner: "Sajaa",
    priority: "Medium",
    date: "20 May, 2026",
  },
  {
    lead: "Rahul K...",
    owner: "Varshini",
    priority: "Low",
    date: "20 May, 2026",
  },
];

export default function FollowUpDuesTable() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[20px] font-semibold">
          Follow Up dues
        </h3>

        <button className="text-sm font-medium">
          View All →
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-[#DDE7F5]">
            <th className="px-3 py-3 text-left">
              Lead
            </th>

            <th className="px-3 py-3 text-left">
              Lead Owner
            </th>

            <th className="px-3 py-3 text-left">
              Priority
            </th>

            <th className="px-3 py-3 text-left">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {followUps.map((item, index) => (
            <tr
              key={index}
              className="border-b"
            >
              <td className="px-3 py-4">
                {item.lead}
              </td>

              <td className="px-3 py-4">
                {item.owner}
              </td>

              <td className="px-3 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    item.priority === "High"
                      ? "bg-[#FFE8DE] text-[#E67E22]"
                      : item.priority === "Medium"
                      ? "bg-[#E8EEF9] text-[#5B6B8A]"
                      : "bg-[#DDF7E8] text-[#27AE60]"
                  }`}
                >
                  {item.priority}
                </span>
              </td>

              <td className="px-3 py-4">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}