"use client";

export default function ComposeEmail() {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
      
      {/* Header */}
      <div className="px-8 py-6 border-b border-[#E5E7EB]">
        <h2 className="text-[28px] font-bold text-[#071B3B]">
          Compose Email
        </h2>
      </div>

      {/* Form */}
      <div className="p-8">

        <div className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-[#374151] mb-2">
              To
            </label>

            <input
              type="email"
              placeholder="recipient@example.com"
              className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#374151] mb-2">
                Cc
              </label>

              <input
                type="email"
                placeholder="cc@example.com"
                className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#374151] mb-2">
                Bcc
              </label>

              <input
                type="email"
                placeholder="bcc@example.com"
                className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#374151] mb-2">
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter email subject"
              className="w-full h-12 border border-[#D1D5DB] rounded-xl px-4 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#374151] mb-2">
              Message
            </label>

            <textarea
              rows={16}
              placeholder="Write your message here..."
              className="w-full border border-[#D1D5DB] rounded-xl p-4 resize-none text-sm"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#E5E7EB]">

          <button className="px-6 py-3 rounded-xl border border-[#D1D5DB] font-medium text-[#374151]">
            Save Draft
          </button>

          <button className="px-6 py-3 rounded-xl border border-[#071B3B] text-[#071B3B] font-medium">
            Schedule
          </button>

          <button className="px-6 py-3 rounded-xl bg-[#071B3B] text-white font-medium">
            Send Email
          </button>

        </div>
      </div>
    </div>
  );
}