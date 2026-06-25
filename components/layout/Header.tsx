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
    <header className="h-[70px] flex items-center justify-end px-4 md:px-8 bg-[#F7F8FC]">
      <div className="flex items-center gap-3 md:gap-8">
        <input
          placeholder="Search..."
          className="
            w-[120px]
            md:w-[180px]
            h-[32px]
            border
            border-[#C8D2E1]
            rounded-md
            px-3
            text-[12px]
            bg-white
            outline-none
          "
        />

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#071B3B] text-white flex items-center justify-center text-xs font-medium">
            A
          </div>

          <div>
            <p className="text-[13px] font-semibold text-[#111827] leading-none">
              Admin
            </p>

            <p className="text-[10px] text-[#6B7280] mt-1">
              Admin@manvian.com
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}