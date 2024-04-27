// lib/posts.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data: frontmatter, content } = matter(fileContents)

    return {
      slug,
      frontmatter,
      content,
    }
  })

  return allPostsData
}

export async function getAllTags() {
  const postsData = getPostsData()
  const allTags = new Set()

  postsData.forEach((post) => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach((tag) => allTags.add(tag))
    }
  })

  return Array.from(allTags)
}

export async function getPostsByTag(tag, limit = null) {
  const postsData = getPostsData()
  const filteredPosts = postsData.filter((post) =>
    post.frontmatter.tags && post.frontmatter.tags.includes(tag)
  )

  if (limit) {
    return filteredPosts.slice(0, limit)
  }

  return filteredPosts
}
