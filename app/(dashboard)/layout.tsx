import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header />
        {children}
      </main>
    </div>
  );
}