import { defineNuxtConfig } from 'nuxt/config'
import { getDocsRoutes } from '../utils/getDocsRoutes'

export default defineNuxtConfig({
  // Nuxt 兼容性日期，用于锁定默认行为
  compatibilityDate: '2025-12-19',

  // 启用 Nuxt DevTools 开发工具
  devtools: { enabled: true },

  // TypeScript 配置
  typescript: {
    // 禁用构建时的类型检查以加快构建速度 (建议通过 npm run typecheck 单独运行)
    typeCheck: false
  },

  // 启用的 Nuxt 模块
  modules: [
    '@nuxt/ui',      // UI 组件库 (基于 Tailwind CSS)
    '@nuxt/content'  // 内容管理模块 (Markdown 支持)
  ],

  // @ts-ignore - 字体模块配置
  fonts: {
    // 禁用自动下载 Google Fonts，使用本地或手动引入
    providers: {
      google: false,
      googleicons: false
    }
  },

  // @ts-ignore - Content 模块配置
  content: {
    // 使用 SQLite 作为内容数据库
    database: {
      type: 'sqlite'
    }
  },

  // Nitro 服务端引擎配置
  nitro: {
    // preset: 'vercel-static', // 已禁用 Vercel 预设，改用通用静态输出
    output: {
      publicDir: 'dist' // 强制输出目录为 'dist' 以适配 Vercel 默认配置
    },
    // 预渲染配置
    prerender: {
      failOnError: false, // 遇到错误时不中断构建
      routes: getDocsRoutes() // 注入动态生成的文档路由
    }
  },

  // @ts-ignore - 颜色模式配置
  colorMode: {
    classSuffix: '' // 移除类名后缀 (即使用 'dark' 而不是 'dark-mode')
  },

  // 应用全局配置
  app: {
    // HTML Head 配置
    head: {
      title: '智言AI-智言万象,新一代AI一站式创意生产力平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '智言AI,智言万象,智言AI是领先的企业级开源AI智能体搭建平台，提供强大的智能体搭建、编排与管理系统。我们赋能企业快速构建对话型智能体、任务型智能体及多智能体协同系统。基于大语言模型、RAG、Agentic Workflow与低代码技术，打造懂业务、能决策、可行动的AI数字员工与超级助手，实现业务流程自动化与智能决策，驱动企业增长' },
        { name: 'keywords', content: '智言AI，智言万象,智言AI,AIAgent,开源智能体平台,企业级AI,MCP,知识库,工作流,LLM聚合,AI应用开发' },

        // Open Graph 社交分享标签
        { property: 'og:title', content: '智言AI,智言万象 - 降低企业 AI 应用开发门槛' },
        { property: 'og:description', content: '智言AI,智言万象 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        // 网站图标配置
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }, // 优先使用 SVG
        { rel: 'apple-touch-icon', href: '/logo.svg' }, // iOS 图标

        // 字体预连接与加载
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }
      ]
    }
  },

  // 全局 CSS 文件
  css: ['~/assets/css/main.css']
})
