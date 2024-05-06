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


 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

  <div className="pt-10 pb-16">  
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href={`/blog/`}>
        部落格
      </Breadcrumb.Item>
      <Breadcrumb.Item href={`/blog/tags/${tags}`}>{tags}</Breadcrumb.Item>

    </Breadcrumb>
    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {title}

    </h1>
    <p className="mt-4 max-w-2xl text-xl text-gray-500">
             {seo}

    </p>
  </div>
  <div className="border-t border-blue-500 pt-10 pb-16">
    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <img
                alt="AuthorAvatar"
                className="rounded-full"
                height={32}
                src={img}
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <span className="font-medium">{author}</span>
            </div>
            <span>•</span>
            <time dateTime="{date}">{date}</time>
          </div></div>
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
