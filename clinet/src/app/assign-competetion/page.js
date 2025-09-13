"use client";
import { useState } from "react";
import { FaUserCircle, FaBars, FaExternalLinkAlt } from "react-icons/fa";

export default function AssignCompetitions() {
  const [team, setTeam] = useState("Al Qurthuba");
  const [category, setCategory] = useState("Boys Individual");

  const competitions = Array(12).fill({
    chestNo: 345,
    name: "Abdul Basith",
    items: "Mappilappattu, Malayalam Elocution, Essay Malayalam",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-950 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Fest.pro</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-xl" />
            <div className="text-sm leading-tight">
              <p className="font-medium">Zoub Muhammed</p>
              <p className="text-xs text-gray-300">General Convener</p>
            </div>
          </div>
          <FaBars className="text-xl cursor-pointer" />
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        <h2 className="text-xl font-bold mb-4">Assign Competitions</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:gap-8 mb-6">
          <div className="flex items-center gap-2">
            <label className="font-medium">Team:</label>
            <select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="border rounded-md px-3 py-2 focus:ring focus:ring-indigo-400"
            >
              <option>Al Qurthuba</option>
              <option>Team B</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="font-medium">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-md px-3 py-2 focus:ring focus:ring-indigo-400"
            >
              <option>Boys Individual</option>
              <option>Girls Individual</option>
            </select>
          </div>
        </div>

        {/* Assign New button */}
        <button className="bg-green-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 mb-6">
          Assign New
        </button>

        {/* Table - Desktop */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-200 text-left">
                <th className="p-2 border">Chest No.</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Items</th>
              </tr>
            </thead>
            <tbody>
              {competitions.map((c, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2 border">{c.chestNo}</td>
                  <td className="p-2 border">{c.name}</td>
                  <td className="p-2 border flex justify-between items-center">
                    <span>{c.items}</span>
                    <FaExternalLinkAlt className="text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List */}
        <div className="md:hidden flex flex-col gap-3">
          {competitions.map((c, i) => (
            <div
              key={i}
              className="border rounded-md p-3 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{c.chestNo} - {c.name}</p>
                <p className="text-sm text-gray-600">{c.items}</p>
              </div>
              <FaExternalLinkAlt className="text-gray-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
