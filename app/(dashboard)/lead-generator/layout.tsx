import Sidebar from "@/components/lead-generator/Sidebar";
import Header from "@/components/lead-generator/Header";

export default function LeadGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex bg-[#F7F8FC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}