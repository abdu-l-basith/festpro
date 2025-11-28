// app/ClientLayout.js
"use client";
import { usePathname } from "next/navigation";
import HomeLayout from "./components/layouts/HomeLayout";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // routes without sidebar/navbar
  const noLayoutRoutes = ["/login", "/register"];
  const isNoLayout = noLayoutRoutes.includes(pathname);

  return isNoLayout ? children : <HomeLayout>{children}</HomeLayout>;
}
