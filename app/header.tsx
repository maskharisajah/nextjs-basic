import Link from "next/link";

export function Header() {
  return (
    <header className='border-b border-white'>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/about/team'>Team</Link>
      </nav>
    </header>
  );
}
