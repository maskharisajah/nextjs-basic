export async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>Comments Content</div>;
}
