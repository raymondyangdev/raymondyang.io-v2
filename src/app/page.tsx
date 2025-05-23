import Hero from '@/components/Hero';
import Blog from '@/components/blogs/Blog';
import Projects from '@/components/projects/Projects';
import { client } from '@/sanity/lib/client';

const PDF_QUERY = `*[_type == "fileType"] | order(updatedAt desc)[0] {
  title,
  "url": pdfFile.asset->url
}`;

const BLOGS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...2]{_id, title, slug, publishedAt, body}`;

const PROJECTS_QUERY = `*[
  _type == "project"
]|order(_createdAt desc)[0...3]{
  _id,
  title,
  description,
  tags,
  image,
  github,
  live
}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const cvFile = await client.fetch<{ url: string }>(PDF_QUERY, {}, options);
  const recentPosts = await client.fetch(BLOGS_QUERY, {}, options);
  const projects = await client.fetch(PROJECTS_QUERY, {}, options);
  return (
    <main className="flex flex-col gap-8 py-4">
      <Hero cvUrl={cvFile.url} />
      <Projects projects={projects} />
      <Blog recentPosts={recentPosts} />
    </main>
  );
}
