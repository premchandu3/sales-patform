"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import { Permission } from "@/mock/permissions";

interface PermissionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  permission: Permission | null;
}

export default function PermissionDetailsModal({
  isOpen,
  onClose,
  permission,
}: PermissionDetailsModalProps) {
  if (!isOpen || !permission)
    return null;

  return (
    <Modal>
      <div className="bg-white rounded-xl p-6 w-[500px]">
        <h2 className="text-2xl font-bold mb-6">
          Permission Details
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">
              Permission Name
            </p>

            <p className="font-medium">
              {permission.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Description
            </p>

            <p className="font-medium">
              {permission.description}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Used In
            </p>

            <p className="font-medium">
              {permission.usedIn}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="font-medium">
              {permission.status}
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