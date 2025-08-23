"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a simple example. In a real application, you should:
    // 1. Use proper authentication (like NextAuth.js)
    // 2. Never store credentials in the code
    // 3. Use HTTPS
    // 4. Implement proper session management
    if (username === "admin" && password === "sugarbloomsadmin") {
      // Store authentication state (use a proper auth solution in production)
      sessionStorage.setItem("isAdminAuthenticated", "true");
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-rose-50 pt-32 pb-20">
      <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border-2 border-pink-200 max-w-md w-full">
        <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center font-serif">
          Admin Login
        </h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium text-pink-600">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-pink-200 focus:border-pink-400 text-pink-700"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-pink-600">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-pink-200 focus:border-pink-400 text-pink-700"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-medium"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
