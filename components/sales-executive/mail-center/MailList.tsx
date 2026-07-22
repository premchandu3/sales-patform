"use client";

import { Search, RefreshCw, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";

type MailListProps = {
  activeFolder: string;
};

const mails = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: i % 2 === 0 ? "Rahul Sharma" : "Priya Mehta",
  subject:
    i % 2 === 0
      ? "Discovery Call Scheduled"
      : "Follow Up",
  preview:
    i % 2 === 0
      ? "Hi Rahul meeting is scheduled on 26 May..."
      : "Hi Priya looking forward to hear from you regarding...",
  time: "10:06 AM",
}));

export default function MailList({
  activeFolder,
}: MailListProps) {
  return (
    <div className="flex-1 bg-white">
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <h2 className="font-semibold text-lg">
          {activeFolder} (120)
        </h2>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Mail..."
              className="h-10 w-[220px] border rounded-md pl-9 pr-3 text-sm"
            />
          </div>

          <RefreshCw
            size={18}
            className="cursor-pointer text-gray-500"
          />

          <span className="text-xs text-gray-500">
            1-5 of 1370
          </span>

          <ChevronLeft
            size={18}
            className="cursor-pointer"
          />

          <ChevronRight
            size={18}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div>
        {mails.map((mail) => (
          <div
            key={mail.id}
            className="flex items-center gap-4 px-4 py-3 border-b hover:bg-[#F8FAFC] cursor-pointer"
          >
            <input type="checkbox" />

            <div className="w-[150px] text-sm font-medium">
              {mail.name}
            </div>

            <div className="flex-1 text-sm truncate">
              <span className="font-semibold">
                {mail.subject}
              </span>
              {" - "}
              <span className="text-gray-500">
                {mail.preview}
              </span>
            </div>

            <div className="text-xs text-gray-500">
              {mail.time}
            </div>

            {activeFolder === "Trash" && (
              <Trash2
                size={16}
                className="text-red-500"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}