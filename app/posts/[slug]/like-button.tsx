"use client";

import { createLike } from "@/app/action";
import { useState } from "react";

export function LikeButton() {
  const [pending, setPending] = useState(false);

  async function handleLike() {
    setPending(true);
    await createLike();

    setPending(false);
  }

  return (
    <button
      className='bg-white text-black py-1 px-2 rounded'
      onClick={handleLike}
    >
      {pending ? "Liking..." : "Like"}
    </button>
  );
}
