import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { defaultConfig } from 'next-docs-zeta/contentlayer/configuration'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    seo: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    bannerImage: {
      type: 'string',
    },
    tags: {
      type: 'string',
      required: true,
    },
    img: {
      type: 'string',
      required: true,
    },
    info: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/\.md$/, ''),
    },
  },
}))

export default makeSource({
  ...defaultConfig,
  documentTypes: [Post],
})