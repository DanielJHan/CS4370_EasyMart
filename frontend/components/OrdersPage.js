"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    if (!userId) {
      router.push("/");
      return;
    }

    fetch(`http://localhost:8080/orders/${userId}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.order_id} className="border p-4 rounded shadow-sm">
              <p><strong>Order ID:</strong> {order.order_id}</p>
              <p><strong>Total:</strong> ${parseFloat(order.order_total).toFixed(2)}</p>
              <p><strong>Date:</strong> {new Date(order.order_date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
