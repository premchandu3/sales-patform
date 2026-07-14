"use client";

import { useState } from "react";

import MailSidebar from "@/components/sales-manager/mail-center/MailSidebar";
import MailInbox from "@/components/sales-manager/mail-center/MailInbox";
import MailViewer from "@/components/sales-manager/mail-center/MailViewer";

export type Mail = {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  time: string;
};

export default function MailCenterPage() {
  const [selectedFolder, setSelectedFolder] =
    useState("Inbox");

  const [selectedMail, setSelectedMail] =
    useState<Mail | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[48px] font-bold text-[#071B3B]">
          Mail Center
        </h1>

        <p className="text-[#6B7280] mt-2">
          Manage email communication
        </p>
      </div>

      <div className="bg-white border border-[#D9D9D9] overflow-hidden h-[720px]">
        <div className="grid grid-cols-[150px_1fr] h-full">

          <MailSidebar
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
          />

          {selectedMail ? (
            <MailViewer
              selectedMail={selectedMail}
              onBack={() => setSelectedMail(null)}
            />
          ) : (
            <MailInbox
              onSelectMail={setSelectedMail}
            />
          )}

        </div>
      </div>
    </div>
  );
}