"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { leadService } from "@/services/lead.service";

type Lead = {
  createdAt: string;
};

export default function Activity() {
  const [todayLeads, setTodayLeads] = useState(0);
  const [yesterdayLeads, setYesterdayLeads] =
    useState(0);

  useEffect(() => {
    const loadActivity = async () => {
      try {
        const leads =
          await leadService.getLeads();

        const today = new Date();

        const yesterday = new Date();
        yesterday.setDate(
          yesterday.getDate() - 1
        );

        const todayCount =
          leads.filter((lead: Lead) => {
            const created = new Date(
              lead.createdAt
            );

            return (
              created.getDate() ===
                today.getDate() &&
              created.getMonth() ===
                today.getMonth() &&
              created.getFullYear() ===
                today.getFullYear()
            );
          }).length;

        const yesterdayCount =
          leads.filter((lead: Lead) => {
            const created = new Date(
              lead.createdAt
            );

            return (
              created.getDate() ===
                yesterday.getDate() &&
              created.getMonth() ===
                yesterday.getMonth() &&
              created.getFullYear() ===
                yesterday.getFullYear()
            );
          }).length;

        setTodayLeads(todayCount);
        setYesterdayLeads(
          yesterdayCount
        );
      } catch (error) {
        console.error(error);
      }
    };

    loadActivity();
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">
        My Activity
      </h2>

      <div className="space-y-8">
        <div>
          <p className="font-semibold mb-4">
            Today
          </p>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={18}
              className="text-green-500"
            />

            <span>
              Added {todayLeads} Leads
            </span>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-4">
            Yesterday
          </p>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={18}
              className="text-green-500"
            />

            <span>
              Added {yesterdayLeads} Leads
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}