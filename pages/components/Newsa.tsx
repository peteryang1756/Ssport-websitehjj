import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    // Add other frontmatter properties here
  };
}

export default function Newsa({ latestAnnouncements }: { latestAnnouncements: Post[] }) {
  return (
    <div>
      <h2>Latest Announcements</h2>
      <ul>
        {latestAnnouncements.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.frontmatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const files = await fs.readdir('posts');
  const posts: Post[] = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace('.md', '');
      const fullPath = path.join('posts', fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);

      return {
        slug,
        frontmatter,
      };
    })
  );

  const announcements = posts.filter((post) =>
    post.frontmatter.tags && post.frontmatter.tags.includes('公告')
  );
  const latestAnnouncements: Post[] = announcements.slice(0, 3);

  return {
    props: {
      latestAnnouncements,
    },
  };
}
