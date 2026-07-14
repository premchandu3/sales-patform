import SalesLayout from "@/components/sales-executive/layout/SalesLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SalesLayout>{children}</SalesLayout>;
}