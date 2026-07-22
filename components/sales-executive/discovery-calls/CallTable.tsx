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
  onViewDetails: (
    call: DiscoveryCall
  ) => void;
};

export default function CallTable({
  onViewDetails,
}: CallTableProps) {
  const [calls, setCalls] =
    useState<DiscoveryCall[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response =
          await fetch(
            "/api/discovery-calls"
          );

        const data =
          await response.json();

        setCalls(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalls();
  }, []);

  if (loading) {
    return (
      <div className="bg-white border rounded-xl p-4 md:p-6">
        Loading Calls...
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full">
          <thead>
            <tr className="bg-[#D8E3F3]">
              <th className="px-6 py-5 text-left text-sm font-semibold whitespace-nowrap">
                Lead ID
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold whitespace-nowrap">
                Meeting Type
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold whitespace-nowrap">
                Date
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold whitespace-nowrap">
                Time
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold whitespace-nowrap">
                Status
              </th>

              <th className="px-6 py-5 text-right text-sm font-semibold whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {calls.map((call) => (
              <tr
                key={call._id}
                className="border-b border-[#EEF2F7] hover:bg-[#FAFBFD]"
              >
                <td className="px-6 py-5 text-sm whitespace-nowrap">
                  {call.leadId}
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="px-3 py-1 rounded-full text-xs bg-[#E8EEF9] text-[#4B5563]">
                    {call.meetingType}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm whitespace-nowrap">
                  {call.meetingDate}
                </td>

                <td className="px-6 py-5 text-sm whitespace-nowrap">
                  {call.meetingTime}
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      call.status ===
                      "Completed"
                        ? "bg-[#DDF7E8] text-[#52C41A]"
                        : "bg-[#FFF3CD] text-[#F5B301]"
                    }`}
                  >
                    {call.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <button
                    onClick={() =>
                      onViewDetails(call)
                    }
                    className="bg-[#071B3B] text-white px-4 md:px-5 py-2.5 rounded-[10px] text-sm font-medium whitespace-nowrap"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {calls.length === 0 && (
          <div className="text-center py-12 md:py-16 text-gray-500">
            No Discovery Calls Found
          </div>
        )}
      </div>
    </div>
  );
}