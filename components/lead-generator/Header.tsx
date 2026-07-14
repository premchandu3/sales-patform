"use client";

import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">


      <div className="relative w-[380px]">
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


      <div className="flex items-center gap-6">

        <Bell className="text-gray-600" size={22} />

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-[#071B3B] text-white flex items-center justify-center font-semibold">
            V
          </div>

          <div>
            <h3 className="font-semibold">Varshini</h3>

            <p className="text-xs text-gray-500">
              varshini@gmail.com
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}