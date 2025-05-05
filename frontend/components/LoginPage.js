"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      if (username.length < 3) {
        alert("Username must be at least 3 characters.");
      } 
      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
      }
      try {
        const response = await fetch("http://localhost:8080/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem("username", username);
          localStorage.setItem("user_id", data.user_id); // kept for orders page
          router.push("/home");
        } else {
          alert("Login failed: Incorrect username or password");
        }

      } catch (err) {
        console.error("Login error:", err);
        alert("An error occurred during login");
      }
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold font-sans mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border rounded font-sans rounded-xl"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded font-sans rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 font-sans text-white p-2 rounded-xl hover:bg-blue-600" type="submit">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm font-sans">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-500 font-sans hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;