import Image from 'next/image';
import Link from 'next/link';
import fs from "fs";
import { Breadcrumb } from "flowbite-react";
import matter from "gray-matter";
import MarkdownIt from "markdown-it"; // import the markdown-it library
import path from "path";
import styles from '../components/Button.module.css';
import Head from 'next/head'

// The page for each post
export default function Post({frontmatter, content}) {
    const {title, seo, author, category, date, bannerImage, tags, img, info} = frontmatter

    return <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
  <Head>
    <title>{`${title} - 雙龍體育blog`}</title>
    <meta name="description" content={`${seo} - 雙龍體育blog`} />
  </Head>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="pt-10 pb-16">
      <>
        {/*
          // v0 by Vercel.
          // https://v0.dev/t/m7UxuKeh7mI
        */}
        <section id="x5ku1c8m2ko" className="max-w-4xl mx-auto py-12 px-6">
          <div className="mb-10">
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href={`/blog/`}>
                部落格
              </Breadcrumb.Item>
              <Breadcrumb.Item href={`/blog/tags/${tags}`}>{tags}</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-5xl font-bold mt-2">
              {title}
            </h1>
            <p className="mt-4 text-gray-600">
              {seo}
            </p>
          </div>
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime={date}>{date}</time>
          </div>
          <div className="flex items-center">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <img
                src={img}
                alt={author}
                className="h-10 w-10 rounded-full"
                height={40}
                style={{ aspectRatio: "40/40", objectFit: "cover" }}
                width={40}
              />
            </span>
            <div className="ml-4">
              <div className="text-lg font-semibold">{author}</div>
              <div className="text-sm text-gray-600">
                {info}
              </div>
            </div>
          </div>
        </section>
      </>

      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">
          <div>
            <div className="pt-8 pb-16 lg:pt-16 lg:pb-24">
              <p style={{ whiteSpace: 'pre-wrap' }}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </p>
            </div>
          </div>
        </header>
      </article>
    </div>
  </div>
</main>
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fullPath = path.join("posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    xhtmlOut: true,
    plugins: [require('markdown-it-attrs')],
  });

  md.use(require('markdown-it-attrs'), {
    leftDelimiter: '[',
    rightDelimiter: ']',
  });

  const htmlContent = md.render(content);

  return {
    props: {
      frontmatter,
      content: htmlContent,
    },
  };
}
