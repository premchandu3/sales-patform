"use client";

import { useEffect, useState } from "react";

interface TeamMember {
  _id: string;
  name: string;
  email: string;
}

interface TeamStats {
  member: string;
  leads: number;
  followUps: number;
  calls: number;
}

export default function TeamTable() {
  const [team, setTeam] = useState<TeamStats[]>([]);

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    try {
      const [
        usersRes,
        leadsRes,
        followUpsRes,
        callsRes,
      ] = await Promise.all([
        fetch("/api/users"),
        fetch("/api/leads"),
        fetch("/api/followups"),
        fetch("/api/discovery-calls"),
      ]);

      const users = await usersRes.json();
      const leads = await leadsRes.json();
      const followUps = await followUpsRes.json();
      const calls = await callsRes.json();

      const teamData = users.map(
        (user: TeamMember) => ({
          member: user.name,

          leads: leads.filter(
            (lead: any) =>
              lead.leadOwner === user.name
          ).length,

          followUps: followUps.filter(
            (item: any) =>
              item.owner === user.name
          ).length,

          calls: calls.filter(
            (item: any) =>
              item.owner === user.name
          ).length,
        })
      );

      setTeam(teamData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <h3 className="text-lg md:text-[20px] font-semibold">
          Team
        </h3>

        <button className="text-sm font-medium self-start sm:self-auto">
          View All →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[650px] w-full">
          <thead>
            <tr className="bg-[#DDE7F5]">
              <th className="px-3 py-3 text-left text-sm font-semibold whitespace-nowrap">
                Team Member
              </th>

              <th className="px-3 py-3 text-left text-sm font-semibold whitespace-nowrap">
                Leads
              </th>

              <th className="px-3 py-3 text-left text-sm font-semibold whitespace-nowrap">
                Follow Ups
              </th>

              <th className="px-3 py-3 text-left text-sm font-semibold whitespace-nowrap">
                Calls
              </th>
            </tr>
          </thead>

          <tbody>
            {team.map((item, index) => (
              <tr
                key={index}
                className="border-b"
              >
                <td className="px-3 py-4 text-sm whitespace-nowrap">
                  {item.member}
                </td>

                <td className="px-3 py-4 text-sm whitespace-nowrap">
                  {item.leads}
                </td>

                <td className="px-3 py-4 text-sm whitespace-nowrap">
                  {item.followUps}
                </td>

                <td className="px-3 py-4 text-sm whitespace-nowrap">
                  {item.calls}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}