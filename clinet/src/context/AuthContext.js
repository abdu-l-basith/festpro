"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null); // { name, designation, access_to }
  const [loading, setLoading] = useState(true);

  // Restore user session on refresh (simulate backend /me API)
  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
  try {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await res.json();

    // Save token + user
    setUser(data);
    sessionStorage.setItem("user", JSON.stringify(data));
    router.push("/");
  } catch (err) {
    throw err;
  }
};

useEffect(() => {
  const savedUser = sessionStorage.getItem("user");
  if (savedUser) {
    const parsed = JSON.parse(savedUser);
    setUser(parsed);

    // Optionally verify token with backend
    fetch("http://localhost:5000/api/users/me", {
      headers: {
        Authorization: `Bearer ${parsed.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => {
        setUser(null);
        sessionStorage.removeItem("user");
      });
  }
  setLoading(false);
}, []);


  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
