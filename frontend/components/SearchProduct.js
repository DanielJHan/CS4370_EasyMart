"use client";

import React, { useState } from "react";
import Link from "next/link";

const SearchProduct = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
    alert(`You searched for: ${query}`);
    setQuery("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Search for a Product</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter product name..."
          className="flex-grow p-2 border rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>
      <Link href="/home">
        Return to Home
      </Link>
    </div>
  );
};

export default SearchProduct;
