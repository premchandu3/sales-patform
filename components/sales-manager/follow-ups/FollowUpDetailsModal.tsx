interface FollowUp {
  _id: string;
  leadId: string;
  followUpType?: string;
  followUpDate: string;
  followUpTime: string;
  priority?: string;
  notes?: string;
  status: string;
}

type FollowUpDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  followUp: FollowUp | null;
};

export default function FollowUpDetailsModal({
  isOpen,
  onClose,
  followUp,
}: FollowUpDetailsModalProps) {
  if (!isOpen || !followUp) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative bg-white w-[95%] sm:w-[90%] md:w-[850px] rounded-2xl md:rounded-[28px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-5 md:px-8 py-5 md:py-6 border-b border-[#E5E7EB]">
          <h2 className="text-xl md:text-[28px] font-bold text-[#071B3B]">
            Follow Up Details
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
              <h3 className="text-xl md:text-[24px] font-bold text-[#071B3B]">
                {followUp.leadId}
              </h3>

              <p className="text-[#6B7280] mt-2">
                Follow Up Record
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  followUp.status === "Completed"
                    ? "bg-[#DDF7E8] text-[#52C41A]"
                    : "bg-[#FFF3CD] text-[#F5B301]"
                }`}
              >
                {followUp.status}
              </span>

              <button className="w-full sm:w-auto bg-[#071B3B] text-white px-5 py-2.5 rounded-[10px] text-sm font-medium whitespace-nowrap">
                View Lead Details
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 py-6 md:py-8 border-b border-[#E5E7EB]">
            <div>
              <h4 className="text-xl md:text-[22px] font-bold text-[#1F2937] mb-4 md:mb-5">
                Follow Up Information
              </h4>

              <div className="space-y-3 text-sm md:text-base text-[#374151]">
                <p>
                  <strong>Lead ID:</strong>{" "}
                  {followUp.leadId}
                </p>

                <p>
                  <strong>Follow Up Date:</strong>{" "}
                  {followUp.followUpDate}
                </p>

                <p>
                  <strong>Follow Up Time:</strong>{" "}
                  {followUp.followUpTime}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-[22px] font-bold text-[#1F2937] mb-5">
                Follow Up Details
              </h4>

              <div className="space-y-3 text-sm text-[#374151]">
                <p>
                  <strong>Type:</strong>{" "}
                  {followUp.followUpType || "Call"}
                </p>

                <p>
                  <strong>Priority:</strong>{" "}
                  {followUp.priority || "Medium"}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {followUp.status}
                </p>

                <p>
                  <strong>Note:</strong>{" "}
                  {followUp.notes || "No Notes"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 py-6 md:py-8 border-b border-[#E5E7EB]">
            <div>
              <label className="block text-sm md:text-base font-medium text-[#374151] mb-2">
                Outcome
              </label>

              <input
                type="text"
                placeholder="Enter outcome"
                className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium text-[#374151] mb-2">
                Next Follow Up Date
              </label>

              <input
                type="date"
                className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm md:text-base"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-6 md:pt-8">
            <button className="w-full sm:w-auto border border-[#D1D5DB] px-6 py-3 rounded-xl font-medium text-[#374151]">
              Schedule Discovery Call
            </button>

            <button className="w-full sm:w-auto bg-[#071B3B] text-white px-6 py-3 rounded-xl font-medium">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}