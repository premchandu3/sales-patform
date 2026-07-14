"use client";

import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lead: any;
  onUpdated: () => void;
}

export default function EditLeadModal({
  isOpen,
  onClose,
  lead,
  onUpdated,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (lead) {
      setCompanyName(lead.companyName || "");
      setContactPersonName(lead.contactPersonName || "");
      setPhoneNumber(lead.phoneNumber || "");
      setEmail(lead.email || "");
    }
  }, [lead]);

  if (!isOpen || !lead) return null;

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/api/leads/${lead._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          contactPersonName,
          phoneNumber,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update lead");
      }

      alert("Lead Updated Successfully");

      onUpdated();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed To Update Lead");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-[700px] p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Edit Lead
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
            className="border rounded-lg p-3"
          />

          <input
            value={contactPersonName}
            onChange={(e) => setContactPersonName(e.target.value)}
            placeholder="Contact Person"
            className="border rounded-lg p-3"
          />

          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="border rounded-lg p-3"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border rounded-lg p-3"
          />

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
          >
            {loading ? "Updating..." : "Update Lead"}
          </button>

        </div>

      </div>
    </div>
  );
}