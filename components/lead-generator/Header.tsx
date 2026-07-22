"use client";

import { useEffect, useState } from "react";
import { Search, Bell, Menu } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({
  onMenuClick,
}: HeaderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-4 lg:px-8">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Mobile Hamburger */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>

        {/* Search */}
        <div className="relative w-[180px] sm:w-[250px] lg:w-[380px]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#071B3B]"
          />
        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 lg:gap-6">

        <Bell className="text-gray-600" size={22} />

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-[#071B3B] text-white flex items-center justify-center font-semibold">
            {user?.name?.charAt(0).toUpperCase() || "V"}
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold">
              {user?.name || "Varshini"}
            </h3>

            <p className="text-xs text-gray-500">
              {user?.email || "varshini@gmail.com"}
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}