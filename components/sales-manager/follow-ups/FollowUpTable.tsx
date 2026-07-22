"use client";

import { useEffect, useState } from "react";

interface FollowUp {
  _id: string;
  leadId: string;
  followUpType?: string;
  followUpDate: string;
  followUpTime: string;
  priority?: string;
  notes?: string;
  status: string;
}

type FollowUpTableProps = {
  onViewDetails: (followUp: FollowUp) => void;
};

export default function FollowUpTable({
  onViewDetails,
}: FollowUpTableProps) {
  const [followUps, setFollowUps] = useState<FollowUp[]>([]);

  useEffect(() => {
    fetchFollowUps();
  }, []);

  const fetchFollowUps = async () => {
    try {
      const res = await fetch("/api/followups");
      const data = await res.json();

      setFollowUps(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[950px] w-full">
          <thead>
            <tr className="bg-[#D8E3F3]">
              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Lead
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Company
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Follow Up Type
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Date
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Status
              </th>

              <th className="px-6 py-5 text-right text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {followUps.map((item) => (
              <tr
                key={item._id}
                className="border-b border-[#EEF2F7] hover:bg-[#FAFBFD] transition"
              >
                <td className="px-6 py-5 text-sm text-[#374151] whitespace-nowrap">
                  {item.leadId}
                </td>

                <td className="px-6 py-5 text-sm text-[#374151] whitespace-nowrap">
                  -
                </td>

                <td className="px-6 py-5">
                  <span className="inline-flex px-3 py-1.5 rounded-full text-xs whitespace-nowrap bg-[#E8EEF9] text-[#5B6472]">
                    {item.followUpType || "Call"}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm text-[#6B7280] whitespace-nowrap">
                  {item.followUpDate}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`inline-flex px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
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
                    onClick={() => onViewDetails(item)}
                    className="bg-[#071B3B] text-white px-5 py-2.5 rounded-[10px] text-sm font-medium whitespace-nowrap hover:bg-[#0A2550] transition"
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