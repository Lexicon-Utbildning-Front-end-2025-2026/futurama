"use client";
import { useState } from "react";

interface LikeButtonProps {
  name: string;
  initialLikes: number;
}

export function LikeButton({ name, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(initialLikes > 0);

  const handleLike = async () => {
    // call the api route
    const response = await fetch("/api/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();
    setLikes(data.likes);
    setHasLiked(!hasLiked);
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      className="inline-flex justify-center items-center whitespace-nowrap text-sm font-medium border h-9 px-4 py-2 shadow-xs rounded-md gap-2 transition-all hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white hover:cursor-pointer"
    >
      {/* <HeartIcon className={`h-4 w-4 ${hasLiked ? "fill-current" : ""}`} /> */}
      {likes > 0 && <span className="ml-auto">{likes}</span>}
      {hasLiked ? "❤️ Liked" : "🤍 Like"} {name}

    </button>
  );
}
