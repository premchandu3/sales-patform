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
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <h3 className="text-lg md:text-[20px] font-semibold">
          Follow Up Dues
        </h3>

        <button className="text-sm font-medium self-start sm:self-auto">
          View All →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full">
          <thead>
            <tr className="bg-[#DDE7F5]">
              <th className="px-3 py-3 text-left text-sm font-semibold whitespace-nowrap">
                Lead
              </th>

              <th className="px-3 py-3 text-left text-sm font-semibold whitespace-nowrap">
                Priority
              </th>

              <th className="px-3 py-3 text-left text-sm font-semibold whitespace-nowrap">
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
                <td className="px-3 py-4 text-sm whitespace-nowrap">
                  {item.leadId}
                </td>

                <td className="px-3 py-4 text-sm whitespace-nowrap">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs whitespace-nowrap ${item.priority === "High"
                        ? "bg-[#FFE8DE] text-[#E67E22]"
                        : item.priority === "Medium"
                          ? "bg-[#E8EEF9] text-[#5B6B8A]"
                          : "bg-[#DDF7E8] text-[#27AE60]"
                      }`}
                  >
                    {item.priority || "Medium"}
                  </span>
                </td>

                <td className="px-3 py-4 text-sm whitespace-nowrap">
                  {item.followUpDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}