import StatCard from "@/components/ui/StatCard";
import { Lead } from "@/mock/leads";

interface LeadStatsProps {
  leads: Lead[];
}

export default function LeadStats({
  leads,
}: LeadStatsProps) {
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatCard
        title="Total Leads"
        value={leads.length}
        subtitle="All leads"
      />

      <StatCard
        title="New Leads"
        value={
          leads.filter(
            (lead) =>
              lead.status === "New"
          ).length
        }
        subtitle="Recently added"
      />

      <StatCard
        title="Qualified"
        value={
          leads.filter(
            (lead) =>
              lead.status ===
              "Qualified"
          ).length
        }
        subtitle="Ready to convert"
      />

      <StatCard
        title="Lost Leads"
        value={
          leads.filter(
            (lead) =>
              lead.status === "Lost"
          ).length
        }
        subtitle="Not converted"
      />
    </div>
  );
}