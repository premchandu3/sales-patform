"use client";

import { useEffect, useState } from "react";
import {
  Users,
  CalendarDays,
  BarChart3,
} from "lucide-react";

type Lead = {
  createdAt?: string;
  addedDate?: string;
};

export default function LeadStats() {
  const [totalLeads, setTotalLeads] =
    useState(0);

  const [dailyLeads, setDailyLeads] =
    useState(0);

  const [monthlyLeads, setMonthlyLeads] =
    useState(0);

  useEffect(() => {
    const fetchLeadStats = async () => {
      try {
        const response =
          await fetch("/api/leads");

        const leads: Lead[] =
          await response.json();

        setTotalLeads(leads.length);

        const today = new Date();

        const dailyCount =
          leads.filter((lead) => {
            const leadDate = new Date(
              lead.createdAt ||
                lead.addedDate ||
                ""
            );

            return (
              leadDate.getDate() ===
                today.getDate() &&
              leadDate.getMonth() ===
                today.getMonth() &&
              leadDate.getFullYear() ===
                today.getFullYear()
            );
          }).length;

        const monthlyCount =
          leads.filter((lead) => {
            const leadDate = new Date(
              lead.createdAt ||
                lead.addedDate ||
                ""
            );

            return (
              leadDate.getMonth() ===
                today.getMonth() &&
              leadDate.getFullYear() ===
                today.getFullYear()
            );
          }).length;

        setDailyLeads(dailyCount);
        setMonthlyLeads(
          monthlyCount
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeadStats();
  }, []);

return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
        <Users
          size={28}
          className="text-[#071B3B]"
        />
      </div>

      <div>
        <p className="font-semibold text-[#111827]">
          Total Leads
        </p>

        <h3 className="text-4xl font-bold leading-none mt-1">
          {totalLeads}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          All time
        </p>
      </div>
    </div>

    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
        <CalendarDays
          size={28}
          className="text-[#071B3B]"
        />
      </div>

      <div>
        <p className="font-semibold text-[#111827]">
          Daily Leads
        </p>

        <h3 className="text-4xl font-bold leading-none mt-1">
          {dailyLeads}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Added today
        </p>
      </div>
    </div>

    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
        <BarChart3
          size={28}
          className="text-[#071B3B]"
        />
      </div>

      <div>
        <p className="font-semibold text-[#111827]">
          Monthly Leads
        </p>

        <h3 className="text-4xl font-bold leading-none mt-1">
          {monthlyLeads}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          This month
        </p>
      </div>
    </div>
  </div>
);}