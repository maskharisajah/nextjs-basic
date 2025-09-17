"use client";

import { createLike } from "@/app/action";
import { useTransition } from "react";

type likeButtonProps = {
  postId: string;
};

export function LikeButton(props: likeButtonProps) {
  const { postId } = props;
  const [pending, startTransition] = useTransition();

  async function handleLike() {
    startTransition(async () => {
      await createLike(postId);
    });
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
