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
    <title>{`${title}-雙龍體育blog`}</title>
    <meta name="description" content={`${seo}-雙龍體育blog`} />
  </Head>     


   <div className="flex flex-col min-h-[100dvh]">
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center space-x-4">
              <Link href={`/blog/tags/${tags}`}>
              <div className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400">
                {tags}
              </div>
    </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                 {title}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  alt="Author"
                  className="rounded-full"
                  height={32}
                  src={img}
          
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32}
                />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{author}</span>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{info}</div>
            </div>
          </div>
        </div>
      </section>
                      </div>
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header className="mb-4 lg:mb-6 not-format">
        <div>
          <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 ">
           <p style={{ whiteSpace: 'pre-wrap' }}>
  <div dangerouslySetInnerHTML={{ __html: content }} />
</p>
          </div>
        </div>
      </header>
    </article>
  

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
