"use client";

import { useState, useEffect } from "react";

import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { User } from "@/mock/users";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (
    user: Omit<User, "id">
  ) => void;
  editingUser?: User | null;
}

export default function AddUserModal({
  isOpen,
  onClose,
  onAddUser,
  editingUser,
}: AddUserModalProps) {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [role, setRole] =
    useState("Lead Generator");

  const [status, setStatus] =
    useState<
      "Active" | "Inactive" | "Invited"
    >("Active");

  useEffect(() => {
    if (!editingUser) {
      setName("");
      setEmail("");
      setRole("Lead Generator");
      setStatus("Active");
      return;
    }

    const timer = setTimeout(() => {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setRole(editingUser.role);
      setStatus(editingUser.status);
    }, 0);

    return () => clearTimeout(timer);
  }, [editingUser, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!name.trim() || !email.trim())
      return;

    onAddUser({
      name,
      email,
      role,
      status,
    });

    onClose();
  };

  return (
    <Modal>
      <div className="bg-white rounded-2xl p-6 w-[500px]">
        <h2 className="text-2xl font-bold mb-6">
          {editingUser
            ? "Edit User"
            : "Add User"}
        </h2>

        <div className="space-y-4">
          <Input
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <Input
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full border rounded-lg p-3"
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

            <option>
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
                  | "Invited"
              )
            }
            className="w-full border rounded-lg p-3"
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

        <div className="flex justify-end gap-3 mt-6">
          <Button
            className="bg-gray-200 text-black"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
          >
            {editingUser
              ? "Save Changes"
              : "Add User"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}