"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import PlaceOrder from "./PlaceOrder";
import { UserProvider } from "../contexts/UserContexts";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-sans font-bold">Products</h1>
        <Link href="/home" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 font-sans rounded">
          Return to Home
        </Link>
      </div>

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
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p className="text-sm text-yellow-600">
            Rating:{" "}
            {product.avg_rating !== null && product.avg_rating !== undefined
              ? product.avg_rating.toFixed(1) + " / 5"
              : "No reviews yet"}
          </p>
        </div>
      


        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setQuantities((prev) => ({
                ...prev,
                [product.product_id]: Math.max((prev[product.product_id] || 0) - 1, 0),
              }))
            }
            className="bg-white text-black font-bold px-3 py-1 rounded-full hover:bg-blue-600 transition"
          >
            –
          </button>
          <span className="min-w-[20px] text-center">
            {quantities[product.product_id] || 0}
          </span>
          <button
            onClick={() =>
              setQuantities((prev) => ({
                ...prev,
                [product.product_id]: (prev[product.product_id] || 0) + 1,
              }))
            }
            className="bg-white text-black font-bold px-3 py-1 rounded-full hover:bg-blue-600 transition"
          >
            +
          </button>
        </div>


      </div>
      ))}
    </div>
      <div className="content-center">
        <UserProvider>
          <PlaceOrder
            amount={products.reduce(
              (total, product) =>
                total + (quantities[product.product_id] || 0) * product.price,
              0
            ).toFixed(2)}
          />
        </UserProvider>
      </div>
    </div>
  );
};

export default ProductsPage;