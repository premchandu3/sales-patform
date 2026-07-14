import SalesManagerSidebar from "@/components/sales-manager/layout/SalesManagerSidebar";
import Header from "@/components/layout/Header";

export default function SalesManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <SalesManagerSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}