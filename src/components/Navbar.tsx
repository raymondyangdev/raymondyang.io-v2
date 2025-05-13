'use client';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-end">
      <div className="flex justify-end gap-10 items-center py-8">
        <div className="hover:cursor-pointer" onClick={() => router.push('/')}>
          Home
        </div>
        <div className="hover:cursor-pointer" onClick={() => router.push('#blog')}>
          Blog
        </div>
      </div>
    </nav>
  );
}
