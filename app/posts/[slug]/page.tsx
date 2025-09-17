import { Post } from "@/app/types/Post";
import { CommentForm } from "./comment-form";

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
    <>
      <article>
        <h1>Detail Page</h1>
        <h1 className='text-lg'>{post.title}</h1>
        <p>{post.content}</p>
      </article>
      <section className='mt-4'>
        <h2 className='text-lg'>Comments</h2>
        <CommentForm />
      </section>
    </>
  );
}
