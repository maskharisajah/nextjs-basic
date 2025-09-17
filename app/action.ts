// server action example
"use server";

export async function createComment(prevData: any, FormData: FormData) {
  const comment = FormData.get("comment") as string;
  //   console.log(comment);

  if (!comment) {
    return { error: "Comment cannot be empty" };
  }
}
