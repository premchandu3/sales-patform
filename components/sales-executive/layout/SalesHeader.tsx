"use client";

import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface SalesHeaderProps {
  onMenuClick: () => void;
}

export default function SalesHeader({
  onMenuClick,
}: SalesHeaderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="h-[72px] bg-[#F8FAFC] border-b border-[#E5E7EB] flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-2xl md:text-[32px] font-bold text-[#111827]">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="relative hidden sm:block">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-[180px] md:w-[220px] h-[40px] pl-10 pr-4 rounded-lg border border-gray-300 bg-white outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#061B3A] text-white flex items-center justify-center font-semibold">
            {user?.name?.charAt(0).toUpperCase() || "V"}
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold">
              {user?.name || "Varshini"}
            </p>

            <p className="text-xs text-gray-500">
              {user?.email || "varshini@gmail.com"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}