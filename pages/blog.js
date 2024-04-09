import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import styles from './components/Button.module.css';


// The Blog Page Content
export default function Blog({posts}){
    return <main>
        <div>
        <section>
  <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        雙龍體育部落格
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        這裡找到最新公告、部落格文章
      </p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2023-12-21" className="text-gray-500">
            2023-12-21
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            公告
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href="/blog/close">
              <span className="absolute inset-0" />
              雙龍體育暫停服務通知：我們的補償方案和未來展望
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          比賽將在2024 6月重新開打，We will come back soon
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="https://ssangyongsports.eu.org/team.jpeg"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0" />
                雙龍體育
              </a>
            </p>
            <p className="text-gray-600">雙龍體育官方行政團隊</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2023-08-2" className="text-gray-500">
           2023-08-2
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            公告
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href="/blog/logo">
              <span className="absolute inset-0" />
              公告: 發表全新Logo
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            新logo發佈通知
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="https://ssangyongsports.eu.org/team.jpeg"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0" />
                雙龍體育
              </a>
            </p>
            <p className="text-gray-600">雙龍體育團隊</p>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2024-01-7" className="text-gray-500">
            2024-01-7
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            blog
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href="/blog/dub">
              <span className="absolute inset-0" />
              如何使用 dub.sh 創建簡短的網址
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
           使用dub創建短網址
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="https://ssangyongsports.eu.org/1D7F9E91-14B0-4914-9FBD-0E46CE340A78.png"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0" />
               Peter yang
              </a>
            </p>
            <p className="text-gray-600">雙龍體育CEO</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

<Head>
        <title>雙龍體育blog</title>
        <meta name="description" content="任何關於雙龍體育的任何關於雙龍體育的消息和公告,就上雙龍體育blog" />
      </Head>
</section>
        </div>




        {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, seo, author, category, date, bannerImage, tags, img, info} = frontmatter

            //JSX for individual blog listing
            return <article className="bg-white dark:bg-gray-900" key={title}>

         <div className="flex justify-between px-4 mx-auto max-w-8xl">
  <div className="hidden mb-6 xl:block lg:w-80">
    <div className="sticky top-36">
    </div>
  </div>
  <div className="w-full max-w-2xl mx-auto">
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <article className="py-6">
        <div className="flex items-center justify-between mb-3 text-gray-500">
          <div>
            <Link
              className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
              href={`/blog/tags/${tags}`}
            >
              #{tags}
            </Link>
          </div>
          <span className="text-sm">
            {date}
          </span>
        </div>
    <h2 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white `}>
    <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        <p className="mb-5 text-gray-500 dark:text-gray-400">
          {seo}
        </p>
        <div className="flex items-center justify-between">
          <a
            className="flex items-center space-x-2"
            href="https://discuss.ssangyongsports.org/members/peter-yang.1/"
          >
            <Image
  className="rounded-full w-7 h-7"
  src={img}
  alt={author}
/>

            <span className="font-medium dark:text-white">
               {author}
            </span>
          </a>
          <Link
            href={`/blog/${slug}`}
          >
                    閱讀文章

          </Link>
        </div>
      </article>
    </div>

</div>
</div>
</article>

        })}
</main>
}



//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Sort posts in descending order based on the date property
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return {
    props: {
      posts,
    },
  };
}