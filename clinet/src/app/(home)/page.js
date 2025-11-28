// src/app/page.js
"use client";


import { useAuth } from "@/context/AuthContext";
import rolesConfig from "@/config/rolesConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomeLayout from "../components/layouts/HomeLayout";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;
console.log(user);
  const roleData = rolesConfig[user.designation];
  const DashboardComponent = roleData.homePage;
  return (
    <HomeLayout>
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      

      {/* Content area */}
      <main className="flex-1 p-6">
        <DashboardComponent></DashboardComponent>
      </main>
    </div>
    </HomeLayout>
  );
}
