"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{
        backgroundImage: "url('https://cdn-ilddfeb.nitrocdn.com/trnRVdiOVoGCzaeszCepOBOoLuTClYlX/assets/images/optimized/rev-772a0e5/visitalexandria.com/wp-content/uploads/2024/11/3-Sisters-Boutique-CREDIT-Chris-Cruz-for-Visit-Alexandria-2-92-medium.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-4 bg-red-400 shadow-md">
        <h1 className="text-2xl font-bold font-sans">EasyMart</h1>
        <div className="space-x-4">
          <Link href="/login">
            <button className="bg-white text-blue-700 font-sans px-4 py-2 rounded-md hover:bg-gray-200 transition">Login</button>
          </Link>
          <Link href="/signup">
            <button className="bg-white text-blue-700 font-sans px-4 py-2 rounded-md hover:bg-gray-200 transition">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-grow flex mt-10 justify-center text-center px-6">
        <div>
          <h2 className="text-4xl font-bold font-sans mb-4">Welcome to EasyMart</h2>
          <p className="text-lg max-w-xl mx-auto font-sans">
            The one-stop shop for all your fashion needs
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
