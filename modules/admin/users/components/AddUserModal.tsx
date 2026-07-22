"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import { User } from "@/types/user";
import { X } from "lucide-react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
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
      setRole("");
      setStatus("Active");
      setSelectedPermissions([]);
    }
  }, [editingUser, isOpen]);

  const handlePermissionChange = (
    permission: string
  ) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter(
            (p) => p !== permission
          )
        : [...prev, permission]
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
  <Modal
  isOpen={isOpen}
>
<div className="bg-white rounded-[24px] w-full max-h-[85vh] overflow-y-auto max-w-[980px] mx-4 p-5 md:p-10 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[34px] font-semibold text-[#111827]">
            {editingUser
              ? "Edit Employee / User"
              : "Add Employee / User"}
          </h2>

          <button
            onClick={onClose}
            className="text-[32px] text-gray-500"
          >
            ×
          </button>
        </div>

        <div className="space-y-5">

          <div>
            <label className="block mb-2 text-[16px] font-medium">
              Name
            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="w-full h-[54px] border border-[#D1D5DB] rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block mb-2 text-[16px] font-medium">
              Email
            </label>

            <input
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full h-[54px] border border-[#D1D5DB] rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block mb-2 text-[16px] font-medium">
              Contact
            </label>

            <input
              value={contact}
              onChange={(e) =>
                setContact(
                  e.target.value
                )
              }
              className="w-full h-[54px] border border-[#D1D5DB] rounded-lg px-4"
            />
          </div>

          <div>
            <label className="block mb-2 text-[16px] font-medium">
              Select Role
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
              className="w-full h-[54px] border border-[#D1D5DB] rounded-lg px-4"
            >
              <option value="">
                Select
              </option>

              <option value="Lead Generator">
                Lead Generator
              </option>

              <option value="Sales Executive">
                Sales Executive
              </option>

              <option value="Sales Manager">
                Sales Manager
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-3 text-[16px] font-medium">
              Role Permissions
            </label>

            <div className="border border-[#D1D5DB] rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

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

          <div>
            <label className="block mb-2 text-[16px] font-medium">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value
                )
              }
              className="w-full h-[54px] border border-[#D1D5DB] rounded-lg px-4"
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
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">

            <button
              onClick={onClose}
              className="px-8 py-3 border border-[#D1D5DB] rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={
                handleSubmit
              }
              className="bg-[#071B3B] text-white px-8 py-3 rounded-lg"
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