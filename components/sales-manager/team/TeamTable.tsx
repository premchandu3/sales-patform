type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

type TeamTableProps = {
  onViewDetails: () => void;
};

const members: TeamMember[] = [
  {
    id: 1,
    name: "Varshini",
    email: "varshini@gmail.com",
    role: "Lead Generator",
    status: "Active",
  },
  {
    id: 2,
    name: "Sujay",
    email: "sujay@gmail.com",
    role: "Sales Executive",
    status: "Active",
  },
  {
    id: 3,
    name: "Aysath",
    email: "aysath@gmail.com",
    role: "Lead Generator",
    status: "Active",
  },
  {
    id: 4,
    name: "Malini",
    email: "malini@gmail.com",
    role: "Sales Executive",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Ritesh",
    email: "ritesh@gmail.com",
    role: "Sales Manager",
    status: "Active",
  },
  {
    id: 6,
    name: "Suman",
    email: "suman@gmail.com",
    role: "Lead Generator",
    status: "Invited",
  },
  {
    id: 7,
    name: "Kartik",
    email: "kartik@gmail.com",
    role: "Sales Manager",
    status: "Active",
  },
];

export default function TeamTable({
  onViewDetails,
}: TeamTableProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#DCE7F6]">
              <th className="px-5 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Name
              </th>

              <th className="px-5 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Email
              </th>

              <th className="px-5 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Role
              </th>

              <th className="px-5 py-5 text-left text-[15px] font-semibold text-[#374151]">
                Status
              </th>

              <th className="px-5 py-5 text-right text-[15px] font-semibold text-[#374151]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr
                key={member.id}
                className="border-b border-[#EEF2F7]"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#DCE7F6] flex items-center justify-center text-[#374151] font-semibold">
                      {member.name.charAt(0)}
                    </div>

                    <div>
                      <p className="text-[14px] font-medium text-[#374151]">
                        {member.name}
                      </p>

                      <p className="text-[10px] text-[#9CA3AF]">
                        Added on 20 Feb, 2026
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-[14px] text-[#6B7280]">
                  {member.email}
                </td>

                <td className="px-5 py-4">
                  <span className="px-3 py-1.5 rounded-full bg-[#DCE7F6] text-[#374151] text-xs font-medium">
                    {member.role}
                  </span>
                </td>

                <td className="px-5 py-4">
                  {member.status === "Active" && (
                    <span className="px-3 py-1.5 rounded-full bg-[#DDF7E8] text-[#52C41A] text-xs font-medium">
                      ● Active
                    </span>
                  )}

                  {member.status === "Inactive" && (
                    <span className="px-3 py-1.5 rounded-full bg-[#FFE9E6] text-[#FF6B35] text-xs font-medium">
                      ● Inactive
                    </span>
                  )}

                  {member.status === "Invited" && (
                    <span className="px-3 py-1.5 rounded-full bg-[#FFF3CD] text-[#F5B301] text-xs font-medium">
                      ● Invited
                    </span>
                  )}
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    onClick={onViewDetails}
                    className="bg-[#071B3B] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#0A2550]"
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