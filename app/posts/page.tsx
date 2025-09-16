//data fetching

type Post = {
  id: number;
  title: string;
  content: string;
};

// style 2 (lebih umum digunakan)
async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3002/posts");
  const posts = await res.json();

  return posts;
}

const posts = await getPosts();

export default async function PostsPage() {
  // style 1
  //   const res = await fetch("http://localhost:3002/posts");
  //   const posts = (await res.json()) as Post[];

  //   console.log(posts);

  return (
    <div>
      <h1>Posts Page</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
