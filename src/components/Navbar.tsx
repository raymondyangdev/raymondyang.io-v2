'use client';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav
      className={`z-10 h-[12vh] w-[85vw] md:w-[50vw] md:max-w-[50vw] flex justify-center items-center absolute md:absolute left-1/2 top-0 transform -translate-x-1/2`}>
      <div className="flex w-full justify-between items-center">
        {/* DESKTOP */}
        <div className="flex justify-end gap-10 items-center">
          <div className="hover:cursor-pointer underline-animation" onClick={() => router.push('/')}>
            Home
          </div>
          <div className="hover:cursor-pointer underline-animation" onClick={() => router.push('/blog')}>
            Blog
          </div>
        </div>
      </div>
    </nav>
  );
}
