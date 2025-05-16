import Hero from '@/components/Hero';
import Blog from '@/components/blogs/Blog';
import Projects from '@/components/projects/Projects';
import { client } from '@/sanity/lib/client';

const PDF_QUERY = `*[_type == "fileType"] | order(updatedAt desc)[0] {
  title,
  "url": pdfFile.asset->url
}`;
const options = { next: { revalidate: 30 } };

export default async function Home() {
  const cvFile = await client.fetch<{ url: string }>(PDF_QUERY, {}, options);

  return (
    <main className="flex flex-col gap-8 py-4">
      <Hero cvUrl={cvFile.url} />
      <Projects />
      <Blog />
    </main>
  );
}
