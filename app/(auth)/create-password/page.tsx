"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function CreatePasswordPage() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const handleSubmit = () => {
    if (
      password !==
      confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    alert("Account Created");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#5c6678_0%,#00153f_45%,#000b24_100%)]">
      <div className="bg-white w-[450px] rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800">
          Create Your Password
        </h1>

        <p className="text-gray-500 text-sm mt-2 mb-8">
          Please set your password to activate your
          account.
        </p>

        <div className="space-y-5">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border-b border-gray-300 outline-none py-2"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border-b border-gray-300 outline-none py-2"
          />

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
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
              className="absolute right-2 top-3 text-gray-400"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <div className="relative">
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="w-full border-b border-gray-300 outline-none py-2 pr-10"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-2 top-3 text-gray-400"
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#001B4E] text-white py-3 rounded-md font-medium mt-4"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}