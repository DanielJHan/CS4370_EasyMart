"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      router.push("/");
      return;
    }
    if (storedUsername) setUsername(storedUsername);
    }, []);

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
      <h1 className="text-2xl font-bold font-sans mb-4">Welcome, {username}!</h1>
      <h1 className="text-2xl font-bold mb-4 font-sans">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4 mb-10">
          {orders.map((order) => (
            <li key={order.order_id} className="border font-sans p-4 rounded-2xl shadow-sm">
              <p><strong>Order ID:</strong> {order.order_id}</p>
              <p><strong>Total:</strong> ${parseFloat(order.order_total).toFixed(2)}</p>
              <p><strong>Date:</strong> {new Date(order.order_date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
        
      )}
      <Link href="/home" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 font-sans rounded-xl">
          Return to Home
      </Link>
    </div>
  );
};

export default OrdersPage;
