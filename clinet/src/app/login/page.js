// src/app/page.js (or page.tsx if TS)
"use client";

import Image from "next/image";
import { FaUser, FaLock, FaArrowRight, FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ username: "", password: "" });

    let hasError = false;

    if (!username.trim()) {
      setErrors((prev) => ({ ...prev, username: "Username is mandatory" }));
      hasError = true;
    }
    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: "Password is mandatory" }));
      hasError = true;
    }

    if (hasError) return;

    // If no error, simulate login
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/"); // ✅ Navigate to homepage
    }, 1500);
  };

  // 🔹 Handle input change + clear error live
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.trim() !== "") {
      setErrors((prev) => ({ ...prev, username: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim() !== "") {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md p-6 flex flex-col items-center">
        {/* Logo */}
        <Image src="/logo.png" alt="Fest.pro Logo" width={50} height={50} />

        {/* Title */}
        <h1 className="mt-4 text-xl font-medium text-[#10002B]">
          Login to <span className="font-bold">Fest.pro</span>
        </h1>

        {/* Form */}
        <form className="mt-8 w-full flex flex-col gap-4" onSubmit={handleClick}>
          {/* Username */}
          <div className="relative">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
              className={`peer w-full rounded-md border ${
                errors.username
                  ? "border-red-500"
                  : "border-[#3C096C]/20 hover:border-[#3C096C]/50 focus:border-2 focus:border-[#3C096C]"
              } px-4 py-3 pr-10 text-sm text-black focus:outline-none`}
            />
            <FaUser
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#10002B] 
               peer-focus:hidden peer-placeholder-shown:block hidden"
            />
          </div>
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
              className={`peer w-full rounded-md border ${
                errors.password
                  ? "border-red-500"
                  : "border-[#3C096C]/20 hover:border-[#3C096C]/50 focus:border-2 focus:border-[#3C096C]"
              } px-4 py-3 pr-10 text-sm text-black focus:outline-none`}
            />
            <FaLock
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#10002B] 
               peer-focus:hidden peer-placeholder-shown:block hidden"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}

          {/* Forgot Password */}
          <div className="flex justify-end text-xs">
            <a href="#" className="text-[#10002B]">
              Forgot Password ?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full rounded-md bg-[#10002B] py-3 text-white font-semibold flex items-center justify-center overflow-hidden disabled:opacity-70"
          >
            {/* Default Text */}
            {!loading && (
              <span className="group-hover:opacity-0 transition-opacity">
                Log in →
              </span>
            )}

            {/* Hover Icon (only visible on hover, if not loading) */}
            {!loading && (
              <FaArrowRight className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-125" />
            )}

            {/* Loading Spinner */}
            {loading && <FaSpinner className="animate-spin text-white text-lg" />}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-12 text-xs text-black">
          super powered by ⚡ <span className="font-bold">fest.pro</span>
        </p>
      </div>
    </div>
  );
}
