// pages/tag/[tag].js
import { getAllTags, getPostsByTag } from '../lib/posts'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';

export default function abctest({ posts, tag }) {
  // Sort the posts array in descending order by date
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB - dateA;
  });

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
            {sortedPosts.slice(0, 2).map((post) => (
              <article key={post.slug} className="bg-white dark:bg-gray-900">
                {/* 渲染文章卡片 */}
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