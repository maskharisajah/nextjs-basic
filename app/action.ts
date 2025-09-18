// server action example
"use server";

import { type CommentFormState } from "./types/CommentFormState";

export async function createComment(
  prevData: CommentFormState,
  FormData: FormData
): Promise<CommentFormState> {
  const comment = FormData.get("comment") as string;
  //   console.log(comment);

  if (!comment) {
    return { error: "Comment cannot be empty" };
  }

  return { success: "Komentar berhasil dikirim" };
}

export async function createLike(postId: string) {
  // fake delay
  await new Promise((resolve) => setTimeout(() => resolve(true), 3000));

  console.log("like, postId:", postId);
}
