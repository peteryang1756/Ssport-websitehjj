import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    seo: string;
    tags: string;
    date: string;
    // 添加其他前言字段
  };
  content: string;
}

export default function Home({ latestAnnouncements }: { latestAnnouncements: Post[] }) {
  return (
    <div>
      {/* 其他首頁內容 */}
      <div>
        <h2>最新公告</h2>
        {latestAnnouncements.map((post) => (
          <div key={post.slug}>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.seo}</p>
            {/* 其他公告內容 */}
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const latestAnnouncements: Post[] = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content } = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        frontmatter,
        content,
      };
    })
    .filter((post) => post.frontmatter.tags === '公告')
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    })
    .slice(0, 2);

  return {
    props: {
      latestAnnouncements,
    },
  };
};
