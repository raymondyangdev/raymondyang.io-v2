import { client } from '@/sanity/lib/client';
import { SanityDocument } from 'next-sanity';
import Link from 'next/link';
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;
const options = { next: { revalidate: 30 } };

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <>
      {posts.length > 0 ? (
        <section id="blog" className="flex flex-col gap-4">
          <h2 className="text-4xl">blog.</h2>
          <ul className="flex flex-col gap-y-4">
            {posts.map((post) => (
              <li className="hover:underline" key={post._id}>
                <Link href={`/blog/${post.slug.current}`}>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
