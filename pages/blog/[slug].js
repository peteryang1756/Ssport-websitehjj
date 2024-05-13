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


  <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
  <div className="container">
    <div className="mx-auto max-w-3xl space-y-4 text-center">
      <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">
        Technology
      </div>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        {seo}
    
      </p>
    </div>
    <div className="mt-4 flex items-center justify-center gap-4">
    <img
      src={img}
      alt={author}
      width={1200}
      height={600}
      className="mx-auto mt-8 aspect-[2/1] w-full max-w-5xl overflow-hidden rounded-lg object-cover"
    />
                                      <div className="text-left">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Web Development Expert</p>
              </div>
          </div>
  </div>
</section>


      </section>
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
