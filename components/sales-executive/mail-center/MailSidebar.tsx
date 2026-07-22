"use client";

import {
  Inbox,
  Send,
  FileText,
  Clock3,
  Trash2,
} from "lucide-react";

type MailSidebarProps = {
  activeFolder: string;
  setActiveFolder: (folder: string) => void;
};

const folders = [
  {
    name: "Inbox",
    count: 120,
    icon: Inbox,
  },
  {
    name: "Sent",
    count: 88,
    icon: Send,
  },
  {
    name: "Draft",
    count: 15,
    icon: FileText,
  },
  {
    name: "Scheduled",
    count: 5,
    icon: Clock3,
  },
  {
    name: "Trash",
    count: 9,
    icon: Trash2,
  },
];

export default function MailSidebar({
  activeFolder,
  setActiveFolder,
}: MailSidebarProps) {
  return (
    <div className="w-[330px] bg-white border-r border-[#E5E7EB] px-4 py-5">
      
      <button className="w-full h-[58px] rounded-xl bg-[#071B3B] text-white text-[16px] font-semibold hover:opacity-95 transition">
        Compose Email
      </button>

      <div className="mt-8">
        <h3 className="text-[18px] font-semibold text-[#111827] mb-5">
          Folders
        </h3>

        <div className="space-y-2">
          {folders.map((folder) => {
            const Icon = folder.icon;

            return (
              <button
                key={folder.name}
                onClick={() =>
                  setActiveFolder(folder.name)
                }
                className={`w-full flex items-center justify-between px-4 h-[52px] rounded-xl transition-all ${
                  activeFolder === folder.name
                    ? "bg-[#DDE7F5] text-[#071B3B] font-semibold"
                    : "text-[#4B5563] hover:bg-[#F5F7FB]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />

                  <span className="text-[15px]">
                    {folder.name}
                  </span>
                </div>

                <span className="text-[13px]">
                  {folder.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}