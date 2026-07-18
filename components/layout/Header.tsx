"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

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
    <header className="h-[64px] flex items-center justify-end px-10 bg-[#F7F8FC]">
      <div className="flex items-center gap-8">
        <input
          placeholder="Search..."
          className="
            w-[300px]
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

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#071B3B] text-white flex items-center justify-center text-xs font-medium">
            A
          </div>

          <div>
            <p className="text-[14px] font-semibold text-[#111827] leading-none">
              Admin
            </p>

            <p className="text-[11px] text-[#6B7280] mt-1">
              Admin@manvian.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}