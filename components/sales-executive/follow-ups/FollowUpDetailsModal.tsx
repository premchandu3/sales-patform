type FollowUpDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FollowUpDetailsModal({
  isOpen,
  onClose,
}: FollowUpDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative bg-white w-[850px] rounded-[28px] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#E5E7EB]">
          <h2 className="text-[28px] font-bold text-[#071B3B]">
            Follow Up Details
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F3F4F6] text-2xl text-gray-500"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          {/* Company Header */}
          <div className="flex items-start justify-between pb-6 border-b border-[#E5E7EB]">
            <div>
              <h3 className="text-[24px] font-bold text-[#071B3B]">
                ACME Technologies
              </h3>

              <p className="text-[#6B7280] mt-2">
                Rohan Mehta
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FFF3CD] text-[#F5B301]">
                Pending
              </span>

              <button className="bg-[#071B3B] text-white px-5 py-2.5 rounded-[10px] text-sm font-medium">
                View Lead Details
              </button>
            </div>
          </div>

          {/* Section 1 */}
          <div className="grid grid-cols-2 gap-14 py-8 border-b border-[#E5E7EB]">
            <div>
              <h4 className="text-[22px] font-bold text-[#1F2937] mb-5">
                Basic Details
              </h4>

              <div className="space-y-3 text-sm text-[#374151]">
                <p><strong>Business Type:</strong> IT Services</p>
                <p><strong>Industry Category:</strong> Technology</p>
                <p><strong>Address:</strong> 5th Floor, MG Road, Bangalore</p>
                <p><strong>Location:</strong> Bangalore</p>
                <p><strong>Phone Number:</strong> +91 9876543210</p>
                <p><strong>Email ID:</strong> rohan.mehta@acmetech.com</p>
                <p><strong>Website:</strong> www.acmetech.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-[22px] font-bold text-[#1F2937] mb-5">
                Follow Up Details
              </h4>

              <div className="space-y-3 text-sm text-[#374151]">
                <p><strong>Follow Up Date:</strong> 20 May 2026</p>
                <p><strong>Follow Up Type:</strong> Cold Call</p>

                <p>
                  <strong>Priority:</strong>{" "}
                  <span className="text-[#E67E22] font-medium">
                    High
                  </span>
                </p>

                <p><strong>Follow Up Owner:</strong> Sajaa</p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span className="px-2 py-1 rounded-full text-xs bg-[#FFF3CD] text-[#F5B301]">
                    Pending
                  </span>
                </p>

                <p><strong>Note:</strong> Follow up scheduled with prospect.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-2 gap-8 py-8 border-b border-[#E5E7EB]">
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Outcome
              </label>

              <input
                type="text"
                placeholder="Enter outcome"
                className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Next Follow Up Date
              </label>

              <input
                type="date"
                className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 pt-8">
            <button className="border border-[#D1D5DB] px-6 py-3 rounded-xl font-medium text-[#374151]">
              Schedule Discovery Call
            </button>

            <button className="bg-[#071B3B] text-white px-6 py-3 rounded-xl font-medium">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}