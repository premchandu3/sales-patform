"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { Lead } from "@/mock/leads";

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (
    lead: Omit<Lead, "id">
  ) => void;
  editingLead?: Lead | null;
}

export default function AddLeadModal({
  isOpen,
  onClose,
  onAddLead,
  editingLead,
}: AddLeadModalProps) {
  const [name, setName] =
    useState("");

  const [company, setCompany] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [status, setStatus] =
    useState<
      | "New"
      | "Contacted"
      | "Qualified"
      | "Lost"
    >("New");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (editingLead) {
        setName(editingLead.name);
        setCompany(
          editingLead.company
        );
        setEmail(editingLead.email);
        setPhone(editingLead.phone);
        setStatus(
          editingLead.status
        );
      } else {
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setStatus("New");
      }
    }, 0);

    return () =>
      clearTimeout(timer);
  }, [editingLead, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !company.trim() ||
      !email.trim()
    )
      return;

    onAddLead({
      name,
      company,
      email,
      phone,
      status,
    });

    onClose();
  };

  return (
    <Modal>
      <div className="bg-white rounded-xl p-6 w-[500px]">
        <h2 className="text-xl font-bold mb-4">
          {editingLead
            ? "Edit Lead"
            : "Add Lead"}
        </h2>

        <div className="space-y-4">
          <Input
            placeholder="Lead Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <Input
            placeholder="Company"
            value={company}
            onChange={(e) =>
              setCompany(
                e.target.value
              )
            }
          />

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <Input
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as
                  | "New"
                  | "Contacted"
                  | "Qualified"
                  | "Lost"
              )
            }
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="New">
              New
            </option>

            <option value="Contacted">
              Contacted
            </option>

            <option value="Qualified">
              Qualified
            </option>

            <option value="Lost">
              Lost
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
              {editingLead
                ? "Update"
                : "Add Lead"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}