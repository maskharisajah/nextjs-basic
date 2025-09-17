// server action example
"use server";

export async function createComment(FormData: FormData) {
  console.log(FormData.get("comment"));
}
