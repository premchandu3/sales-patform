import Modal from "@/components/ui/Modal";
import { Lead } from "@/types/lead";

interface LeadDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead | null;
}

export default function LeadDetailsModal({
  isOpen,
  onClose,
  lead,
}: LeadDetailsModalProps) {
  if (!lead) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Lead Details"
    >
      <div className="space-y-3">
        <p>
          <strong>Name:</strong> {lead.name}
        </p>

        <p>
          <strong>Company:</strong> {lead.company}
        </p>

        <p>
          <strong>Email:</strong> {lead.email}
        </p>

        <p>
          <strong>Phone:</strong> {lead.phone}
        </p>

        <p>
          <strong>Status:</strong> {lead.status}
        </p>
      </div>
    </Modal>
  );
}