import { Search } from "lucide-react";

export default function SalesHeader() {
  return (
    <header className="h-[72px] bg-[#F8FAFC] flex items-center justify-end px-8">
      <div className="flex items-center gap-8">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-[220px] h-[40px] pl-10 pr-4 rounded-lg border border-gray-300 bg-white outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#061B3A] text-white flex items-center justify-center">
            V
          </div>

          <div>
            <p className="text-sm font-semibold">
              Varshini
            </p>

            <p className="text-xs text-gray-500">
              varshini@gmail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}