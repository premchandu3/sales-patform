"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { Permission } from "@/mock/permissions";

interface AddPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPermission: (
    permission: Omit<Permission, "id">
  ) => void;
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

  const [
    description,
    setDescription,
  ] = useState("");

  const [usedIn, setUsedIn] =
    useState("");

  const [status, setStatus] =
    useState<
      "Active" | "Inactive"
    >("Active");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (editingPermission) {
        setName(
          editingPermission.name
        );
        setDescription(
          editingPermission.description
        );
        setUsedIn(
          editingPermission.usedIn
        );
        setStatus(
          editingPermission.status
        );
      } else {
        setName("");
        setDescription("");
        setUsedIn("");
        setStatus("Active");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [editingPermission, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !description.trim() ||
      !usedIn.trim()
    )
      return;

    onAddPermission({
      name,
      description,
      usedIn,
      status,
    });

    onClose();
  };

  return (
    <Modal>
      <div className="bg-white rounded-xl p-6 w-[500px]">
        <h2 className="text-xl font-bold mb-4">
          {editingPermission
            ? "Edit Permission"
            : "Add Permission"}
        </h2>

        <div className="space-y-4">
          <Input
            placeholder="Permission Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <Input
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

          <select
            value={usedIn}
            onChange={(e) =>
              setUsedIn(
                e.target.value
              )
            }
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="">
              Select Role
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

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as
                  | "Active"
                  | "Inactive"
              )
            }
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>
          </select>

          <div className="flex justify-end gap-2">
            <Button onClick={onClose}>
              Cancel
            </Button>

            <Button
              onClick={
                handleSubmit
              }
            >
              {editingPermission
                ? "Update"
                : "Add Permission"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}