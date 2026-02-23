"use client"
import { useState } from "react";

const ReviewCard = ({ review, currentUserEmail }) => {
  const [likes, setLikes] = useState(review.likes || []);

  const isLiked = likes.includes(currentUserEmail);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes.filter(email => email !== currentUserEmail));
    } else {
      setLikes([...likes, currentUserEmail]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
      {/* User info */}
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{review.user}</h4>
          <p className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 leading-relaxed">
        {review.review}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 text-sm font-medium transition ${
            isLiked ? "text-red-500" : "text-gray-500"
          }`}
        >
          ❤️ {likes.length}
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;