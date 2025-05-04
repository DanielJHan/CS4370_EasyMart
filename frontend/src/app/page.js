"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-blue-700 shadow-md">
        <h1 className="text-2xl font-bold">Product Review App</h1>
        <div className="space-x-4">
          <Link href="/login">
            <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-gray-200 transition">Login</button>
          </Link>
          <Link href="/signup">
            <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-gray-200 transition">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Welcome to the Product Review App</h2>
          <p className="text-lg max-w-xl mx-auto">
            Discover products, share your experiences, and read real reviews from real users.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
