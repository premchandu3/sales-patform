import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Lead } from "@/types/lead";

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (lead: Omit<Lead, "id">) => void;
}

export default function AddLeadModal({
  isOpen,
  onClose,
  onSave,
}: AddLeadModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = () => {
    onSave({
      name,
      company,
      email,
      phone,
      status: "New",
      source: "Manual",
      assignedTo: "Unassigned",
      createdAt: new Date().toISOString().split("T")[0],
    });

    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Lead"
    >
      <div className="space-y-4">
        <Input
          placeholder="Lead Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
}