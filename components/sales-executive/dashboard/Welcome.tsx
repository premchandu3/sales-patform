"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
    }
  }, []);

  return (
    <div>
      <h1 className="text-[32px] font-bold text-[#071B3B]">
        Welcome Back {userName}!
      </h1>

      <p className="mt-2 text-[#6B7280]">
        Manage leads, follow ups and discovery calls from one place.
      </p>
    </div>
  );
}