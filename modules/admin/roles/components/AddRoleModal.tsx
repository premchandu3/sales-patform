"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { Role } from "@/mock/roles";

interface AddRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRole: (
    role: Omit<Role, "id">
  ) => void;
  editingRole?: Role | null;
}

export default function AddRoleModal({
  isOpen,
  onClose,
  onAddRole,
  editingRole,
}: AddRoleModalProps) {
  const [name, setName] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [users, setUsers] =
    useState(0);

  const [status, setStatus] =
    useState<
      "Active" | "Inactive"
    >("Active");

  useEffect(() => {
  const timer = setTimeout(() => {
    if (editingRole) {
      setName(editingRole.name);
      setDescription(
        editingRole.description
      );
      setUsers(editingRole.users);
      setStatus(
        editingRole.status
      );
    } else {
      setName("");
      setDescription("");
      setUsers(0);
      setStatus("Active");
    }
  }, 0);

  return () => clearTimeout(timer);
}, [editingRole]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !description.trim()
    )
      return;

    onAddRole({
      name,
      description,
      users,
      status,
    });
  };

  return (
    <Modal>
      <div className="bg-white rounded-xl p-6 w-[500px]">
        <h2 className="text-xl font-bold mb-4">
          {editingRole
            ? "Edit Role"
            : "Add Role"}
        </h2>

        <div className="space-y-4">
          <Input
            placeholder="Role Name"
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

          <Input
            type="number"
            placeholder="Users Count"
            value={users}
            onChange={(e) =>
              setUsers(
                Number(
                  e.target.value
                )
              )
            }
          />

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
            <Button
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              onClick={
                handleSubmit
              }
            >
              {editingRole
                ? "Update"
                : "Add Role"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}