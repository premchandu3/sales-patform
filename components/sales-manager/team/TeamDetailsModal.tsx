interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

type TeamDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
};

export default function TeamDetailsModal({
  isOpen,
  onClose,
  user,
}: TeamDetailsModalProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-[850px] rounded-3xl shadow-2xl overflow-hidden">
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
                {user.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3 className="text-[30px] font-bold text-[#071B3B]">
                  {user.name}
                </h3>

                <p className="text-[#6B7280] mt-1">
                  {user.email}
                </p>
              </div>
            </div>

            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                user.status === "Active"
                  ? "bg-[#DDF7E8] text-[#52C41A]"
                  : user.status === "Invited"
                  ? "bg-[#FFF3CD] text-[#F5B301]"
                  : "bg-[#FFE9E6] text-[#FF6B35]"
              }`}
            >
              ● {user.status}
            </span>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-12 py-8">
            <div className="space-y-5">
              <div>
                <p className="text-sm text-[#9CA3AF]">
                  Name
                </p>
                <p className="font-medium text-[#374151]">
                  {user.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9CA3AF]">
                  Email
                </p>
                <p className="font-medium text-[#374151]">
                  {user.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9CA3AF]">
                  Role
                </p>
                <p className="font-medium text-[#374151]">
                  {user.role}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-[#9CA3AF]">
                  Status
                </p>
                <p className="font-medium text-[#374151]">
                  {user.status}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9CA3AF]">
                  Department
                </p>
                <p className="font-medium text-[#374151]">
                  Sales
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9CA3AF]">
                  Location
                </p>
                <p className="font-medium text-[#374151]">
                  -
                </p>
              </div>
            </div>
          </div>

          {/* Stats Placeholder */}
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 text-center">
              <h4 className="text-3xl font-bold text-[#071B3B]">
                -
              </h4>
              <p className="text-sm text-[#6B7280] mt-1">
                Assigned Leads
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 text-center">
              <h4 className="text-3xl font-bold text-[#071B3B]">
                -
              </h4>
              <p className="text-sm text-[#6B7280] mt-1">
                Follow Ups
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 text-center">
              <h4 className="text-3xl font-bold text-[#071B3B]">
                -
              </h4>
              <p className="text-sm text-[#6B7280] mt-1">
                Discovery Calls
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#EEF2F7]">
            <button
              onClick={onClose}
              className="px-5 py-2 border border-[#D1D5DB] rounded-lg text-[#374151]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}