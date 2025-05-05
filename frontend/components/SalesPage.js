"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const SalesPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products/sales")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch sale products:", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-sans font-bold">Current Discounts</h1>
        <Link
          href="/home"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 font-sans rounded"
        >
          Return to Home
        </Link>
      </div>
      <p className="font-md font-sans text-black-500 mb-5">Note: conditions subject to change.</p>

      <div className="space-y-4 font-sans">
        {products.map((product) => (
          <div
            key={product.product_id}
            className="flex items-center gap-4 border rounded p-4 shadow-sm"
          >
            <img
              src={product.product_pic}
              alt={product.model}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{product.model}</h2>
              <p className="text-gray-600">
                <span className="line-through mr-2 text-gray-700">
                  ${product.original_price.toFixed(2)}
                </span>
                <span className="text-green-600">
                  ${product.price.toFixed(2)}
                </span>
              </p>
              <p className="text-sm text-yellow-600">
                Rating:{" "}
                {product.avg_rating !== null && product.avg_rating !== undefined
                  ? product.avg_rating.toFixed(1) + " / 5"
                  : "No reviews yet"}
              </p>
              <p className="text-sm text-gray-500">
                Sale ends on {new Date(product.end_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPage;