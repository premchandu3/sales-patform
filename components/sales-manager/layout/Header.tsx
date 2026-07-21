"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      localStorage.removeItem("user");

      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Logout failed");
    }
  }

  return (
    <header className="h-[64px] bg-[#F7F8FC] border-b border-[#E5E7EB] flex items-center px-4 lg:px-10">

     
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
      >
        <Menu size={24} />
      </button>

     
      <div className="ml-auto flex items-center gap-4 lg:gap-8">

        <input
          placeholder="Search..."
          className="
            w-[180px]
            md:w-[250px]
            lg:w-[300px]
            h-[38px]
            border
            border-[#CBD5E1]
            rounded-md
            px-3
            text-[12px]
            bg-white
            outline-none
          "
        />

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-[#071B3B] text-white flex items-center justify-center text-xs font-semibold">
            {user?.name?.charAt(0).toUpperCase() || "A"}
          </div>

          <div className="hidden md:block">
            <p className="text-[14px] font-semibold text-[#111827]">
              {user?.name || "Admin"}
            </p>

            <p className="text-[11px] text-[#6B7280]">
              {user?.email || "admin@manvian.com"}
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}