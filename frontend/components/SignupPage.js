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
      try {
        const response = await fetch("http://localhost:8080/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username, // match what your backend expects
            password: password,
          }),
        });
  
        if (response.ok) {
          const data = await response.text(); // assuming backend returns plain text
          console.log(data);
          localStorage.setItem("token", "dummy-token"); // optional
          router.push("/home");
        } else {
          const error = await response.text();
          alert("Signup failed: " + error);
        }
      } catch (err) {
        console.error("Signup error:", err);
        alert("An error occurred during signup.");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
