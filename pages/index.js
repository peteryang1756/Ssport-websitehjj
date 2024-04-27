import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import Hero from './components/Hero';
import Table from './components/table';
import Tabl from './components/tabl';
import Sport from './components/sport';
import Action from './components/action';
import React from 'react';
import Head from 'next/head';
import styles from './components/Button.module.css';

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
        <Tabl />
        <Table />
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className={`mb-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl `}>
              最新
              <span className={styles.abc}>公告</span>
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {latestAnnouncements.map((post) => (
              <article
                key={post.slug}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                    </svg>
                    公告
                  </span>
                  <span className="text-sm">{post.frontmatter.date}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {post.frontmatter.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-7 h-7 rounded-full"
                      src="/team.jpeg"
                      alt="雙龍體育"
                    />
                    <span className="font-medium dark:text-white">雙龍體育</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    閱讀公告
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
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

  const latestAnnouncements = posts.slice(0, 2);

  return {
    props: {
      latestAnnouncements,
    },
  };
}
