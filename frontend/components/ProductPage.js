"use client";

import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="space-y-4">
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
          <div>
            <h2 className="text-lg font-semibold">{product.model}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-yellow-600">
              Rating:{" "}
              {product.avg_rating !== null && product.avg_rating !== undefined
                ? product.avg_rating.toFixed(1) + " / 5"
                : "No reviews yet"}
          </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductsPage;