"use client";

import Modal from "@/components/ui/Modal";
import { X } from "lucide-react";

import { Permission } from "@/types/permission";

interface PermissionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  permission: Permission | null;
  onEdit: (permission: Permission) => void;
  onDelete: (permission: Permission) => void;
}

export default function PermissionDetailsModal({
  isOpen,
  onClose,
  permission,
  onEdit,
  onDelete,
}: PermissionDetailsModalProps) {
  if (!isOpen || !permission)
    return null;

  return (
    <Modal>
      <div className="bg-white rounded-[24px] p-8 w-[650px] relative">

        <button
          onClick={onClose}
          className="absolute top-6 right-6"
        >
          <X
            size={22}
            className="text-gray-500"
          />
        </button>

        <h2 className="text-[20px] font-semibold mb-8">
          Permission Details
        </h2>

        <div className="space-y-5">

          <p>
            <span className="font-semibold">
              Permission Name :
            </span>{" "}
            {permission.name}
          </p>

          <p>
            <span className="font-semibold">
              Permission Description :
            </span>{" "}
            {permission.description}
          </p>

          <p>
            <span className="font-semibold">
              Used In Roles :
            </span>{" "}
            {permission.roles.join(", ")}
          </p>

          <p>
            <span className="font-semibold">
              Status :
            </span>{" "}
            {permission.status}
          </p>

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={() =>
              onDelete(permission)
            }
            className="
              px-6
              py-2
              border
              border-[#FF6B35]
              text-[#FF6B35]
              rounded-md
            "
          >
            Remove
          </button>

          <button
            onClick={() =>
              onEdit(permission)
            }
            className="
              px-6
              py-2
              bg-[#071B3B]
              text-white
              rounded-md
            "
          >
            Edit Permission
          </button>

        </div>

      </div>
    </Modal>
  );
}