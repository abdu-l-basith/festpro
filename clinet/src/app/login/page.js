"use client";

import Image from "next/image";
import { FaUser, FaLock, FaArrowRight, FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(username, password);
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md p-6 flex flex-col items-center">
        <Image src="/logo.png" alt="Fest.pro Logo" width={50} height={50} />
        <h1 className="mt-4 text-xl font-medium text-[#10002B]">
          Login to <span className="font-bold">Fest.pro</span>
        </h1>

        <form className="mt-8 w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border px-4 py-3 text-sm text-black"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border px-4 py-3 text-sm text-black"
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-[#10002B] py-3 text-white font-semibold flex items-center justify-center"
          >
            {!loading ? "Log in →" : <FaSpinner className="animate-spin" />}
          </button>
        </form>
      </div>
    </div>
  );
}
