import LeadForm from "@/components/lead-generator/add-leads/LeadForm";

export default function AddLeadsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        Add Leads
      </h1>

      <LeadForm />
    </div>
  );
}