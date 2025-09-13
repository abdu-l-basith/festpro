// app/users/page.jsx (Next.js 13+ App Router)
// or pages/users.js if you’re using Pages Router

"use client";

import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "FAVAZ KOLATHUR", role: "ANNOUNCER" },
    { id: 2, name: "HARSHAD MANNAYIL", role: "ASSI CONVENOR" },
    { id: 3, name: "RASHEED MONGAM", role: "JUDGE" },
    { id: 4, name: "AMAL ZAYAN", role: "STAGE EXECUTIVE" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1a093f] text-white flex justify-between items-center px-6 py-3">
        <h1 className="font-bold text-lg">Fest.pro</h1>
        <div className="flex items-center gap-2">
          <span className="hidden sm:block text-sm">Zoub Muhammed <br /> <span className="text-xs">General Convenor</span></span>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-black">👤</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 sm:px-10 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold">Users</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow">
            Add New
          </button>
        </div>

        {/* Dropdown */}
        <div className="mb-6">
          <select className="border px-3 py-2 rounded w-full sm:w-[200px]">
            <option>All Users</option>
          </select>
        </div>

        {/* Desktop Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-purple-300 text-left">
                <th className="px-4 py-2 border">Sl No.</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id} className="border-b">
                  <td className="px-4 py-2 border">{String(i + 1).padStart(2, "0")}</td>
                  <td className="px-4 py-2 border">{u.name}</td>
                  <td className="px-4 py-2 border">{u.role}</td>
                  <td className="px-4 py-2 border flex gap-2">
                    <FaEdit className="text-purple-700 cursor-pointer" />
                    <FaTrash className="text-red-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List */}
        <div className="sm:hidden space-y-3">
          {users.map((u, i) => (
            <div
              key={u.id}
              className="flex justify-between items-center border p-3 rounded shadow-sm"
            >
              <div>
                <p className="font-semibold">{i + 1}. {u.name}</p>
                <p className="text-sm text-gray-600">{u.role}</p>
              </div>
              <div className="flex gap-3">
                <FaEdit className="text-purple-700 cursor-pointer" />
                <FaTrash className="text-red-600 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
