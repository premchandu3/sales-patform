"use client";

import Modal from "@/components/ui/Modal";
import { X } from "lucide-react";
import { Role } from "@/types/role";

interface RoleDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: Role | null;
  onEdit: (role: Role) => void;
  onDelete: (role: Role) => void;
}

export default function RoleDetailsModal({
  isOpen,
  onClose,
  role,
  onEdit,
  onDelete,
}: RoleDetailsModalProps) {
  if (!isOpen || !role) return null;

  return (
    <Modal
      isOpen={isOpen}
    >
      <div className="relative w-[600px] bg-white rounded-2xl p-6">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400"
        >
          <X size={18} />
        </button>

        <h2 className="text-[28px] font-semibold mb-6">
          Role Details
        </h2>

        <div className="space-y-5 text-sm">

          <div>
            <span className="font-semibold">
              Role :
            </span>{" "}
            {role.name}
          </div>

          <div>
            <span className="font-semibold">
              Role Description :
            </span>{" "}
            {role.description}
          </div>

          <div>
            <span className="font-semibold">
              Status :
            </span>{" "}
            {role.status}
          </div>

          <div>
            <span className="font-semibold">
              Total Users :
            </span>{" "}
            {role.users}
          </div>

          <div>
            <p className="font-semibold mb-2">
              Role Permissions :
            </p>

            <div className="border rounded-lg p-3">
              <div className="flex flex-wrap gap-2">

                {role.permissions?.map(
                  (permission) => (
                    <span
                      key={permission}
                      className="
                        bg-[#EEF3FB]
                        text-[#071B3B]
                        px-3
                        py-1
                        rounded-full
                        text-xs
                      "
                    >
                      {permission}
                    </span>
                  )
                )}

              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={() => onDelete(role)}
            className="
              px-5
              py-2
              border
              border-[#FF6B35]
              text-[#FF6B35]
              rounded-md
              text-sm
            "
          >
            Remove
          </button>

          <button
            onClick={() => onEdit(role)}
            className="
              px-5
              py-2
              bg-[#071B3B]
              text-white
              rounded-md
              text-sm
            "
          >
            Edit Role
          </button>

        </div>

      </div>
    </Modal>
  );
}