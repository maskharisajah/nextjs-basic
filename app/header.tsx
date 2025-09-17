import Link from "next/link";

type setting = {
  siteName: string;
};

async function getSetting(): Promise<setting> {
  const res = await fetch("http://localhost:3002/settings");
  const setting = await res.json();

  return setting;
}

export async function Header() {
  const setting = await getSetting();

  // console.log(setting);

  return (
    <header className='border-b border-white py-2 mb-2'>
      <div className='text-2xl'>{setting.siteName}</div>
      <nav className='space-x-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/about/team'>Team</Link>
        <Link href='/posts'>Post</Link>
      </nav>
    </header>
  );
}
