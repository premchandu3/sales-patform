"use client";

import { ArrowLeft, Reply, Forward, Trash2 } from "lucide-react";

export default function MailView() {
  return (
    <div className="flex-1 bg-white border-l border-[#E5E7EB]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <button className="flex items-center gap-2 text-sm font-medium text-[#071B3B]">
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex items-center gap-4">
          <Reply size={18} className="cursor-pointer" />
          <Forward size={18} className="cursor-pointer" />
          <Trash2 size={18} className="cursor-pointer text-red-500" />
        </div>
      </div>

      {/* Mail Content */}
      <div className="p-8">
        <h1 className="text-2xl font-bold text-[#071B3B]">
          Discovery Call Scheduled
        </h1>

        <div className="mt-6 flex items-start justify-between">
          <div>
            <p className="font-semibold">
              Sajaa CRM Team
            </p>

            <p className="text-sm text-gray-500">
              to Rohan Mehta
            </p>
          </div>

          <span className="text-sm text-gray-500">
            Jul 20, 2026 • 10:06 AM
          </span>
        </div>

        <div className="mt-8 space-y-4 text-[#374151] leading-7">
          <p>
            Hi Rohan,
          </p>

          <p>
            We have successfully scheduled your
            discovery call.
          </p>

          <p>
            Meeting Date: 20 July 2026
          </p>

          <p>
            Meeting Time: 4:00 PM IST
          </p>

          <p>
            Meeting Link:
            https://meet.google.com/demo
          </p>

          <p>
            Looking forward to speaking with you.
          </p>

          <p>
            Regards,
            <br />
            Sajaa CRM Team
          </p>
        </div>
      </div>
    </div>
  );
}