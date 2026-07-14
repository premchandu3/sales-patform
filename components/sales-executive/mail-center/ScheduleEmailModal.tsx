type ScheduleEmailModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ScheduleEmailModal({
  isOpen,
  onClose,
}: ScheduleEmailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative w-[560px] bg-white rounded-[28px] shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#E5E7EB]">
          <h2 className="text-[28px] font-bold text-[#071B3B]">
            Schedule Email
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F3F4F6] text-2xl text-gray-500"
          >
            ×
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#374151] mb-2">
              Schedule Date
            </label>

            <input
              type="date"
              className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#374151] mb-2">
              Schedule Time
            </label>

            <input
              type="time"
              className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#374151] mb-2">
              Time Zone
            </label>

            <select className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm">
              <option>Asia/Kolkata (IST)</option>
              <option>UTC</option>
              <option>America/New_York</option>
              <option>Europe/London</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 px-8 py-6 border-t border-[#E5E7EB]">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl border border-[#D1D5DB] font-medium text-[#374151]"
          >
            Cancel
          </button>

          <button className="px-6 py-3 rounded-xl bg-[#071B3B] text-white font-medium">
            Schedule Email
          </button>
        </div>
      </div>
    </div>
  );
}