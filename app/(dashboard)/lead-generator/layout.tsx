"use client";

import { useState } from "react";

import Sidebar from "@/components/lead-generator/Sidebar";
import MobileSidebar from "@/components/lead-generator/MobileSidebar";
import Header from "@/components/lead-generator/Header";

export default function LeadGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-[#F7F8FC] overflow-hidden">

      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}