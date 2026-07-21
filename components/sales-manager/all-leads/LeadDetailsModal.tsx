interface Lead {
  _id: string;
  contactPersonName: string;
  companyName: string;
  email?: string;
  phoneNumber?: string;
  website?: string;
  industry?: string;
  location?: string;
  leadSource?: string;
  leadOwner?: string;
  status?: string;
}

type LeadDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead | null;
};

export default function LeadDetailsModal({
  isOpen,
  onClose,
  lead,
}: LeadDetailsModalProps) {
  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white w-[95%] sm:w-[90%] md:w-[800px] rounded-2xl md:rounded-[28px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-5 md:px-8 py-5 md:py-6 border-b">
          <h2 className="text-xl md:text-2xl font-bold text-[#071B3B]">
            Lead Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="p-5 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#071B3B]">
                {lead.companyName}
              </h3>

              <p className="text-[#6B7280] mt-2">
                {lead.contactPersonName}
              </p>
            </div>

            <span
              className={`inline-flex px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                lead.status === "New"
                  ? "bg-[#EEF4FF] text-[#2563EB]"
                  : "bg-[#DDF7E8] text-[#27AE60]"
              }`}
            >
              {lead.status || "New"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-6 md:py-8">
            <div className="space-y-4 text-sm md:text-base">
              <p>
                <strong>Full Name:</strong>{" "}
                {lead.contactPersonName}
              </p>

              <p>
                <strong>Company Name:</strong>{" "}
                {lead.companyName}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {lead.email || "-"}
              </p>

              <p>
                <strong>Contact Number:</strong>{" "}
                {lead.phoneNumber || "-"}
              </p>

              <p>
                <strong>Website:</strong>{" "}
                {lead.website || "-"}
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <p>
                <strong>Industry:</strong>{" "}
                {lead.industry || "-"}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {lead.location || "-"}
              </p>

              <p>
                <strong>Lead Source:</strong>{" "}
                {lead.leadSource || "-"}
              </p>

              <p>
                <strong>Lead Owner:</strong>{" "}
                {lead.leadOwner || "-"}
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-6 border-t">
            <button
              onClick={onClose}
              className="w-full sm:w-auto border border-[#D1D5DB] px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button className="w-full sm:w-auto bg-[#071B3B] text-white px-5 py-2 rounded-lg">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}