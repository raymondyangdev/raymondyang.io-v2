'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [visible] = useState(true);
  const router = useRouter();

  return (
    <nav
      className={`${
        visible ? 'md:opacity-100' : 'md:opacity-0 md:pointer-events-none'
      } z-10 h-[12vh] transition ease-in-out delay-100 w-[85vw] md:w-[50vw] md:max-w-[50vw] flex justify-center items-center absolute md:absolute left-1/2 top-0 transform -translate-x-1/2`}>
      <div className="flex w-full justify-between items-center">
        {/* DESKTOP */}
        <div className="flex justify-end gap-10 items-center">
          <div onClick={() => router.push('/')}>Home</div>
          <div onClick={() => router.push('/blog')}>Blog</div>
        </div>
      </div>
    </nav>
  );
}
