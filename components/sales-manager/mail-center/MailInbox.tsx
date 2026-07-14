import {
  Search,
  Trash2,
  RefreshCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Mail } from "@/app/(dashboard)/sales-manager/mail-center/page";

type MailInboxProps = {
  selectedMail?: Mail | null;
  onSelectMail: (mail: Mail) => void;
};

const mails: Mail[] = [
  {
    id: 1,
    sender: "Rahul Sharma",
    subject: "Discovery Call Scheduled",
    preview: "Hi Rahul meeting is scheduled on 26 May...",
    time: "10.06 AM",
  },
  {
    id: 2,
    sender: "Priya Mehta",
    subject: "Follow Up",
    preview:
      "Hi Priya looking forward to hear from you regarding the...",
    time: "10.06 AM",
  },
  {
    id: 3,
    sender: "Priya Mehta",
    subject: "Discovery Call Scheduled",
    preview: "Hi Rahul meeting is scheduled on 26 May...",
    time: "10.06 AM",
  },
  {
    id: 4,
    sender: "Priya Mehta",
    subject: "Follow Up",
    preview:
      "Hi Priya looking forward to hear from you regarding the...",
    time: "10.06 AM",
  },
  {
    id: 5,
    sender: "Priya Mehta",
    subject: "Discovery Call Scheduled",
    preview: "Hi Rahul meeting is scheduled on 26 May...",
    time: "10.06 AM",
  },
];

export default function MailInbox({
  selectedMail,
  onSelectMail,
}: MailInboxProps) {
  return (
    <div className="border-r border-[#D9D9D9] flex flex-col h-full">

      <div className="flex items-center justify-between px-5 py-5 border-b border-[#D9D9D9]">

        <h2 className="text-[22px] font-semibold text-[#222222]">
          Inbox (120)
        </h2>

        <div className="flex items-center gap-3">

          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search Mail..."
              className="w-[200px] h-[32px] border border-[#B8C0CC] rounded px-8 text-[12px] outline-none"
            />
          </div>

          <Trash2 size={15} />
          <RefreshCcw size={15} />

          <span className="text-[11px] text-[#666666]">
            1-5 of 1370
          </span>

          <ChevronLeft size={14} />
          <ChevronRight size={14} />

        </div>

      </div>

      <div className="flex-1 overflow-y-auto">

        {mails.map((mail, index) => (
          <div
            key={mail.id}
            onClick={() => onSelectMail(mail)}
            className={`flex items-center justify-between px-4 py-3 border-b border-[#ECECEC] cursor-pointer
              ${
                selectedMail?.id === mail.id || index === 0
                  ? "bg-[#DCE7F6]"
                  : ""
              }`}
          >

            <div className="flex items-center gap-4 flex-1">

              <input
                type="checkbox"
                className="w-4 h-4"
              />

              <p className="w-[140px] text-sm font-medium truncate">
                {mail.sender}
              </p>

              <p className="flex-1 text-sm truncate">
                <span className="font-medium">
                  {mail.subject}
                </span>
                {" - "}
                <span className="text-[#6B7280]">
                  {mail.preview}
                </span>
              </p>

            </div>

            <span className="text-xs text-[#6B7280]">
              {mail.time}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}