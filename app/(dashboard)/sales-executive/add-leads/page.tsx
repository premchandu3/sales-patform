import AddLeadForm from "@/components/sales-executive/add-leads/AddLeadForm";

export default function AddLeadsPage() {
  return (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-[#071B3B]">
        Add Leads
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Create a new lead manually
      </p>
    </div>

    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
      <h2 className="text-lg font-semibold text-[#071B3B] mb-6">
        Lead Information
      </h2>

      <AddLeadForm />
    </div>
  </div>
);
}