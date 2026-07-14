type DiscoveryCall = {
  id: number;
  name: string;
  company: string;
  owner: string;
  meetingType: string;
  dateTime: string;
  status: string;
};

type CallTableProps = {
  onViewDetails: () => void;
};

const calls: DiscoveryCall[] = [
  {
    id: 1,
    name: "Rohan Mehta",
    company: "ACME Technologies",
    owner: "Varshini",
    meetingType: "Google Meet",
    dateTime: "20 Jul 2026, 4:00 PM",
    status: "Scheduled",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "TechNova",
    owner: "Rahul",
    meetingType: "Zoom",
    dateTime: "21 Jul 2026, 11:00 AM",
    status: "Completed",
  },
  {
    id: 3,
    name: "Amit Verma",
    company: "Growth Labs",
    owner: "Kiran",
    meetingType: "Google Meet",
    dateTime: "22 Jul 2026, 3:00 PM",
    status: "Scheduled",
  },
];

export default function CallTable({
  onViewDetails,
}: CallTableProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#D8E3F3]">
              <th className="px-6 py-5 text-left text-sm font-semibold">
                Name
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold">
                Company
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold">
                Lead Owner
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold">
                Meeting Type
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold">
                Date & Time
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-5 text-right text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {calls.map((call) => (
              <tr
                key={call.id}
                className="border-b border-[#EEF2F7] hover:bg-[#FAFBFD]"
              >
                <td className="px-6 py-5 text-sm">
                  {call.name}
                </td>

                <td className="px-6 py-5 text-sm">
                  {call.company}
                </td>

                <td className="px-6 py-5 text-sm">
                  {call.owner}
                </td>

                <td className="px-6 py-5">
                  <span className="px-3 py-1 rounded-full text-xs bg-[#E8EEF9] text-[#4B5563]">
                    {call.meetingType}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm">
                  {call.dateTime}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      call.status === "Scheduled"
                        ? "bg-[#FFF3CD] text-[#F5B301]"
                        : "bg-[#DDF7E8] text-[#52C41A]"
                    }`}
                  >
                    {call.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-right">
                  <button
                    onClick={onViewDetails}
                    className="bg-[#071B3B] text-white px-5 py-2.5 rounded-[10px] text-sm font-medium"
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