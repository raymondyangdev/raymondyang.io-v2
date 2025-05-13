import Hero from '@/components/Hero';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 py-4">
      <Hero />
      <Blog />
    </main>
  );
}
