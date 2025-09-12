export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const id = (await params).id;
  const { id } = await params;
  console.log(id);

  return (
    <div>
      <h1>Product Detail Page</h1>
    </div>
  );
}
