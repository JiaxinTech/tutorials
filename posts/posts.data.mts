import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  cover?: string
}

export interface CategorizedPosts {
  agent: Post[]
  app: Post[]
  codex: Post[]
  vps: Post[]
}

export default createContentLoader('posts/**/*.md', {
  includeSrc: true,
  transform(raw): CategorizedPosts {
    const categories: CategorizedPosts = {
      agent: [],
      app: [],
      codex: [],
      vps: []
    }

    raw
      .filter(({ url }) => {
        return !url.endsWith('/') && !url.endsWith('/index.html') && !url.endsWith('/index');
      })
      .sort((a, b) => {
        const orderA = a.frontmatter.order !== undefined ? Number(a.frontmatter.order) : -Infinity
        const orderB = b.frontmatter.order !== undefined ? Number(b.frontmatter.order) : -Infinity
        return orderB - orderA
      })
      .forEach(({ url, src, frontmatter }) => {
        let title = frontmatter.title
        if (!title && src) {
          const match = src.match(/^#\s+(.*)$/m)
          if (match) {
            title = match[1].trim()
            const linkMatch = title.match(/^\[(.*?)\]\(.*?\)$/)
            if (linkMatch) {
              title = linkMatch[1]
            }
          }
        }

        let cover = ''
        if (src) {
          const imgMatch = src.match(/!\[.*?\]\((.*?)\)/)
          if (imgMatch) {
            cover = imgMatch[1]
          }
        }

        const post: Post = {
          title: title || url.split('/').pop()?.replace('.html', '') || '无标题',
          url,
          cover
        }

        if (url.includes('/posts/agent/')) {
          categories.agent.push(post)
        } else if (url.includes('/posts/app/')) {
          categories.app.push(post)
        } else if (url.includes('/posts/codex/')) {
          categories.codex.push(post)
        } else if (url.includes('/posts/vps/')) {
          categories.vps.push(post)
        }
      })

    return categories
  }
})
