// components/PostList.js
import Link from 'next/link'

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </a>
          </Link>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}