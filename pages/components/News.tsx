import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';

export default function News({ latestAnnouncements }) {
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
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fullPath = path.join('posts', fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      frontmatter,
    };
  });

  const announcements = posts.filter((post) =>
    post.frontmatter.tags.includes('公告')
  );
  const latestAnnouncements = announcements.slice(0, 3);

  return {
    props: {
      latestAnnouncements,
    },
  };
}
