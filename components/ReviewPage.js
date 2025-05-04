"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ReviewsPage = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || reviewText.trim() === "") {
      alert("Please provide a rating and a review.");
      return;
    }

    // Normally you would send the review to an API here.
    alert(`Review submitted!\nRating: ${rating} stars\nReview: ${reviewText}`);
    
    // Set submitted state to show a confirmation message
    setIsSubmitted(true);

    // Redirect to /home after successful submission
    setTimeout(() => {
      router.push("/home");
    }, 2000);  // Redirect after 2 seconds to show the confirmation message
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">Rate this product</h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`${
                  rating >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                } text-2xl`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="reviewText" className="block text-lg font-medium">
            Your Review
          </label>
          <textarea
            id="reviewText"
            className="w-full p-2 border rounded-md mt-2"
            rows="4"
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Review
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-4 text-green-600 font-semibold">
          Thank you for your review! Redirecting...
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
