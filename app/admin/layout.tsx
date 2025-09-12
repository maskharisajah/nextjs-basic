export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className='border-b border-green-500'>Admin Layout</header>
      {children}
    </main>
  );
}
