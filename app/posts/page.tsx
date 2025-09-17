//data fetching

import Link from "next/link";
import { Post } from "../types/Post";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3002/posts");
  const posts = await res.json();

  return posts;
}

const posts = await getPosts();
console.log(posts);

export default async function PostsPage() {
  return (
    <div>
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </article>
      ))}
    </div>
  );
}
