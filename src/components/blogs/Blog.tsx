import { SanityDocument } from 'next-sanity';
import BlogCard from '@/components/blogs/BlogCard';

interface BlogProps {
  recentPosts: SanityDocument[];
}

export default async function Blog({ recentPosts }: BlogProps) {
  return (
    <>
      {recentPosts.length > 0 ? (
        <section id="blog" className="flex flex-col gap-4">
          <h2 className="text-4xl">blog.</h2>
          <ul className="flex flex-col gap-y-4">
            {recentPosts.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                description={post.body[0].children[0].text}
                slug={post.slug.current}
                date={post.publishedAt}
              />
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
