import SalesSidebar from "./SalesSidebar";
import SalesHeader from "./SalesHeader";

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <SalesSidebar />

      <div className="flex-1">
        <SalesHeader />

        <main className="px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}