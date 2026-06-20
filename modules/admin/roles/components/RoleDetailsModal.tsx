"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { Role } from "@/mock/roles";

interface RoleDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: Role | null;
}

export default function RoleDetailsModal({
  isOpen,
  onClose,
  role,
}: RoleDetailsModalProps) {
  if (!isOpen || !role) return null;

  return (
    <Modal>
      <div className="bg-white rounded-xl p-6 w-[500px]">
        <h2 className="text-xl font-bold mb-4">
          Role Details
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">
              Role Name
            </p>

            <p className="font-medium">
              {role.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Description
            </p>

            <p className="font-medium">
              {role.description}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Total Users
            </p>

            <p className="font-medium">
              {role.users}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="font-medium">
              {role.status}
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}