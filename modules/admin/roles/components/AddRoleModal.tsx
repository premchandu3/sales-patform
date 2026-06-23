"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";

interface AddRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRole: (role: {
    name: string;
    description: string;
    status: "Active" | "Inactive";
    permissions: string[];
  }) => void;
  editingRole?: any;
}

const permissionOptions = [
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

export default function AddRoleModal({
  isOpen,
  onClose,
  onAddRole,
  editingRole,
}: AddRoleModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState<"Active" | "Inactive">(
      "Active"
    );

  const [permissions, setPermissions] =
    useState<string[]>([]);

  useEffect(() => {
    if (editingRole) {
      setName(editingRole.name || "");
      setDescription(
        editingRole.description || ""
      );

      setStatus(
        editingRole.status || "Active"
      );

      setPermissions(
        editingRole.permissions || []
      );
    } else {
      setName("");
      setDescription("");
      setStatus("Active");
      setPermissions([]);
    }
  }, [editingRole]);

  const togglePermission = (
    permission: string
  ) => {
    if (
      permissions.includes(permission)
    ) {
      setPermissions(
        permissions.filter(
          (p) => p !== permission
        )
      );
    } else {
      setPermissions([
        ...permissions,
        permission,
      ]);
    }
  };

  const handleSubmit = () => {
    onAddRole({
      name,
      description,
      status,
      permissions,
    });
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <div className="bg-white rounded-2xl p-6 w-[600px]">

        <h2 className="text-[28px] font-semibold mb-6">
          {editingRole
            ? "Edit Role"
            : "Add Role"}
        </h2>

        <div className="space-y-4">

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Role Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            placeholder="Role Description"
            rows={3}
            className="w-full border rounded-lg px-4 py-3"
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target
                  .value as any
              )
            }
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>
          </select>

          <div>
            <p className="font-medium mb-3">
              Permissions
            </p>

            <div className="grid grid-cols-3 gap-3 border rounded-lg p-4">

              {permissionOptions.map(
                (permission) => (
                  <label
                    key={permission}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={permissions.includes(
                        permission
                      )}
                      onChange={() =>
                        togglePermission(
                          permission
                        )
                      }
                    />

                    {permission}
                  </label>
                )
              )}

            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">

            <button
              onClick={onClose}
              className="
                px-5
                py-2
                border
                rounded-md
              "
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="
                px-5
                py-2
                bg-[#071B3B]
                text-white
                rounded-md
              "
            >
              {editingRole
                ? "Update Role"
                : "Add Role"}
            </button>

          </div>

        </div>
      </div>
    </Modal>
  );
}