"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button onClick={handleLogout} className="text-red-500 font-semibold hover:underline">
          Logout
        </button>
      </nav>

      {/* Main content */}
      <main className="p-6 grid gap-4">
        <Link href="/search" className="block bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 transition">
          🔍 Search Products
        </Link>
        <Link href="/review" className="block bg-green-500 text-white p-4 rounded shadow hover:bg-green-600 transition">
          📝 View Reviews
        </Link>
        <Link href="/orders" className="block bg-purple-500 text-white p-4 rounded shadow hover:bg-purple-600 transition">
          📦 Your Orders
        </Link>
        <Link href="/edit-profile" className="block bg-orange-500 text-white p-4 rounded shadow hover:bg-orange-600 transition">
          👤 Your Profile
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
