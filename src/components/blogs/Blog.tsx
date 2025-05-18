import { client } from '@/sanity/lib/client';
import { SanityDocument } from 'next-sanity';
import BlogCard from '@/components/blogs/BlogCard';
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...2]{_id, title, slug, publishedAt, body}`;
const options = { next: { revalidate: 30 } };

export default async function Blog() {
  const recentPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

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
