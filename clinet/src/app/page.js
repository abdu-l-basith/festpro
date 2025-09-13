// src/app/page.js
"use client";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar name="Jasil Rahman" role="General Convenor" />

      {/* Content area */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome to Fest.pro 🎉</h1>
        <p className="mt-2 text-gray-600">
          This is your home dashboard. Content will change based on your role.
        </p>
      </main>
    </div>
  );
}
