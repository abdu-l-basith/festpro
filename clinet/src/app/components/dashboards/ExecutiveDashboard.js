import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function ExecutiveDashboard() {
  const { user, loading } = useAuth;
  const router = useRouter;

  
  return (
    
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      

      {/* Content area */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Executive Dahboaard..za</h1>
        <span></span>
        <button onClick={console.log(user)}>Get User</button>
      </main>
    </div>
    
  );
}