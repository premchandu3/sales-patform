type CallDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CallDetailsModal({
  isOpen,
  onClose,
}: CallDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative bg-white w-[900px] rounded-[28px] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#E5E7EB]">
          <h2 className="text-[28px] font-bold text-[#071B3B]">
            Discovery Call Details
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F3F4F6] text-2xl text-gray-500"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          {/* Company Info */}
          <div className="pb-8 border-b border-[#E5E7EB]">
            <h3 className="text-[22px] font-bold text-[#071B3B] mb-5">
              Company Information
            </h3>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-3">
                <p>
                  <strong>Company Name:</strong> ACME Technologies
                </p>

                <p>
                  <strong>Contact Person:</strong> Rohan Mehta
                </p>

                <p>
                  <strong>Phone Number:</strong> +91 9876543210
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  <strong>Email:</strong> rohan@acme.com
                </p>

                <p>
                  <strong>Industry:</strong> IT Services
                </p>

                <p>
                  <strong>Location:</strong> Bangalore
                </p>
              </div>
            </div>
          </div>

          {/* Meeting Details */}
          <div className="py-8 border-b border-[#E5E7EB]">
            <h3 className="text-[22px] font-bold text-[#071B3B] mb-5">
              Meeting Details
            </h3>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-3">
                <p>
                  <strong>Meeting Type:</strong> Google Meet
                </p>

                <p>
                  <strong>Date:</strong> 20 Jul 2026
                </p>

                <p>
                  <strong>Time:</strong> 04:00 PM
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  <strong>Assigned Executive:</strong> Varshini
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span className="px-2 py-1 rounded-full text-xs bg-[#FFF3CD] text-[#F5B301]">
                    Scheduled
                  </span>
                </p>

                <p>
                  <strong>Meeting Link:</strong>{" "}
                  https://meet.google.com/demo
                </p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="py-8 border-b border-[#E5E7EB]">
            <h3 className="text-[22px] font-bold text-[#071B3B] mb-5">
              Discussion Notes
            </h3>

            <textarea
              rows={4}
              placeholder="Enter discussion summary..."
              className="w-full border border-[#D1D5DB] rounded-xl p-4 text-sm resize-none"
            />
          </div>

          {/* Next Action */}
          <div className="py-8">
            <h3 className="text-[22px] font-bold text-[#071B3B] mb-5">
              Next Action
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Follow Up Date
                </label>

                <input
                  type="date"
                  className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Outcome
                </label>

                <input
                  type="text"
                  placeholder="Enter outcome"
                  className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 pt-4 border-t border-[#E5E7EB]">
            <button className="border border-[#D1D5DB] px-6 py-3 rounded-xl font-medium">
              Reschedule
            </button>

            <button className="bg-[#071B3B] text-white px-6 py-3 rounded-xl font-medium">
              Mark As Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}