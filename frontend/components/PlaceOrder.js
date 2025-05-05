"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PlaceOrder = ({ amount }) => {
  const quantity = amount;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/orders/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: parseInt(localStorage.getItem("user_id")),
          amount: parseFloat(quantity),
        }),
      });
  
      if (response.ok) {
        const data = await response.text();
        console.log(data);
        alert("Order placed successfully!");
        router.push('/home')
      } else {
        const error = await response.text();
        alert("Order failed: " + error);
      }
    } catch (err) {
      console.error("Order error:", err);
      alert("An error occurred during ordering.");
    }
  };

  return (
    <div className="self-center">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xs">
      <label className="font-semibold mt-2">Order Total</label>
      <input
        type="number"
        value={quantity}
        readOnly
        className="border p-2 rounded"
        min="0"
        step="any"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
    </div>
  );
};

export default PlaceOrder;
