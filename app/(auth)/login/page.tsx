"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  async function handleLogin() {
    try {
      setLoading(true);

      const response =
        await fetch(
          "/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      router.push(
        "/admin/dashboard"
      );
    } catch (error) {
      console.error(error);

      alert("Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#5c6678_0%,#00153f_45%,#000b24_100%)]">
      <div className="bg-white w-[420px] rounded-2xl p-8 shadow-xl">

        <h1 className="text-4xl font-bold text-gray-800">
          Welcome Back!
        </h1>

        <p className="text-gray-500 text-sm mt-2 mb-8">
          Login to your account &
          continue
        </p>

        <div className="space-y-6">

          <div>
            <label className="text-xs text-gray-500">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full border-b border-gray-300 outline-none py-2 pr-10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-0 top-2 text-gray-400"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>
          </div>

          <div className="text-right">
            <button className="text-xs text-gray-500 hover:text-gray-700">
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#001B4E] text-white py-3 rounded-md font-medium"
          >
            {loading
              ? "Logging In..."
              : "Continue"}
          </button>

        </div>

      </div>
    </div>
  );
}