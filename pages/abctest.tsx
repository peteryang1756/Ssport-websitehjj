import { getAllTags, getPostsByTag } from '../../../lib/posts'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
export default function TagPage({ posts, tag }) {
  // Sort the posts array in descending order by date
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB - dateA;
  });

  // Get the first three posts
  const latestThreePosts = sortedPosts.slice(0, 3);

  return (
    <div>
      <Head>
        <title>標籤: {tag} - 雙龍體育部落格</title>
        <meta
          name="description"
          content={`查看所有標記為 "${tag}" 的文章`}
        />
      </Head>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              標記為 {tag} 的文章
            </h2>
          </div>
          <div>
            {latestThreePosts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-8xl">
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      <div className="py-6">
                        <div className="flex items-center justify-between mb-3 text-gray-500">
                          <span className="text-sm">{post.frontmatter.date}</span>
                          <div>
                            {post.frontmatter.tags.map((tag) => (
                              <Link
                                key={tag}
                                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                href={`/`}
                              >
                                #{tag}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <Link href={`/blog/${post.slug}`}>
                            {post.frontmatter.title}
                          </Link>
                        </h2>
                        <p className="mb-5 text-gray-500 dark:text-gray-400">
                          {post.frontmatter.seo}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Image
                              className="rounded-full w-7 h-7"
                              src={post.frontmatter.img}
                              alt={post.frontmatter.author}
                              width={28}
                              height={28}
                            />
                            <span className="font-medium dark:text-white">
                              {post.frontmatter.author}
                            </span>
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-500"
                          >
                            閱讀文章
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const tags = await getAllTags()
  const paths = tags.map((tag) => ({
    params: { tag },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { tag } = params
  const posts = await getPostsByTag(tag)

  return {
    props: {
      posts,
      tag,
    },
  }
}
