"use client";

import Modal from "@/components/ui/Modal";
import { User } from "@/types/user";

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
}

const allPermissions = [
  "Create Leads",
  "Edit Leads",
  "Delete Leads",
  "View Lead Details",
  "Follow Ups",
  "Discovery Calls",
  "AI Card Scanner",
  "AI Deep Research",
  "View Reports",
];

export default function UserDetailsModal({
  isOpen,
  onClose,
  user,
  onEdit,
  onDelete,
}: UserDetailsModalProps) {
  if (!isOpen || !user) return null;

  return (
  <Modal
  isOpen={isOpen}
>
      <div className="bg-white rounded-[20px] w-[500px] p-6 shadow-xl">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] font-semibold">
            Employee / User Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-sm">

          <p>
            <span className="font-semibold">
              Name :
            </span>{" "}
            {user.name}
          </p>

          <p>
            <span className="font-semibold">
              Email :
            </span>{" "}
            {user.email}
          </p>

          <p>
            <span className="font-semibold">
              Contact :
            </span>{" "}
            {user.contact || "-"}
          </p>

          <p>
            <span className="font-semibold">
              Role :
            </span>{" "}
            {user.role}
          </p>

          <p>
            <span className="font-semibold">
              Status :
            </span>{" "}
            {user.status}
          </p>

          <div>
            <h3 className="font-semibold mb-2">
              Role Permissions :
            </h3>

            <div className="border rounded-md p-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">

              {allPermissions.map(
                (permission) => (
                  <label
                    key={permission}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={
                        user.permissions?.includes(
                          permission
                        ) || false
                      }
                      readOnly
                    />

                    {permission}
                  </label>
                )
              )}

            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">

          <button
  onClick={async () => {
    await onDelete?.(user);
    onClose();
  }}
  className="px-5 py-2 border border-[#FF6B57] text-[#FF6B57] rounded-lg hover:bg-red-50"
>
  Remove
</button>

          <button
            onClick={() => {
              onEdit?.(user);
              onClose();
            }}
            className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
          >
            Edit
          </button>

        </div>

      </div>
    </Modal>
  );
}