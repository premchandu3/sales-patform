"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import { User } from "@/types/user";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingUser?: User | null;
  onAddUser: (data: {
    name: string;
    email: string;
    contact?: string;
    role: string;
    status:
      | "Active"
      | "Inactive"
      | "Invited";
    permissions: string[];
  }) => Promise<void>;
}

const permissions = [
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

export default function AddUserModal({
  isOpen,
  onClose,
  editingUser,
  onAddUser,
}: AddUserModalProps) {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [contact, setContact] =
    useState("");

  const [role, setRole] =
    useState("Lead Generator");

  const [status, setStatus] =
    useState("Active");

  const [
    selectedPermissions,
    setSelectedPermissions,
  ] = useState<string[]>([]);

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setContact(
        editingUser.contact || ""
      );
      setRole(editingUser.role);
      setStatus(editingUser.status);
      setSelectedPermissions(
        editingUser.permissions || []
      );
    } else {
      setName("");
      setEmail("");
      setContact("");
      setRole("Lead Generator");
      setStatus("Active");
      setSelectedPermissions([]);
    }
  }, [editingUser, isOpen]);

  const handlePermissionChange = (
    permission: string
  ) => {
    setSelectedPermissions(
      (prev) =>
        prev.includes(permission)
          ? prev.filter(
              (p) =>
                p !== permission
            )
          : [
              ...prev,
              permission,
            ]
    );
  };

  const handleSubmit =
    async () => {
      try {
        await onAddUser({
          name,
          email,
          contact,
          role,
          status:
            status as
              | "Active"
              | "Inactive"
              | "Invited",
          permissions:
            selectedPermissions,
        });

        onClose();
      } catch (error) {
        console.error(error);
      }
    };

  if (!isOpen) return null;

  return (
    <Modal>
      <div className="bg-white rounded-2xl w-[620px] p-6 shadow-2xl">

        <div className="flex items-center justify-between mb-5">

          <h2 className="text-2xl font-semibold">
            {editingUser
              ? "Edit Employee / User"
              : "Add Employee / User"}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 text-xl"
          >
            ×
          </button>

        </div>

        <div className="space-y-4">

          <input
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            placeholder="Employee Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            value={contact}
            onChange={(e) =>
              setContact(
                e.target.value
              )
            }
            placeholder="Contact Number"
            className="w-full border rounded-lg px-4 py-3"
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(
                e.target.value
              )
            }
            className="w-full border rounded-lg px-4 py-3"
          >
            <option>
              Lead Generator
            </option>

            <option>
              Sales Executive
            </option>

            <option>
              Sales Manager
            </option>
          </select>

          <div>
            <label className="font-semibold block mb-2">
              Role Permissions
            </label>

            <div className="border rounded-lg p-4 grid grid-cols-3 gap-3">

              {permissions.map(
                (
                  permission
                ) => (
                  <label
                    key={
                      permission
                    }
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPermissions.includes(
                        permission
                      )}
                      onChange={() =>
                        handlePermissionChange(
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

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
            className="w-full border rounded-lg px-4 py-3"
          >
            <option>
              Active
            </option>

            <option>
              Inactive
            </option>

            <option>
              Invited
            </option>
          </select>

          <div className="flex justify-end gap-3 pt-2">

            <button
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={
                handleSubmit
              }
              className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
            >
              {editingUser
                ? "Update User"
                : "Add User"}
            </button>

          </div>

        </div>

      </div>
    </Modal>
  );
}