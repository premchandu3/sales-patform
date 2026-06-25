"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(
        "Password reset email sent successfully."
      );

      router.push("/login");
    } catch (error) {
      console.error(error);

      alert(
        "Failed to send reset email."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#5c6678_0%,#00153f_45%,#000b24_100%)]">
      <div className="bg-white w-[420px] rounded-2xl p-8 shadow-xl">

        <h1 className="text-4xl font-bold text-gray-800">
          Forgot Password
        </h1>

        <p className="text-gray-500 text-sm mt-2 mb-8">
          Enter your registered email to receive a password reset link.
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
                setEmail(e.target.value)
              }
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#001B4E] text-white py-3 rounded-md font-medium"
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}
          </button>

        </div>
      </div>
    </div>
  );
}