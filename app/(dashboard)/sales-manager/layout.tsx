"use client";

import { useState } from "react";

import SalesManagerSidebar from "@/components/sales-manager/layout/SalesManagerSidebar";
import Header from "@/components/sales-manager/layout/Header";

export default function SalesManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <SalesManagerSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuClick={() =>
            setIsSidebarOpen(true)
          }
        />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}