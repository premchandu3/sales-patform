"use client";

import { useEffect, useState } from "react";
import FollowUpDetailsModal from "./FollowUpDetailsModal";

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

interface FollowUpTableProps {
  search: string;
  type: string;
  status: string;
}

export default function FollowUpTable({
  search,
  type,
  status,
}: FollowUpTableProps) {
  const [followUps, setFollowUps] =
    useState<FollowUp[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedFollowUp, setSelectedFollowUp] =
    useState<FollowUp | null>(null);

  const [isOpen, setIsOpen] =
    useState(false);

  useEffect(() => {
    const fetchFollowUps = async () => {
      try {
        const response =
          await fetch("/api/followups");

        const data =
          await response.json();

        setFollowUps(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowUps();
  }, []);

  const filteredFollowUps =
    followUps.filter((item) => {
      const searchMatch =
        item.leadId
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const typeMatch =
        type === "All" ||
        (item.followUpType || "Call") ===
        type;

      const statusMatch =
        status === "All" ||
        item.status === status;

      return (
        searchMatch &&
        typeMatch &&
        statusMatch
      );
    });

  if (loading) {
    return (
      <div className="bg-white border rounded-xl p-4 md:p-6">
        Loading Follow Ups...
      </div>
    );
  }

  return (
    <>
      <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full">
            <thead>
              <tr className="bg-[#D8E3F3]">
                <th className="px-6 py-5 text-left whitespace-nowrap">
                  Lead ID
                </th>

                <th className="px-6 py-5 text-left whitespace-nowrap">
                  Type
                </th>

                <th className="px-6 py-5 text-left whitespace-nowrap">
                  Date
                </th>

                <th className="px-6 py-5 text-left whitespace-nowrap">
                  Time
                </th>

                <th className="px-6 py-5 text-left whitespace-nowrap">
                  Status
                </th>

                <th className="px-6 py-5 text-right whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredFollowUps.map(
                (item) => (
                  <tr
                    key={item._id}
                    className="border-b border-[#EEF2F7]"
                  >
                    <td className="px-6 py-5 text-sm whitespace-nowrap">
                      {item.leadId}
                    </td>

                    <td className="px-6 py-5 text-sm whitespace-nowrap">
                      {item.followUpType ||
                        "Call"}
                    </td>

                    <td className="px-6 py-5 text-sm whitespace-nowrap">
                      {new Date(
                        item.followUpDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5 text-sm whitespace-nowrap">
                      {item.followUpTime}
                    </td>

                    <td className="px-6 py-5 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${item.status ===
                            "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-right whitespace-nowrap">
                      <button
                        onClick={() => {
                          setSelectedFollowUp(
                            item
                          );
                          setIsOpen(true);
                        }}
                        className="bg-[#071B3B] text-white px-4 md:px-5 py-2 rounded-lg whitespace-nowrap"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {filteredFollowUps.length ===
            0 && (
              <div className="text-center py-12 md:py-16 text-gray-500">
                No Follow Ups Found
              </div>
            )}
        </div>
      </div>

      <FollowUpDetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        followUp={selectedFollowUp}
      />
    </>
  );
}