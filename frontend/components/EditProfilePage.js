"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditProfilePage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("user_id");

    if (!username || !userId) {
      router.push("/"); // redirect to landing page if not logged in
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("Please fill out all fields.");
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/user/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem("username"), // or however you're tracking the user
          currentPassword,
          newPassword,
        }),
      });
  
      const result = await response.text();
  
      if (response.ok) {
        setMessage("Password updated successfully.");
        setTimeout(() => {
          router.push("/home");
        }, 1500);
      } else {
        setMessage("Failed: " + result);
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
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Current Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">New Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Confirm New Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {message && <p className="text-sm text-blue-600">{message}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;
