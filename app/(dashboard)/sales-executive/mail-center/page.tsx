"use client";

import { useState } from "react";

import MailSidebar from "@/components/sales-executive/mail-center/MailSidebar";
import MailList from "@/components/sales-executive/mail-center/MailList";
import MailView from "@/components/sales-executive/mail-center/MailView";

export default function MailCenterPage() {
  const [activeFolder, setActiveFolder] =
    useState("Inbox");

  return (
    <div className="h-[calc(100vh-120px)] bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
      <div className="flex h-full">
        <MailSidebar
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        />

        <div className="w-[48%]">
          <MailList activeFolder={activeFolder} />
        </div>

        <div className="w-[52%]">
          <MailView />
        </div>
      </div>
    </div>
  );
}