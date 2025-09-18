import { Post } from "@/app/types/Post";
import { CommentForm } from "./comment-form";
import { LikeButton } from "./like-button";
import { Comments } from "./comments";
import { Suspense } from "react";
import { notFound } from "next/navigation";

//dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

async function getPost(slug: string): Promise<Post> {
  const res = await fetch(`http://localhost:3002/posts/?slug=` + slug);
  const [post] = await res.json();

  return post;
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);

  const post = await getPost(slug);
  console.log(post);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article>
        <h1>Detail Page</h1>
        <h1 className='text-lg'>{post.title}</h1>
        <p>{post.content}</p>
        <hr className='my-4' />
        <LikeButton postId={post.id} />
      </article>
      <section className='mt-4'>
        <h2 className='text-lg'>Comments</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Comments />
        </Suspense>
        <CommentForm />
      </section>
    </>
  );
}
