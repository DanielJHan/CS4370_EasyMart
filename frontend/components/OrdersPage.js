"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ordersData = [
  { id: 1, product: "Laptop", quantity: 1, price: 999.99, status: "Shipped" },
  { id: 2, product: "Headphones", quantity: 2, price: 199.99, status: "Delivered" },
  { id: 3, product: "Smartphone", quantity: 1, price: 799.99, status: "Pending" },
  { id: 4, product: "Keyboard", quantity: 1, price: 49.99, status: "Shipped" },
];

const OrdersPage = () => {

  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("user_id");

    if (!username || !userId) {
      router.push("/"); // redirect to landing page if not logged in
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {ordersData.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">Product</th>
              <th className="px-4 py-2 border-b text-left">Quantity</th>
              <th className="px-4 py-2 border-b text-left">Price</th>
              <th className="px-4 py-2 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-2">{order.product}</td>
                <td className="px-4 py-2">{order.quantity}</td>
                <td className="px-4 py-2">${order.price.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <span
                    className={`${
                      order.status === "Shipped"
                        ? "text-blue-600"
                        : order.status === "Delivered"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link href="/home">Return to Home</Link>
    </div>
  );
};

export default OrdersPage;
