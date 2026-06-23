import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";

import { Lead } from "@/mock/leads";

interface LeadTableProps {
  leads: Lead[];
  onViewDetails: (
    lead: Lead
  ) => void;
  onEditLead: (
    lead: Lead
  ) => void;
  onDeleteLead: (
    lead: Lead
  ) => void;
}

export default function LeadTable({
  leads,
  onViewDetails,
  onEditLead,
  onDeleteLead,
}: LeadTableProps) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Company
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-left">
              Phone
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {leads.length > 0 ? (
            leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b"
              >
                <td className="p-4">
                  {lead.name}
                </td>

                <td className="p-4">
                  {lead.company}
                </td>

                <td className="p-4">
                  {lead.email}
                </td>

                <td className="p-4">
                  {lead.phone}
                </td>

                <td className="p-4">
                  <StatusBadge
                    status={lead.status}
                  />
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <Button
                      onClick={() =>
                        onViewDetails(
                          lead
                        )
                      }
                    >
                      View
                    </Button>

                    <Button
                      className="bg-yellow-500"
                      onClick={() =>
                        onEditLead(
                          lead
                        )
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="bg-red-600"
                      onClick={() =>
                        onDeleteLead(
                          lead
                        )
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="text-center py-8 text-gray-500"
              >
                No leads found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}