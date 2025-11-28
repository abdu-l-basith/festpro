"use client";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function Navbar({ toggleSidebar }) {
  const { user } = useAuth();

  return (
    <nav className="w-full bg-[#10002B] text-white px-4 sm:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-400">F</span>
        <span className="text-lg font-semibold">Fest.pro</span>
      </div>

      <div className="hidden sm:flex items-center space-x-3">
        <FaUserCircle className="text-2xl" />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium">{user?.name}</span>
          <span className="text-xs text-gray-300">{user?.designation}</span>
        </div>
        <FaBars className="text-xl ml-4 cursor-pointer" onClick={toggleSidebar} />
      </div>

      <div className="sm:hidden">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>
    </nav>
  );
}
