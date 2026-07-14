type TeamDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function TeamDetailsModal({
  isOpen,
  onClose,
}: TeamDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-[850px] rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#EEF2F7]">
          <h2 className="text-[28px] font-bold text-[#071B3B]">
            Team Member Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-[#9CA3AF] hover:text-[#071B3B]"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          {/* Profile */}
          <div className="flex items-center justify-between border-b border-[#EEF2F7] pb-8">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-[#DCE7F6] flex items-center justify-center text-[#071B3B] text-3xl font-bold">
                V
              </div>

              <div>
                <h3 className="text-[30px] font-bold text-[#071B3B]">
                  Varshini
                </h3>

                <p className="text-[#6B7280] mt-1">
                  varshini@gmail.com
                </p>

                <p className="text-sm text-[#9CA3AF] mt-1">
                  Added on 20 Feb, 2026
                </p>
              </div>
            </div>

            <span className="px-4 py-2 rounded-full bg-[#DDF7E8] text-[#52C41A] text-sm font-medium">
              ● Active
            </span>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-12 py-8">
            <div className="space-y-5">
              <div>
                <p className="text-sm text-[#9CA3AF]">Name</p>
                <p className="font-medium text-[#374151]">
                  Varshini
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9CA3AF]">Email</p>
                <p className="font-medium text-[#374151]">
                  varshini@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9CA3AF]">Role</p>
                <p className="font-medium text-[#374151]">
                  Sales Manager
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-[#9CA3AF]">Status</p>
                <p className="font-medium text-[#374151]">
                  Active
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9CA3AF]">Department</p>
                <p className="font-medium text-[#374151]">
                  Sales
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9CA3AF]">Location</p>
                <p className="font-medium text-[#374151]">
                  Hyderabad
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 text-center">
              <h4 className="text-3xl font-bold text-[#071B3B]">
                120
              </h4>
              <p className="text-sm text-[#6B7280] mt-1">
                Assigned Leads
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 text-center">
              <h4 className="text-3xl font-bold text-[#071B3B]">
                45
              </h4>
              <p className="text-sm text-[#6B7280] mt-1">
                Follow Ups
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 text-center">
              <h4 className="text-3xl font-bold text-[#071B3B]">
                25
              </h4>
              <p className="text-sm text-[#6B7280] mt-1">
                Discovery Calls
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#EEF2F7]">
            <button
              onClick={onClose}
              className="px-5 py-2 border border-[#D1D5DB] rounded-lg text-[#374151]"
            >
              Close
            </button>

            <button className="px-5 py-2 bg-[#071B3B] text-white rounded-lg">
              Edit User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}