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

      <div className="relative bg-white w-[900px] rounded-[28px] shadow-2xl overflow-hidden">
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
          <div className="pb-8 border-b border-[#E5E7EB]">
            <h3 className="text-[22px] font-bold text-[#071B3B] mb-5">
              Discovery Call Information
            </h3>

            <div className="space-y-4 text-sm">
              <p>
                <strong>Lead ID:</strong>{" "}
                {call.leadId}
              </p>

              <p>
                <strong>Meeting Type:</strong>{" "}
                {call.meetingType}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {call.meetingDate}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {call.meetingTime}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    call.status === "Scheduled"
                      ? "bg-[#FFF3CD] text-[#F5B301]"
                      : "bg-[#DDF7E8] text-[#52C41A]"
                  }`}
                >
                  {call.status}
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <button
              onClick={onClose}
              className="bg-[#071B3B] text-white px-6 py-3 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}