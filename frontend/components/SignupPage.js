"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (username && password) {
      if (username.length < 2) {
        alert("Username must be at least 3 characters.");
        return;
      } 
      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }
      try {
        const response = await fetch("http://localhost:8080/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();
        
        if (data.success) {
          localStorage.setItem("username", username);
          localStorage.setItem("user_id", data.user_id); 
          router.push("/home");
        } else {
          alert("Sorry, the signup failed. Please try again.");
        }
      } catch (err) {
        console.error("Signup error:", err);
        alert("Sorry, the signup failed. Please try again.");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold font-sans mb-4">Sign Up</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border font-sans rounded-xl"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border font-sans rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 font-sans text-white p-2 rounded-xl hover:bg-blue-600">
          Sign Up
        </button>
      </form>
      <p className="mt-4 font-sans text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 font-sans hover:underline">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
