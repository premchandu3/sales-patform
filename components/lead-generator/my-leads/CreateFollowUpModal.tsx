"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  leadId: string;
  onCreated: () => void;
}

export default function CreateFollowUpModal({
  isOpen,
  onClose,
  leadId,
  onCreated,
}: Props) {
  const [followUpDate, setFollowUpDate] = useState("");
  const [followUpTime, setFollowUpTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCreate = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/followups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          leadId,
          followUpDate,
          followUpTime,
          notes,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create follow up");
      }

      alert("Follow Up Created Successfully");

      setFollowUpDate("");
      setFollowUpTime("");
      setNotes("");

      onCreated();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed To Create Follow Up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-[600px] p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Create Follow Up
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-2">
              Follow Up Date
            </label>

            <input
              type="date"
              value={followUpDate}
              onChange={(e) =>
                setFollowUpDate(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Follow Up Time
            </label>

            <input
              type="time"
              value={followUpTime}
              onChange={(e) =>
                setFollowUpTime(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Notes
            </label>

            <textarea
              rows={4}
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            disabled={loading}
            className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
          >
            {loading
              ? "Creating..."
              : "Create Follow Up"}
          </button>

        </div>

      </div>
    </div>
  );
}