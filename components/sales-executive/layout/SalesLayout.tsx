"use client";

import { useState } from "react";

import SalesSidebar from "./SalesSidebar";
import MobileSidebar from "./MobileSidebar";
import SalesHeader from "./SalesHeader";

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">

      <div className="hidden lg:block">
        <SalesSidebar />
      </div>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">

        <SalesHeader
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-6">
          {children}
        </main>

      </div>

    </div>
  );
}