// app/assign-duties/page.jsx (Next.js 13+ App Router)
// or pages/assign-duties.js if using Pages Router

"use client";

import { useState } from "react";
import { FaCog } from "react-icons/fa";

export default function AssignDutiesPage() {
  const [selectedUser, setSelectedUser] = useState("Rasheed Mongam");
  const [items, setItems] = useState([
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
    "JN ENGLISH",
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const handleUpdate = () => {
    alert(`Assigned to ${selectedUser}: ${selectedItems.join(", ")}`);
  };

  return (
    <div className="min-h-screen bg-white">
      

      {/* Content */}
      <main className="px-4 sm:px-10 py-6">
        <h2 className="text-2xl font-bold mb-6">Assign Duties</h2>

        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select className="border px-3 py-2 rounded w-full sm:w-[200px]">
            <option>All Users</option>
          </select>

          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-[300px]"
          >
            <option>Rasheed Mongam</option>
            <option>Favas Kolathur</option>
            <option>Harshad Mannayil</option>
            <option>Amal Zayan</option>
          </select>
        </div>

        {/* Items Grid */}
        <h3 className="font-semibold mb-4">Select Items to Judge</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => toggleItem(item + idx)}
              className={`px-4 py-2 rounded text-white font-semibold ${
                selectedItems.includes(item + idx)
                  ? "bg-purple-600"
                  : "bg-[#1a093f]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          className="w-full sm:w-auto bg-[#1a093f] text-white font-semibold px-6 py-3 rounded flex items-center justify-center gap-2"
        >
          Update <FaCog />
        </button>
      </main>
    </div>
  );
}
