import fs from 'node:fs'
import path from 'node:path'

/**
 * 生成所有路由用于网站地图
 * 
 * @description
 * 扫描所有静态页面、文档和博客内容，生成完整的路由列表用于 sitemap 生成
 * 
 * @returns {string[]} 返回包含所有页面路径的字符串数组
 * 
 * @example
 * // 返回: ['/', '/about', '/pricing', '/docs/start', '/blog/vue3-guide', ...]
 */
export const getSitemapRoutes = (): string[] => {
  const routes: string[] = []
  
  // 1. 静态页面路由
  const staticRoutes = [
    '/',
    '/about',
    '/agent',
    '/buidai',
    '/changelog',
    '/contact',
    '/demo',
    '/download',
    '/plugin',
    '/pricing',
    '/resources',
    '/solutions',
    '/blog',
    '/docs'
  ]
  routes.push(...staticRoutes)
  
  // 2. 文档路由
  const docsRoutes = getDocsRoutes()
  routes.push(...docsRoutes)
  
  // 3. 博客路由
  const blogRoutes = getBlogRoutes()
  routes.push(...blogRoutes)
  
  // 4. 更新日志路由
  const updateRoutes = getUpdateRoutes()
  routes.push(...updateRoutes)
  
  // 去重并排序
  return [...new Set(routes)].sort()
}

/**
 * 获取文档路由列表
 */
const getDocsRoutes = (): string[] => {
  const routes: string[] = []
  const docsDir = path.resolve(process.cwd(), 'content/docs')
  
  if (!fs.existsSync(docsDir)) return routes
  
  const traverse = (dir: string, urlPrefix: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      // 跳过 .navigation.yml 文件
      if (entry.name === '.navigation.yml') continue
      
      if (entry.isDirectory()) {
        // 去除目录名前的数字前缀
        const cleanName = entry.name.replace(/^\d+\./, '')
        traverse(path.join(dir, entry.name), `${urlPrefix}/${cleanName}`)
      } else if (entry.name.endsWith('.md')) {
        // 处理 Markdown 文件
        const cleanName = entry.name.replace(/^\d+\./, '').replace(/\.md$/, '')
        
        if (cleanName === 'index') {
          routes.push(urlPrefix)
        } else {
          routes.push(`${urlPrefix}/${cleanName}`)
        }
      }
    }
  }
  
  traverse(docsDir, '/docs')
  return routes
}

/**
 * 获取博客路由列表
 */
const getBlogRoutes = (): string[] => {
  const routes: string[] = []
  const blogDir = path.resolve(process.cwd(), 'content/blog')
  
  if (!fs.existsSync(blogDir)) return routes
  
  const entries = fs.readdirSync(blogDir, { withFileTypes: true })
  
  for (const entry of entries) {
    if (entry.name.endsWith('.md')) {
      const slug = entry.name.replace(/\.md$/, '')
      routes.push(`/blog/${slug}`)
    }
  }
  
  return routes
}

/**
 * 获取更新日志路由列表
 */
const getUpdateRoutes = (): string[] => {
  const routes: string[] = []
  const updateDir = path.resolve(process.cwd(), 'content/update')
  
  if (!fs.existsSync(updateDir)) return routes
  
  const entries = fs.readdirSync(updateDir, { withFileTypes: true })
  
  for (const entry of entries) {
    if (entry.name.endsWith('.md')) {
      const slug = entry.name.replace(/\.md$/, '')
      routes.push(`/changelog/${slug}`)
    }
  }
  
  return routes
}
