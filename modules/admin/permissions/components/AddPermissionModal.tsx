"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import Modal from "@/components/ui/Modal";

import { Permission } from "@/types/permission";

interface AddPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPermission: (permission: {
    name: string;
    description: string;
    roles: string[];
    status: "Active" | "Inactive";
  }) => void;
  editingPermission?: Permission | null;
}

export default function AddPermissionModal({
  isOpen,
  onClose,
  onAddPermission,
  editingPermission,
}: AddPermissionModalProps) {
  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [role, setRole] =
    useState("");

  const [status, setStatus] =
    useState<"Active" | "Inactive">(
      "Active"
    );

 useEffect(() => {
  if (!isOpen) return;

  const timer = setTimeout(() => {
    if (editingPermission) {
      setName(editingPermission.name);

      setDescription(
        editingPermission.description
      );

      setRole(
        editingPermission.roles?.[0] ||
          ""
      );

      setStatus(
        editingPermission.status
      );
    } else {
      setName("");
      setDescription("");
      setRole("");
      setStatus("Active");
    }
  }, 0);

  return () => clearTimeout(timer);
}, [editingPermission, isOpen]);

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !description.trim() ||
      !role
    )
      return;

    onAddPermission({
      name,
      description,
      roles: [role],
      status,
    });
  };

  if (!isOpen) return null;

 return (
  <Modal
  isOpen={isOpen}
>
      <div
        className="
          bg-white
          rounded-[24px]
          w-full
          max-w-[650px]
          mx-4
          p-8
          shadow-xl
          relative
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-6
            right-6
            text-gray-500
          "
        >
          <X size={22} />
        </button>

        <h2 className="text-[20px] font-semibold mb-8">
          {editingPermission
            ? "Edit Permission"
            : "Add New Permission"}
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Permission Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="
                w-full
                h-[40px]
                border
                border-gray-300
                rounded-md
                px-3
              "
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Permission Description
            </label>

            <input
              type="text"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="
                w-full
                h-[40px]
                border
                border-gray-300
                rounded-md
                px-3
              "
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Used In Roles
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
              className="
                w-full
                h-[40px]
                border
                border-gray-300
                rounded-md
                px-3
              "
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

              <option value="Admin">
                Admin
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as
                    | "Active"
                    | "Inactive"
                )
              }
              className="
                w-full
                h-[40px]
                border
                border-gray-300
                rounded-md
                px-3
              "
            >
              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
            <button
              onClick={onClose}
              className="
                px-6
                h-[40px]
                border
                border-gray-300
                rounded-md
                bg-white
              "
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="
                px-6
                h-[40px]
                bg-[#071B3B]
                text-white
                rounded-md
              "
            >
              {editingPermission
                ? "Update Permission"
                : "Add Permission"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}