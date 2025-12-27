---
trigger: always_on
---

# BuidAI 项目文档

> 企业级 AI 应用开发平台官网模板 - 基于 Nuxt 4 + Vue 3 构建的现代化前端解决方案

## 📋 目录

- [项目概述](#项目概述)
- [核心特性](#核心特性)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [配置说明](#配置说明)
- [内容管理](#内容管理)
- [组件系统](#组件系统)
- [页面路由](#页面路由)
- [样式系统](#样式系统)
- [构建部署](#构建部署)
- [开发规范](#开发规范)
- [性能优化](#性能优化)
- [常见问题](#常见问题)

---

## 🎯 项目概述

### 项目定位

BuidAI（必定AI）是一个面向企业级 AI 应用开发平台的官网模板项目，专为以下用户群体设计：

- **AI 开发者**: 提供完整的技术文档和开发指南
- **AI 创业者**: 展示产品特性和商业价值
- **先进组织**: 企业级解决方案和私有部署方案

### 核心价值

- 降低企业 AI 应用开发门槛
- 提供一体化的 AI 生成创作平台
- 支持多模态内容创作（文本、图像、视频）
- 企业知识库管理和深度研究能力

### 项目特点

- ✅ **最新技术栈**: Nuxt 4 + Vue 3 + TypeScript
- ✅ **内容驱动**: 基于 Markdown 的文档与博客系统
- ✅ **组件化**: 开箱即用的落地页与导航组件
- ✅ **SEO 友好**: 完善的 Meta 标签和预渲染支持
- ✅ **响应式设计**: 移动端优先，全设备适配
- ✅ **性能优化**: SSG 静态生成，首屏加载快速

---

## 🚀 核心特性

### 1. 现代化技术栈

- **Nuxt 4.2.2**: 最新版本的 Vue 元框架
- **Vue 3.4.31**: Composition API + `<script setup>` 语法
- **TypeScript 5.5.4**: 类型安全的开发体验
- **Nuxt UI 4.3.0**: 企业级 UI 组件库
- **Tailwind CSS 4.1.18**: 原子化 CSS 框架

### 2. 内容管理系统

- **@nuxt/content 3.0**: 基于文件的 CMS
- **SQLite 数据库**: 高性能内容索引
- **集合系统**: blog、docs、update 三大内容集合
- **Schema 验证**: Zod 类型校验确保数据一致性

### 3. 完整的页面系统

#### 营销页面
- **首页**: 8 个模块化营销组件
- **产品页**: 必定AI、私有部署方案
- **解决方案**: 行业应用场景
- **定价方案**: 灵活的订阅模式

#### 内容页面
- **文档中心**: 三栏布局，TOC 导航
- **技术博客**: 文章列表和详情页
- **更新日志**: 版本发布记录
- **应用中心**: 插件市场展示

### 4. 组件化设计

#### 落地页组件（8个模块）
- `HeroSection`: Hero 区，打字机效果 + 垂直跑马灯
- `FeatureCarousel`: 特性轮播展示
- `ValueProps`: 核心价值主张
- `ScenarioSection`: 应用场景介绍
- `ProductFeatures`: 产品功能列表
- `ProductDesign`: 设计理念展示
- `CallToAction`: 行动号召区域
- `AIArsenal`: AI 工具库展示

#### 全局组件
- `AppNavigation`: 响应式导航栏
- `AppFooter`: 页脚信息
- `AppBanner`: 顶部横幅
- `BackToTop`: 返回顶部按钮
- `DocsSidebar`: 文档侧边栏导航

### 5. SEO 优化

```typescript
// 全局 Head 配置
{
  title: '必定AI - BuidAI新一代AI一站式创意生产力平台',
  description: '250+字详细描述',
  keywords: 'AI绘画, AI视频, Sora2, 知识库...',
  ogTitle: '...',
  ogDescription: '...',
  ogType: 'website'
}
```

### 6. 性能优化特性

- **静态站点生成（SSG）**: 预渲染所有页面
- **代码分割**: 路由级别的按需加载
- **图片懒加载**: `loading="lazy"` 属性
- **字体优化**: Google Fonts 预连接
- **滚动优化**: `requestAnimationFrame` 节流

---

## 💻 技术栈

### 核心依赖

```json
{
  "dependencies": {
    "@nuxt/content": "^3.0.0-alpha.8",
    "@nuxt/ui": "^4.3.0",
    "@nuxtjs/color-mode": "^3.4.2",
    "@tailwindcss/vite": "^4.1.18",
    "aos": "^2.3.4",
    "lucide-vue-next": "^0.561.0",
    "tailwindcss": "^4.1.18",
    "vue": "^3.4.31",
    "vue-router": "^4.4.0"
  }
}
```

### 开发依赖

```json
{
  "devDependencies": {
    "@headlessui/vue": "^1.7.22",
    "@heroicons/vue": "^2.1.5",
    "@nuxt/devtools": "^1.0.8",
    "@nuxt/fonts": "^0.12.1",
    "@storybook/vue3": "^10.1.9",
    "@tailwindcss/typography": "^0.5.19",
    "nuxt": "^4.2.2",
    "typescript": "^5.5.4",
    "vitest": "^3.0.0"
  }
}
```

### 工具链

- **包管理器**: npm / pnpm
- **构建引擎**: Nitro (Nuxt 内置)
- **测试框架**: Vitest + @nuxt/test-utils
- **组件开发**: Storybook
- **类型检查**: TypeScript + vue-tsc

---

## 📁 项目结构

```text
e:\buidai.com\buidai/
├── assets/                 # 静态资源
│   └── css/
│       └── main.css        # 全局样式、CSS变量、组件类
├── components/             # Vue组件（自动导入）
│   ├── landing/            # 落地页组件（8个模块）
│   │   ├── HeroSection.vue
│   │   ├── FeatureCarousel.vue
│   │   ├── ValueProps.vue
│   │   ├── ScenarioSection.vue
│   │   ├── ProductFeatures.vue
│   │   ├── ProductDesign.vue
│   │   ├── CallToAction.vue
│   │   └── AIArsenal.vue
│   ├── docs/
│   │   └── Sidebar.vue     # 文档侧边栏
│   ├── AppNavigation.vue   # 顶部导航
│   ├── AppFooter.vue       # 页脚
│   ├── AppBanner.vue       # 横幅
│   └── BackToTop.vue       # 返回顶部
├── content/                # 内容数据源（Markdown）
│   ├── blog/               # 博客文章
│   │   ├── 1.md
│   │   ├── 2.md
│   │   ├── 3.md
│   │   └── 4.md
│   ├── docs/               # 文档中心
│   │   ├── framework/      # 框架文档（5篇）
│   │   └── introduction/   # 入门指南（7篇）
│   └── update/             # 更新日志
│       ├── 2503.md
│       ├── 2504.md
│       └── 2510.md
├── layouts/
│   └── default.vue         # 默认布局
├── pages/                  # 页面路由
│   ├── blog/
│   │   ├── [...slug].vue   # 博客详情页
│   │   └── index.vue       # 博客列表
│   ├── docs/
│   │   ├── [...slug].vue   # 文档详情页
│   │   └── index.vue       # 文档首页
│   ├── index.vue           # 首页
│   ├── agent.vue           # 必定AI页
│   ├── buidai.vue          # 私有部署页
│   ├── pricing.vue         # 定价方案
│   ├── solutions.vue       # 解决方案
│   ├── plugin.vue          # 应用中心
│   ├── changelog.vue       # 更新日志
│   ├── resources.vue       # 资源中心
│   ├── contact.vue         # 联系我们
│   ├── download.vue        # 下载页
│   ├── demo.vue            # 演示页
│   └── about.vue           # 关于我们
├── stories/
│   └── Plugin.stories.ts   # Storybook 示例
├── utils/                  # 工具函数
│   ├── getDocsRoutes.ts    # 文档路由生成
│   ├── pluginData.ts       # 插件数据
│   └── scene.ts            # 场景数据
├── app.vue                 # 应用根组件
├── app.config.ts           # Nuxt UI 全局配置
├── nuxt.config.ts          # Nuxt 核心配置
├── content.config.ts       # Content 集合配置
├── tailwind.config.js      # Tailwind 主题配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 依赖管理
```

---

## 🎬 快速开始

### 环境要求

- **Node.js**: ≥ 18.0.0
- **包管理器**: npm、yarn 或 pnpm

### 安装步骤

```bash
# 1. 克隆项目
git clone <repository-url>
cd buidai

# 2. 安装依赖
npm install
# 或
pnpm install

# 3. 启动开发服务器
npm run dev

# 4. 访问项目
# 打开浏览器访问 http://localhost:3000
```

### 可用脚本

```bash
# 开发模式（热重载）
npm run dev

# 构建生产版本（静态站点生成）
npm run build

# 预览生产构建
npm run preview

# 类型检查
npm run typecheck
```

### 开发流程

1. **启动开发服务器**: `npm run dev`
2. **修改代码**: 保存后自动热重载
3. **类型检查**: 运行 `npm run typecheck` 确保类型安全
4. **构建测试**: `npm run build` 验证构建成功
5. **本地预览**: `npm run preview` 查看生产版本

---

## ⚙️ 配置说明

### Nuxt 配置 (nuxt.config.ts)

```typescript
export default defineNuxtConfig({
  // 兼容性日期（锁定默认行为）
  compatibilityDate: '2025-12-19',

  // 启用开发工具
  devtools: { enabled: true },

  // TypeScript配置
  typescript: {
    typeCheck: false  // 构建时禁用，通过脚本独立执行
  },

  // 模块
  modules: [
    '@nuxt/ui',       // UI 组件库
    '@nuxt/content'   // 内容管理
  ],

  // Content 配置
  content: {
    database: {
      type: 'sqlite'  // 使用 SQLite 提升性能
    }
  },

  // Nitro 配置
  nitro: {
    preset: 'static',           // 静态输出
    output: { publicDir: 'dist' },  // 输出目录
    prerender: {
      failOnError: false,       // 容错构建
      routes: getDocsRoutes()   // 动态路由注入
    }
  },

  // 全局样式
  css: ['~/assets/css/main.css']
})
```

### App 配置 (app.config.ts)

```typescript
export default defineAppConfig({
  ui: {
    // 主品牌色
    colors: {
      primary: 'violet'
    },
    // 图标映射（Phosphor Icons）
    icons: {
      search: 'i-ph-magnifying-glass',
      close: 'i-ph-x',
      check: 'i-ph-check',
      // ... 52 个图标别名
    }
  }
})
```

### Content 配置 (content.config.ts)

```typescript
export default defineContentConfig({
  collections: {
    // 博客集合
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        category: z.string(),
        date: z.date(),
        image: z.string().optional()
      })
    }),
    
    // 文档集合
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
        order: z.number().optional()
      })
    }),
    
    // 更新日志集合
    update: defineCollection({
      type: 'page',
      source: 'update/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        isMajor: z.boolean().optional()
      })
    })
  }
})
```

### Tailwind 配置 (tailwind.config.js)

```javascript
export default {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: { /* violet 色板 */ },
        accent: { /* blue 色板 */ },
        secondary: { /* gray 色板 */ }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'marquee-vertical': 'marqueeVertical 60s linear infinite'
      }
    }
  }
}
```

---

## 📝 内容管理

### 添加博客文章

在 `content/blog/` 目录下创建 Markdown 文件：

```markdown
---
title: '文章标题'
description: '文章简介'
date: 2025-12-26
category: '前端开发'
tags: ['Vue', 'Nuxt', 'TypeScript']
image: 'https://example.com/cover.jpg'
---

# 文章内容

这里是正文内容...
```

### 添加文档

在 `content/docs/` 目录下创建分类文件夹和 Markdown 文件：

```markdown
---
title: '快速开始'
description: '了解如何快速开始使用 BuidAI'
category: 'introduction'
order: 1
---

# 快速开始

本指南将帮助您快速开始...
```

### 添加更新日志

在 `content/update/` 目录下创建版本文件：

```markdown
---
title: 'v2.5.10 重大更新'
description: '新增视频生成功能'
date: '2025-12-26'
isMajor: true
authors:
  - name: 'BuidAI Team'
    avatar:
      src: '/avatar.jpg'
      alt: 'Team Avatar'
---

## 新功能

- 视频生成全面升级
- 新增多模态支持
```

### 文档路由规则

- 文件名数字前缀会被自动清理
- `1.introduction.md` → `/docs/introduction`
- `content/docs/framework/1.define.md` → `/docs/framework/define`
- 支持多级嵌套目录

---

## 🧩 组件系统

### 使用全局组件

所有 `components/` 目录下的组件自动注册，可直接使用：

```vue
<template>
  <div>
    <AppNavigation />  <!-- 无需 import -->
    <AppFooter />
  </div>
</template>
```

### 使用 Nuxt UI 组件

```vue
<template>
  <UButton
    size="xl"
    color="primary"
    label="点击我"
    @click="handleClick"
  />
  
  <UCard>
    <template #header>
      <h3>卡片标题</h3>
    </template>
    <p>卡片内容</p>
  </UCard>
</template>
```

### 创建新组件

在 `components/` 目录下创建 `.vue` 文件：

```vue
<!-- components/MyComponent.vue -->
<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style scoped>
.my-component {
  @apply p-4 rounded-lg bg-white shadow-sm;
}
</style>
```

---

## 🗺️ 页面路由

### 路由映射

| 路由 | 文件路径 | 说明 |
|------|---------|------|
| `/` | `pages/index.vue` | 首页 |
| `/agent` | `pages/agent.vue` | 必定AI产品页 |
| `/buidai` | `pages/buidai.vue` | 私有部署方案 |
| `/solutions` | `pages/solutions.vue` | 解决方案 |
| `/plugin` | `pages/plugin.vue` | 应用中心 |
| `/pricing` | `pages/pricing.vue` | 定价方案 |
| `/blog` | `pages/blog/index.vue` | 博客列表 |
| `/blog/:slug` | `pages/blog/[...slug].vue` | 博客详情 |
| `/docs` | `pages/docs/index.vue` | 文档首页 |
| `/docs/*` | `pages/docs/[...slug].vue` | 文档详情 |
| `/changelog` | `pages/changelog.vue` | 更新日志 |
| `/resources` | `pages/resources.vue` | 资源中心 |
| `/contact` | `pages/contact.vue` | 联系我们 |
| `/download` | `pages/download.vue` | 下载页面 |

### 创建新页面

在 `pages/` 目录下创建 `.vue` 文件：

```vue
<!-- pages/custom-page.vue -->
<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">{{ title }}</h1>
    <p>页面内容...</p>
  </div>
</template>

<script setup lang="ts">
const title = '自定义页面'

// SEO 配置
useSeoMeta({
  title: title,
  description: '页面描述',
  ogTitle: title,
  ogDescription: '页面描述'
})

// 指定布局
definePageMeta({
  layout: 'default'
})
</script>
```

---

## 🎨 样式系统

### CSS 变量

在 `assets/css/main.css` 中定义全局变量：

```css
:root {
  --ui-primary: oklch(58.5% .233 277.117);
  --ui-radius: 0.125rem;
}

.dark {
  --ui-primary: white;
}
```

### Tailwind 工具类

```vue
<template>
  <!-- 间距 -->
  <div class="section-padding">  <!-- py-16 sm:py-20 lg:py-24 -->
    <div class="container-padding">  <!-- px-4 sm:px-6 lg:px-8 -->
      
      <!-- 按钮 -->
      <button class="btn-primary">主要按钮</button>
      <button class="btn-secondary">次要按钮</button>
      <button class="btn-ghost">幽灵按钮</button>
      
      <!-- 卡片 -->
      <div class="card card-hover">
        卡片内容
      </div>
      
    </div>
  </div>
</template>
```

### 自定义动画

```vue
<template>
  <div class="animate-slide-up animation-delay-200">
    延迟200ms上滑淡入
  </div>
  
  <div class="animate-fade-in">
    淡入效果
  </div>
  
  <div class="animate-marquee-vertical">
    垂直跑马灯
  </div>
</template>
```

### 深色模式

```vue
<template>
  <div class="bg-white dark:bg-gray-900">
    <p class="text-gray-900 dark:text-white">
      自动适配深色模式
    </p>
  </div>
</template>
```

---

## 🚀 构建部署

### 本地构建

```bash
# 构建静态站点
npm run build

# 输出目录: dist/
# 包含所有静态资源和预渲染的 HTML 页面
```

### Vercel 部署

1. **连接仓库**
   - 在 Vercel 控制台导入 Git 仓库

2. **构建配置**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install"
   }
   ```

3. **环境变量**（如需要）
   - 在 Vercel 项目设置中添加环境变量

4. **自动部署**
   - 推送到主分支自动触发部署

### Cloudflare Pages 部署

1. **连接仓库**
   - 在 Cloudflare Pages 控制台连接 Git 仓库

2. **构建设置**
   ```
   构建命令: npm run build
   构建输出目录: dist
   根目录: /
   ```

3. **环境变量**
   - `NODE_VERSION`: 18

### 其他平台

项目支持部署到任何支持静态站点的平台：

- **Netlify**: 配置同 Vercel
- **GitHub Pages**: 需要配置 base path
- **自建服务器**: 使用 Nginx/Apache 托管 `dist` 目录

---

## 📐 开发规范

### 代码风格

#### Vue 组件

```vue
<template>
  <!-- 使用语义化的 HTML -->
  <article class="blog-post">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <slot />
    </main>
  </article>
</template>

<script setup lang="ts">
// 使用 Composition API
import { ref, computed } from 'vue'

// TypeScript 接口定义
interface Props {
  title: string
  author?: string
}

// defineProps 类型推断
const props = defineProps<Props>()

// 响应式状态
const count = ref(0)

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 方法
const increment = () => {
  count.value++
}
</script>
```

#### 命名规范

- **组件**: PascalCase (如 `AppNavigation.vue`)
- **工具函数**: camelCase (如 `getDocsRoutes.ts`)
- **CSS 类**: kebab-case (如 `btn-primary`)
- **常量**: UPPER_SNAKE_CASE (如 `MAX_COUNT`)

### TypeScript 规范

```typescript
// 明确的类型定义
interface User {
  id: number
  name: string
  email: string
  role?: 'admin' | 'user'
}

// 函数类型注解
function getUserById(id: number): Promise<User | null> {
  // ...
}

// 泛型使用
function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value)
}
```

### 样式规范

```vue
<template>
  <!-- 优先使用 Tailwind 工具类 -->
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
    
    <!-- 复杂样式使用 scoped CSS -->
    <div class="custom-gradient">
      内容
    </div>
  </div>
</template>

<style scoped>
/* 仅在必要时使用自定义 CSS */
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
```

### 可访问性规范

```vue
<template>
  <!-- 使用语义化标签 -->
  <nav aria-label="主导航">
    <ul>
      <li><a href="/">首页</a></li>
    </ul>
  </nav>
  
  <!-- 图片添加 alt 属性 -->
  <img src="/logo.svg" alt="BuidAI Logo" />
  
  <!-- 按钮添加 aria-label -->
  <button aria-label="打开菜单" @click="toggleMenu">
    <MenuIcon />
  </button>
  
  <!-- 表单标签关联 -->
  <label for="email">邮箱</label>
  <input id="email" type="email" />
</template>
```

---

## ⚡ 性能优化

### 1. 静态站点生成（SSG）

所有页面在构建时预渲染为 HTML：

```typescript
// nuxt.config.ts
nitro: {
  prerender: {
    routes: getDocsRoutes()  // 动态路由预渲染
  }
}
```

### 2. 代码分割

- 路由级别自动代码分割
- 组件懒加载

```vue
<script setup>
// 懒加载组件
const HeavyComponent = defineAsyncComponent(() =>
  import('~/components/HeavyComponent.vue')
)
</script>
```

### 3. 图片优化

```vue
<template>
  <!-- 懒加载 -->
  <img src="/image.jpg" loading="lazy" decoding="async" />
  
  <!-- 响应式图片 -->
  <picture>
    <source srcset="/image.webp" type="image/webp">
    <img src="/image.jpg" alt="描述" />
  </picture>
</template>
```

### 4. 字体优化

```html
<!-- 预连接 Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 5. 滚动性能优化

```typescript
// 使用 requestAnimationFrame 节流
const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // 处理滚动逻辑
      ticking = false
    })
    ticking = true
  }
}
```

### 6. 内容数据库优化

```typescript
// 使用 SQLite 索引内容
content: {
  database: {
    type: 'sqlite'
  }
}
```

---

## ❓ 常见问题

### Q1: 如何修改主题颜色？

**A**: 在 `app.config.ts` 中修改：

```typescript
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue'  // 改为其他颜色：green, red, purple 等
    }
  }
})
```

### Q2: 如何添加新的导航菜单项？

**A**: 修改 `components/AppNavigation.vue`：

```typescript
const items = computed<NavigationMenuItem[][]>(() => [
  [
    { label: '首页', to: '/', icon: 'i-lucide-house' },
    { label: '新菜单', to: '/new-page', icon: 'i-lucide-star' },  // 添加这行
    // ...
  ]
])
```

### Q3: 构建时出现类型错误怎么办？

**A**: 

1. 运行独立类型检查：`npm run typecheck`
2. 查看具体错误信息
3. 如果是 Nuxt Content 相关，可临时使用 `@ts-ignore`

### Q4: 如何禁用深色模式？

**A**: 在 `nuxt.config.ts` 中配置：

```typescript
colorMode: {
  preference: 'light',  // 强制浅色模式
  fallback: 'light'
}
```

### Q5: 如何修改页脚内容？

**A**: 编辑 `components/AppFooter.vue` 文件

### Q6: 文档页面404怎么办？

**A**: 

1. 检查文件路径是否正确
2. 确认文件名是否包含数字前缀
3. 运行 `npm run build` 重新生成路由
4. 查看 `utils/getDocsRoutes.ts` 是否正确遍历

### Q7: 如何自定义 Hero 区的打字机文本？

**A**: 修改 `components/landing/HeroSection.vue` 中的文本数组

### Q8: 如何添加谷歌分析？

**A**: 在 `nuxt.config.ts` 的 `app.head.script` 中添加 GA 脚本

### Q9: 如何优化首屏加载速度？

**A**: 

1. 使用 SSG 预渲染
2. 图片使用 WebP 格式
3. 启用 CDN 加速
4. 懒加载非关键组件
5. 压缩静态资源

### Q10: 部署到子目录怎么配置？

**A**: 在 `nuxt.config.ts` 中添加：

```typescript
app: {
  baseURL: '/subdirectory/',
  buildAssetsDir: '/subdirectory/_nuxt/'
}
```

---

## 📚 相关资源

### 官方文档

- [Nuxt 4 文档](https://nuxt.com/docs)
- [Vue 3 文档](https://vuejs.org/)
- [Nuxt UI 文档](https://ui.nuxt.com/)
- [Nuxt Content 文档](https://content.nuxt.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

### 图标资源

- [Heroicons](https://heroicons.com/)
- [Lucide Icons](https://lucide.dev/)
- [Phosphor Icons](https://phosphoricons.com/)

### 学习资源

- [Vue School](https://vueschool.io/)
- [Nuxt Master](https://masteringnuxt.com/)
- [Tailwind UI](https://tailwindui.com/)

---

## 🤝 贡献指南

### 提交代码

1. Fork 项目
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

### 代码审查标准

- ✅ TypeScript 类型检查通过
- ✅ 组件可复用性强
- ✅ 遵循项目代码规范
- ✅ 添加必要的注释
- ✅ 响应式设计适配

---

## 📄 许可证

MIT License

---

## 📞 联系方式

- **官网**: https://buidai.com
- **文档**: https://docs.buidai.com
- **GitHub**: https://github.com/buidai
- **邮箱**: contact@buidai.com

---

**最后更新**: 2025-12-26  
**版本**: 1.0.0  
**维护者**: BuidAI Team
