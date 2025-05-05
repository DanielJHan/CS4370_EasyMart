"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const EditProfilePage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("user_id");

    if (!username || !userId) {
      router.push("/"); // redirect to landing page if not logged in
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) return;
  
    fetch(`http://localhost:8080/orders/user-summary/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTotalOrders(data.total_orders);
        setTotalSpent(data.total_spent);
      })
      .catch((err) => console.error("Failed to retrieve order stats:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("Please fill out all fields.");
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setMessage("New password fields do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("New password must be at least 6 characters.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/user/change-password", {
        method: "PUT", // will update password assuming the current password is correct
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem("username"), 
          currentPassword,
          newPassword,
        }),
      });
  
      const success = await response.json(); // return a boolean indicating if the operation worked

      if (success === true) {
        setMessage("Password updated successfully.");
        setTimeout(() => {
          router.push("/home");
        }, 1500);
      } else {
        setMessage("Incorrect current password.");
      }
    } catch (err) {
      console.error("Error updating password:", err);
      setMessage("An error occurred.");
    }
  
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Welcome, {username}!</h2>
      <p className="mb-4 font-sans text-gray-700">
        Orders placed: <span className="font-semibold">{totalOrders}</span> 
      </p>
      <p className="mb-4 font-sans text-gray-700">
        Total money spent: <span className="font-semibold">${parseFloat(totalSpent).toFixed(2)}</span>
      </p>
      <h2 className="text-2xl font-sans font-bold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1 font-sans ">Current Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-sans font-medium mb-1">New Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-sans font-medium mb-1">Confirm New Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {message && <p className="text-sm font-sans text-blue-600">{message}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white font-sans px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Password
        </button>
        <button
          className="bg-green-500 text-white ml-2 font-sans px-4 py-2 rounded hover:bg-green-600"
        >
          <Link href={"/home"}>Go Home</Link>
        </button>
      </form>
      <hr className="my-6" />
      <h2 className="text-xl font-bold mb-2 text-red-600 font-sans">Account Deletion</h2>
      <div className="space-y-2">
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full border px-3 py-2 rounded font-sans"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={async () => {
            const confirmed = window.confirm("Are you sure you want to delete your account? This cannot be undone.");
            if (!confirmed) return;

            const response = await fetch("http://localhost:8080/user/delete", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: localStorage.getItem("username"),
                password: confirmPassword,
              }),
            });

            const success = await response.json();
            if (success) {
              localStorage.clear();
              alert("Account deleted.");
              router.push("/");
            } else {
              alert("Incorrect password. Account not deleted.");
            }
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default EditProfilePage;
