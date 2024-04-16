import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from "flowbite-react";
import { useMDXComponent } from 'next-contentlayer/hooks'
import { getAllPosts, getPostFromSlug } from '.contentlayer/data'
import Head from 'next/head'

export default function Post({ post }) {
    const { title, seo, author, category, date, bannerImage, tags, img, info } = post

    const MDXComponent = useMDXComponent(post.body.code)

    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
            <Head>
                <title>{`${title}-雙龍體育blog`}</title>
                <meta name="description" content={`${seo}-雙龍體育blog`} />
            </Head>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-10 pb-16">
                    <Breadcrumb aria-label="Default breadcrumb example">
                        <Breadcrumb.Item href={`/blog/`}>部落格</Breadcrumb.Item>
                        <Breadcrumb.Item href={`/blog/tags/${tags}`}>{tags}</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500">{seo}</p>
                </div>
                <div className="border-t border-blue-500 pt-10 pb-16">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={img} alt={author} className="h-10 w-10 rounded-full" height={40} style={{ aspectRatio: "40/40", objectFit: "cover" }} width={40} />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{author}</p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                    <time dateTime={date}>{date}</time>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-sm font-medium text-gray-900">作者介紹</p>
                            <p className="mt-1 text-sm text-gray-500">{info}</p>
                        </div>
                    </div>
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <div>
                                <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 ">
                                    <MDXComponent />
                                </div>
                            </div>
                        </header>
                    </article>
                </div>
            </div>
        </main>
    )
}

export async function getStaticPaths() {
    const posts = getAllPosts()
    const paths = posts.map((post) => ({ params: { slug: post.slug }}))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = getPostFromSlug(params.slug)

    return {
        props: {
            post,
        },
    }
}