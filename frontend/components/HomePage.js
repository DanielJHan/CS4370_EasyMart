"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const HomePage = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      router.push("/");
    } else {
      setUsername(storedUsername);
    }
  }, []);
  // handles logout
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
    router.push("/");
  };

  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: "url('https://boutiquestoredesign.com/wp-content/uploads/2018/08/Handbag-Store-Design-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* transparent overlay for image */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* begins interactive ontent */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* header */}
        <nav className="bg-blue-400/100 shadow p-4 font-sans flex justify-between items-center">
          <h1 className="text-xl font-bold font-sans text-white">EasyMart</h1>
          <button onClick={handleLogout} className="text-black font-sans bg-white p-4 rounded-2xl font-semibold hover:underline">
            Logout
          </button>
        </nav>

        {/* actual button content for navigating the site */}
        <main className="p-8 grid gap-6 flex-grow">
          <Link href="/products" className="block bg-blue-500 font-sans text-white text-xl flex items-center p-4 rounded-2xl shadow hover:bg-blue-600 transition">
            🔍 Browse Products
          </Link>
          <Link href="/sales" className="block bg-green-500 font-sans text-white text-xl flex items-center p-4 rounded-2xl shadow hover:bg-green-600 transition">
            💸 View Promotions
          </Link>
          <Link href="/orders" className="block bg-red-500 font-sans text-white text-xl flex items-center p-4 rounded-2xl shadow hover:bg-red-600 transition">
            📦 Your Orders
          </Link>
          <Link href="/profile" className="block bg-white font-sans text-black text-xl p-4 rounded-2xl flex items-center shadow hover:bg-gray-200 transition">
            👤 View Your Profile
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
