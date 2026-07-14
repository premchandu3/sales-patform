"use client";

import {
  ArrowLeft,
  Reply,
  Forward,
  Trash2,
} from "lucide-react";

import { Mail } from "@/app/(dashboard)/sales-manager/mail-center/page";

type MailViewerProps = {
  selectedMail: Mail;
  onBack: () => void;
};

export default function MailViewer({
  selectedMail,
  onBack,
}: MailViewerProps) {
  if (!selectedMail) {
    return (
      <div className="flex items-center justify-center h-full text-[#9CA3AF]">
        Select an email
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto px-8 py-8">

      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-full bg-[#071B3B] text-white flex items-center justify-center">
            <ArrowLeft size={16} />
          </button>

          <span className="text-[18px] font-semibold text-[#071B3B]">
            Back
          </span>
        </div>

        <div className="flex items-center gap-8 text-[#6B7280]">

          <button className="flex items-center gap-2 text-sm">
            <Reply size={15} />
            Reply
          </button>

          <button className="flex items-center gap-2 text-sm">
            <Forward size={15} />
            Forward
          </button>

          <button className="flex items-center gap-2 text-sm">
            <Trash2 size={15} />
            Delete
          </button>

        </div>

      </div>

      <h2 className="text-[28px] font-semibold text-[#333333] mb-8">
        {selectedMail.subject}
      </h2>

      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-[#071B3B] text-white flex items-center justify-center">
            S
          </div>

          <div>
            <p className="font-semibold">
              Sajaa
            </p>

            <p className="text-sm text-[#777777]">
              sajaa@gmail.com
            </p>

            <p className="text-sm text-[#777777]">
              To rohan
            </p>
          </div>

        </div>

        <span className="text-sm text-[#777777]">
          10.06 AM (2 Hours Ago)
        </span>

      </div>

      <div className="text-[15px] leading-8 text-[#4B5563]">

        <p>Hi Rohan,</p>

        <br />

        <p>
          Thank you for your interest and for
          connecting with us.
        </p>

        <br />

        <p>
          Your discovery call has been scheduled
          successfully. Please find the details below:
        </p>

        <br />

        <p>
          Date: <strong>24 May 2026</strong>
          <br />
          Time: <strong>04:00 PM – 04:30 PM</strong>
          <br />
          Meeting Type: <strong>Google Meet</strong>
          <br />
          Meeting Link:
          <span className="text-blue-500 underline ml-1">
            meet.google.com/abc-defg-hijk
          </span>
        </p>

        <br />

        <p className="font-semibold">
          Agenda:
        </p>

        <p>
          • Requirement discussion
          <br />
          • Project scope understanding
          <br />
          • Business goals and expectations
          <br />
          • Next steps discussion
        </p>

        <br />

        <p>
          Please let us know if you would like to
          reschedule.
          <br />
          Looking forward to speaking with you.
        </p>

        <br />

        <p>
          Best Regards,
          <br />
          Sajaa
          <br />
          Sales Executive
          <br />
          ABC Company
        </p>

      </div>

    </div>
  );
}