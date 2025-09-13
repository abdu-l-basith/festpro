// client/src/app/components/Navbar.js
"use client";
import { FaUserCircle, FaBars } from "react-icons/fa";

export default function Navbar({ name = "Jasil Rahman", role = "General Convenor" }) {
  return (
    <nav className="w-full bg-[#10002B] text-white px-4 sm:px-8 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-400">F</span>
        <span className="text-lg font-semibold">Fest.pro</span>
      </div>

      {/* Right: Desktop User Info */}
      <div className="hidden sm:flex items-center space-x-3">
        <FaUserCircle className="text-2xl" />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-xs text-gray-300">{role}</span>
        </div>
        <FaBars className="text-xl ml-4 cursor-pointer" />
      </div>

      {/* Right: Mobile Menu */}
      <div className="sm:hidden">
        <FaBars className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
}
