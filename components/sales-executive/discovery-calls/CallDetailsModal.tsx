interface DiscoveryCall {
  _id: string;
  leadId: string;
  meetingDate: string;
  meetingTime: string;
  meetingType: string;
  status: string;
}

type CallDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  call: DiscoveryCall | null;
};

export default function CallDetailsModal({
  isOpen,
  onClose,
  call,
}: CallDetailsModalProps) {
  if (!isOpen || !call) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-[850px] rounded-2xl md:rounded-[28px] shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#E5E7EB]">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#071B3B]">
            Discovery Call Details
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F3F4F6] text-2xl text-gray-500"
          >
            ×
          </button>
        </div>

        <div className="p-5 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <div>
              <h3 className="text-xl md:text-[24px] font-bold text-[#071B3B] break-words">
                {call.leadId}
              </h3>

              <p className="text-[#6B7280] mt-2">
                Discovery Call Record
              </p>
            </div>

            <div className="self-start">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${call.status === "Completed"
                    ? "bg-[#DDF7E8] text-[#52C41A]"
                    : "bg-[#FFF3CD] text-[#F5B301]"
                  }`}
              >
                {call.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 py-8 border-b border-[#E5E7EB]">
            <div>
              <h4 className="text-xl md:text-[22px] font-bold text-[#1F2937] mb-5">
                Call Information
              </h4>

              <div className="space-y-3 text-sm text-[#374151] break-words">
                <p>
                  <strong>Lead ID:</strong> {call.leadId}
                </p>

                <p>
                  <strong>Meeting Date:</strong>{" "}
                  {call.meetingDate}
                </p>

                <p>
                  <strong>Meeting Time:</strong>{" "}
                  {call.meetingTime}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-[22px] font-bold text-[#1F2937] mb-5">
                Additional Details
              </h4>

              <div className="space-y-3 text-sm text-[#374151]">
                <p>
                  <strong>Meeting Type:</strong>{" "}
                  {call.meetingType}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {call.status}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end pt-8">
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#071B3B] text-white px-6 py-3 rounded-xl font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}