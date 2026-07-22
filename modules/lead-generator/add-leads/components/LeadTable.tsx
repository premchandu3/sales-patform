import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import { Lead } from "@/types/lead";

interface LeadTableProps {
  leads: Lead[];
  onView: (lead: Lead) => void;
}

export default function LeadTable({
  leads,
  onView,
}: LeadTableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Company</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Assigned To</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.length > 0 ? (
            leads.map((lead) => (
              <tr key={lead.id} className="border-b">
                <td className="p-4">{lead.name}</td>

                <td className="p-4">{lead.company}</td>

                <td className="p-4">{lead.email}</td>

                <td className="p-4">
                  <StatusBadge status={lead.status} />
                </td>

                <td className="p-4">{lead.assignedTo}</td>

                <td className="p-4">
                  <Button onClick={() => onView(lead)}>
                    View
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="p-6 text-center text-gray-500"
              >
                No Leads Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}