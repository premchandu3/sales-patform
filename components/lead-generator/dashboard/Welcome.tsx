"use client";

import { useEffect, useState } from "react";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const parsedUser = JSON.parse(user);
      setUserName(parsedUser.name);
    }
  }, []);

  return (
    <div className="mb-8">
      <h1 className="text-[36px] font-bold text-[#111827]">
        Dashboard
      </h1>

      <div className="mt-6">
        <h2 className="text-[32px] font-semibold text-[#111827]">
          Welcome Back {userName}!
        </h2>

        <p className="mt-2 text-[16px] text-[#6B7280]">
          Create & manage leads effortlessly.
        </p>
      </div>
    </div>
  );
}