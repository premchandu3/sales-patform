"use client";

import { useEffect, useState } from "react";

interface FollowUp {
  _id: string;
  leadId: string;
  followUpDate: string;
  priority?: string;
  status: string;
}

export default function FollowUpDuesTable() {
  const [followUps, setFollowUps] = useState<FollowUp[]>([]);

  useEffect(() => {
    fetchFollowUps();
  }, []);

  const fetchFollowUps = async () => {
    try {
      const res = await fetch("/api/followups");
      const data = await res.json();

      const pendingFollowUps = data.filter(
        (item: FollowUp) => item.status === "Pending"
      );

      setFollowUps(pendingFollowUps);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[20px] font-semibold">
          Follow Up Dues
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
              Priority
            </th>

            <th className="px-3 py-3 text-left">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {followUps.map((item) => (
            <tr
              key={item._id}
              className="border-b"
            >
              <td className="px-3 py-4">
                {item.leadId}
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
                  {item.priority || "Medium"}
                </span>
              </td>

              <td className="px-3 py-4">
                {item.followUpDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}