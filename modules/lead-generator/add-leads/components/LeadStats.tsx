import StatCard from "@/components/ui/StatCard";
import { Lead } from "@/types/lead";

interface LeadStatsProps {
  leads: Lead[];
}

export default function LeadStats({ leads }: LeadStatsProps) {
  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const qualifiedLeads = leads.filter(
    (lead) => lead.status === "Qualified"
  ).length;

  const convertedLeads = leads.filter(
  (lead) => lead.status === "Won"
).length;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Leads"
        value={String(totalLeads)}
        subtitle="All Leads"
      />

      <StatCard
        title="New Leads"
        value={String(newLeads)}
        subtitle="Recently Added"
      />

      <StatCard
        title="Qualified"
        value={String(qualifiedLeads)}
        subtitle="Sales Ready"
      />

      <StatCard
        title="Converted"
        value={String(convertedLeads)}
        subtitle="Customers"
      />
    </div>
  );
}