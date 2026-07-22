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

  const handleCreateDiscoveryCall =
    async () => {
      try {
        const response = await fetch(
          "/api/discovery-calls",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              leadId:
                followUp.leadId,
              meetingDate:
                followUp.followUpDate,
              meetingTime:
                followUp.followUpTime,
              meetingType:
                "Google Meet",
            }),
          }
        );

        if (response.ok) {
          alert(
            "Discovery Call Scheduled Successfully"
          );
        } else {
          alert(
            "Failed to Schedule Discovery Call"
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-[850px] rounded-2xl md:rounded-[28px] shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-5 md:px-8 py-5 md:py-6 border-b border-[#E5E7EB]">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#071B3B]">
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
              <h3 className="text-xl md:text-[24px] break-words font-bold text-[#071B3B]">
                {followUp.leadId}
              </h3>

              <p className="text-[#6B7280] mt-2">
                Follow Up Record
              </p>
            </div>

            <div className="flex items-center gap-3 self-start">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  followUp.status ===
                  "Completed"
                    ? "bg-[#DDF7E8] text-[#52C41A]"
                    : "bg-[#FFF3CD] text-[#F5B301]"
                }`}
              >
                {followUp.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 py-8 border-b border-[#E5E7EB]">
            <div>
              <h4 className="text-xl md:text-[22px] font-bold text-[#1F2937] mb-5">
                Follow Up Information
              </h4>

              <div className="space-y-3 text-sm text-[#374151]">
                <p>
                  <strong>Lead ID:</strong>{" "}
                  {followUp.leadId}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {followUp.followUpDate}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {followUp.followUpTime}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl md:text-[22px] font-bold text-[#1F2937] mb-5">
                Additional Details
              </h4>

              <div className="space-y-3 text-sm text-[#374151] break-words">
                <p>
                  <strong>Type:</strong>{" "}
                  {followUp.followUpType ||
                    "Call"}
                </p>

                <p>
                  <strong>Priority:</strong>{" "}
                  {followUp.priority ||
                    "Medium"}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {followUp.status}
                </p>

                <p>
                  <strong>Notes:</strong>{" "}
                  {followUp.notes ||
                    "No Notes"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4 pt-8">
            <button
              onClick={
                handleCreateDiscoveryCall
              }
              className="w-full sm:w-auto border border-[#D1D5DB] px-6 py-3 rounded-xl font-medium"
            >
              Schedule Discovery Call
            </button>

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