"use client";

import { useEffect, useState } from "react";

interface DiscoveryCall {
  _id: string;
  leadId: string;
  meetingDate: string;
  meetingTime: string;
  meetingType: string;
  status: string;
}

type CallTableProps = {
  onViewDetails: (call: DiscoveryCall) => void;
};

export default function CallTable({
  onViewDetails,
}: CallTableProps) {
  const [calls, setCalls] = useState<
    DiscoveryCall[]
  >([]);

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    try {
      const res = await fetch(
        "/api/discovery-calls"
      );

      const data = await res.json();

      setCalls(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full">
          <thead>
            <tr className="bg-[#D8E3F3]">
              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Lead
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Company
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Lead Owner
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Meeting Type
              </th>

              <th className="px-6 py-5 text-left text-[15px] font-semibold text-[#374151] whitespace-nowrap">
                Date & Time
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
            {calls.map((call) => (
              <tr
                key={call._id}
                className="border-b border-[#EEF2F7]"
              >
                <td className="px-6 py-5 text-sm text-[#374151] whitespace-nowrap">
                  {call.leadId}
                </td>

                <td className="px-6 py-5 text-sm text-[#374151] whitespace-nowrap">
                  -
                </td>

                <td className="px-6 py-5 text-sm text-[#374151] whitespace-nowrap">
                  -
                </td>

                <td className="px-6 py-5 text-sm text-[#374151] whitespace-nowrap">
                  {call.meetingType}
                </td>

                <td className="px-6 py-5 text-sm text-[#374151] whitespace-nowrap">
                  {call.meetingDate}{" "}
                  {call.meetingTime}
                </td>

                <td className="px-6 py-5 text-sm text-[#374151] whitespace-nowrap">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs whitespace-nowrap ${
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
                    onClick={() =>
                      onViewDetails(call)
                    }
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