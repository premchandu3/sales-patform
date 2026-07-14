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
        name: "John Smith",
        company: "Acme Technologies",
        source: "Manual",
        owner: "Varshini",
        status: "New",
        nextStep: "Follow Up",
    },
    {
        id: 2,
        name: "Sarah Wilson",
        company: "TechNova",
        source: "Card AI",
        owner: "Rahul",
        status: "Contacted",
        nextStep: "Discovery Call",
    },
    {
        id: 3,
        name: "David Brown",
        company: "Growth Labs",
        source: "Manual",
        owner: "Kiran",
        status: "Qualified",
        nextStep: "Proposal",
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
                        <tr className="bg-[#EAF1FB]">
                            <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                                Name
                            </th>

                            <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                                Company
                            </th>

                            <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                                Source
                            </th>

                            <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                                Lead Owner
                            </th>

                            <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                                Status
                            </th>

                            <th className="px-5 py-4 text-left text-sm font-medium text-[#071B3B]">
                                Next Step
                            </th>

                            <th className="px-5 py-4 text-right text-sm font-medium text-[#071B3B]">
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
                                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                                        {lead.status}
                                    </span>
                                </td>

                                <td className="px-5 py-4 text-sm">
                                    {lead.nextStep}
                                </td>

                                <td className="px-5 py-4 text-right">
                                    <button
                                        type="button"
                                        onClick={onViewDetails}
                                        className="bg-[#071B3B] text-white px-4 py-2 rounded-[10px] text-sm font-medium hover:bg-[#0B2550]"
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