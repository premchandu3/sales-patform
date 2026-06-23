"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import { Lead } from "@/mock/leads";

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
  if (!isOpen || !lead)
    return null;

  return (
    <Modal>
      <div className="bg-white rounded-xl p-6 w-[500px]">
        <h2 className="text-2xl font-bold mb-6">
          Lead Details
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">
              Name
            </p>

            <p className="font-medium">
              {lead.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Company
            </p>

            <p className="font-medium">
              {lead.company}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="font-medium">
              {lead.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Phone
            </p>

            <p className="font-medium">
              {lead.phone}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="font-medium">
              {lead.status}
            </p>
          </div>

          <div className="flex justify-end">
            <Button onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}