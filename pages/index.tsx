import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import styles from './Button.module.css';
import a from './a.module.css';
import Image from 'next/image';
import Hero from './components/Hero';
import Table from './components/table';
import Tabl from './components/tabl';
import Sport from './components/sport';
import Action from './components/action';
import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
}

interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
}

export default function Home({ latestAnnouncements }: { latestAnnouncements: Post[] }) {
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
        <section className="bg-white dark:bg-gray-900 antialiased">
          <Image
            className="w-full"
            src="/home2.png"
            alt="dashboard image"
          />
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                最新公告
              </h2>
              <div className="mt-4">
                <Link href="/blog/tags/公告" legacyBehavior>
                  <a
                    title=""
                    className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    查看所有公告
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
              <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                <ul>
                  {latestAnnouncements.map((post) => (
                    <li key={post.slug}>
                      <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                        {post.frontmatter.date}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <Link href={`/blog/${post.slug}`} legacyBehavior>
                          <a className="hover:underline">{post.frontmatter.title}</a>
                        </Link>
                      </h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ latestAnnouncements: Post[] }> = async () => {
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
};