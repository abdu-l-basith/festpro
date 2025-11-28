"use client";

import { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    role: "",
    username: "",
    password: "",
    accessTo: [],
  });

  // 🔹 Open modal
  const openModal = () => {
    if (window.innerWidth < 640) {
      // Mobile → open in new tab
      const newTab = window.open("/users/add", "_blank");
      if (newTab) newTab.focus();
    } else {
      setShowModal(true);
    }
  };

  // 🔹 Close modal
  const closeModal = () => setShowModal(false);

  // 🔹 Handle checkbox
  const toggleAccess = (item) => {
    setForm((prev) => ({
      ...prev,
      accessTo: prev.accessTo.includes(item)
        ? prev.accessTo.filter((x) => x !== item)
        : [...prev.accessTo, item],
    }));
  };

  // 🔹 Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setUsers([...users, data.user]); // add new user to table
      setForm({ name: "", role: "", username: "", password: "", accessTo: [] });
      closeModal();

      if (window.innerWidth < 640) {
        window.close(); // Mobile → close tab after submit
      }
    } catch (err) {
      alert(err.message);
    }
  };
   // 🔹 Fetch users on page load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Content */}
      <main className="px-4 sm:px-10 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold">Users</h2>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
            onClick={openModal}
          >
            Add New
          </button>
        </div>

        {/* Users Table */}
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
  {loading ? (
    <tr>
      <td colSpan="4" className="text-center py-4">Loading...</td>
    </tr>
  ) : users.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center py-4">No users found</td>
    </tr>
  ) : (
    users.map((u, i) => (
      <tr key={u._id} className="border-b">
        <td className="px-4 py-2 border">{String(i + 1).padStart(2, "0")}</td>
        <td className="px-4 py-2 border">{u.name}</td>
        <td className="px-4 py-2 border">{u.role}</td>
        <td className="px-4 py-2 border flex gap-2">
          <FaEdit className="text-purple-700 cursor-pointer" />
          <FaTrash className="text-red-600 cursor-pointer" />
        </td>
      </tr>
    ))
  )}
</tbody>
          </table>
        </div>
      </main>

      {/* Modal (Desktop) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>

            <h3 className="text-lg font-bold mb-4 text-center">Add New User</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />

              {/* Role Dropdown */}
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select Role</option>
                <option value="Ass. Convenor">Ass. Convenor</option>
                <option value="Stage Executive">Stage Executive</option>
                <option value="Announcer">Announcer</option>
                <option value="Judge">Judge</option>
              </select>

              {/* AccessTo for Ass. Convenor */}
              {form.role === "Ass. Convenor" && (
                <div className="border rounded p-3">
                  <p className="font-medium mb-2">Access To:</p>
                  {["add-user", "result", "judge", "scheduler"].map((item) => (
                    <label key={item} className="flex items-center gap-2 mb-1">
                      <input
                        type="checkbox"
                        checked={form.accessTo.includes(item)}
                        onChange={() => toggleAccess(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              )}

              {/* Login */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className="w-1/2 border rounded px-3 py-2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-1/2 border rounded px-3 py-2"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="text-gray-500 sm:hidden"
                  onClick={() => window.close()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
