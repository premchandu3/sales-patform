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

export default function DiscoveryCallsTable() {
  const [calls, setCalls] = useState<DiscoveryCall[]>([]);

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    try {
      const res = await fetch("/api/discovery-calls");
      const data = await res.json();

      setCalls(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[20px] font-semibold">
          Discovery Calls
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
              Meeting Type
            </th>

            <th className="px-3 py-3 text-left">
              Status
            </th>

            <th className="px-3 py-3 text-left">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {calls.map((item) => (
            <tr
              key={item._id}
              className="border-b"
            >
              <td className="px-3 py-4">
                {item.leadId}
              </td>

              <td className="px-3 py-4">
                {item.meetingType}
              </td>

              <td className="px-3 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    item.status === "Scheduled"
                      ? "bg-[#E8EEF9] text-[#5B6B8A]"
                      : "bg-[#DDF7E8] text-[#27AE60]"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="px-3 py-4">
                {item.meetingDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}