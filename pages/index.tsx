import Hero from './components/Hero';
import Table from './components/table';
import Tabl from './components/tabl';
import Sport from './components/sport';
import Action from './components/action';
import React from 'react';
import Head from 'next/head'

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';

export default function Home({ latestAnnouncements }) {
  return (
        <>
<Head>
        <title>雙龍體育</title>
        <meta name="description" content="雙龍體育網站 - 專業體育賽事！ 提供最新的雙龍體育資訊、TV、運動比賽報導，讓您輕鬆了解雙龍體育。歡迎加入雙龍運動論壇，一起與大家溝通！" />
      </Head>

      <div>
        <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Hero />
        <Sport />
        <div id="anchor_one" />
        <Table />
        <Tabl />
        
      </div>

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
              </>
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
