// app/layout.js
import "./globals.css";
import ClientLayout from "./ClientLayout"; // import client wrapper
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Fest.pro",
  description: "Dashboard app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
