type LeadDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LeadDetailsModal({
  isOpen,
  onClose,
}: LeadDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white w-[800px] rounded-[28px] shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-8 py-6 border-b">
          <h2 className="text-2xl font-bold text-[#071B3B]">
            Lead Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between pb-6 border-b">
            <div>
              <h3 className="text-3xl font-bold text-[#071B3B]">
                ACME Technologies
              </h3>

              <p className="text-[#6B7280] mt-2">
                Rohan Mehta
              </p>
            </div>

            <span className="px-4 py-2 rounded-full bg-[#EEF4FF] text-[#2563EB] text-sm">
              New
            </span>
          </div>

          <div className="grid grid-cols-2 gap-10 py-8">
            <div className="space-y-4 text-sm">
              <p>
                <strong>Full Name:</strong> Rohan Mehta
              </p>

              <p>
                <strong>Company Name:</strong> ACME Technologies
              </p>

              <p>
                <strong>Email:</strong> rohan@acme.com
              </p>

              <p>
                <strong>Contact Number:</strong> +91 9876543210
              </p>

              <p>
                <strong>Website:</strong> www.acme.com
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <p>
                <strong>Industry:</strong> Technology
              </p>

              <p>
                <strong>Location:</strong> Bangalore
              </p>

              <p>
                <strong>Lead Source:</strong> LinkedIn
              </p>

              <p>
                <strong>Lead Owner:</strong> Varshini
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t">
            <button
              onClick={onClose}
              className="border border-[#D1D5DB] px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button className="bg-[#071B3B] text-white px-5 py-2 rounded-lg">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}