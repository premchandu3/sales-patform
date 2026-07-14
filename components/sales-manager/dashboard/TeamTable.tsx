const team = [
  {
    member: "Sajaa",
    leads: 107,
    followUps: 107,
    calls: 10,
  },
  {
    member: "Varshini",
    leads: 300,
    followUps: 300,
    calls: 12,
  },
  {
    member: "Aysath",
    leads: 476,
    followUps: 476,
    calls: 25,
  },
  {
    member: "Pramod",
    leads: 2098,
    followUps: 2098,
    calls: 57,
  },
];

export default function TeamTable() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[20px] font-semibold">
          Team
        </h3>

        <button className="text-sm font-medium">
          View All →
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-[#DDE7F5]">
            <th className="px-3 py-3 text-left">
              Team Member
            </th>

            <th className="px-3 py-3 text-left">
              Leads
            </th>

            <th className="px-3 py-3 text-left">
              Follow Ups
            </th>

            <th className="px-3 py-3 text-left">
              Calls
            </th>
          </tr>
        </thead>

        <tbody>
          {team.map((item, index) => (
            <tr
              key={index}
              className="border-b"
            >
              <td className="px-3 py-4">
                {item.member}
              </td>

              <td className="px-3 py-4">
                {item.leads}
              </td>

              <td className="px-3 py-4">
                {item.followUps}
              </td>

              <td className="px-3 py-4">
                {item.calls}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}