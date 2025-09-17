import { Post } from "@/app/types/Post";

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

  return (
    <article>
      <h1>Detail Page</h1>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
