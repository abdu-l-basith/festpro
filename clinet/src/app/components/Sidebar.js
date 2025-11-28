"use client";

import {
  FaTimes,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import rolesConfig from "@/config/rolesConfig";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { user, logout } = useAuth();

  if (!user) return null;
  const roleData = rolesConfig[user.designation];
  const allowedSidebar = roleData.sidebar.filter(
    (item) => item.permission === null || user.accessTo.includes(item.permission)
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full bg-[#10002B] text-white transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          w-full sm:w-64`}
      >
        <div className="hidden sm:flex items-center px-4 py-3 border-b border-white/6">
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-2xl" />
            <div className="leading-tight">
              <div className="text-sm font-medium">{user.name}</div>
              <div className="text-xs text-gray-300">{user.designation}</div>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="ml-auto text-xl p-2 rounded hover:bg-white/5"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-1 px-6 py-6 space-y-4">
            {allowedSidebar.map((item) => (
              <div
                key={item.path}
                className="flex items-center gap-3 hover:text-purple-300 cursor-pointer"
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="px-6 pb-6">
            <button
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-md flex items-center justify-center gap-2"
              onClick={() => {
                logout();
                toggleSidebar();
              }}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
