"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { User } from "@/mock/users";

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export default function UserDetailsModal({
  isOpen,
  onClose,
  user,
}: UserDetailsModalProps) {
  if (!isOpen || !user) return null;

  return (
    <Modal>
      <div className="bg-white rounded-2xl p-6 w-[500px]">
        <h2 className="text-2xl font-bold mb-6">
          User Details
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">
              Full Name
            </p>
            <p className="font-medium">
              {user.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>
            <p className="font-medium">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Role
            </p>
            <p className="font-medium">
              {user.role}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>
            <p className="font-medium">
              {user.status}
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}
