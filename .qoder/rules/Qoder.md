---
trigger: always_on
---

# 智言万象 项目开发规则

> 本文档定义了 智言万象 项目的开发规范、代码标准和最佳实践，所有开发者必须遵循这些规则以确保代码质量和团队协作效率。

## 📋 目录

- [技术栈约束](#技术栈约束)
- [项目结构规范](#项目结构规范)
- [代码规范](#代码规范)
- [组件开发规范](#组件开发规范)
- [样式规范](#样式规范)
- [TypeScript 规范](#typescript-规范)
- [内容管理规范](#内容管理规范)
- [路由规范](#路由规范)
- [性能优化规范](#性能优化规范)
- [SEO 规范](#seo-规范)
- [可访问性规范](#可访问性规范)
- [Git 提交规范](#git-提交规范)
- [测试规范](#测试规范)
- [构建部署规范](#构建部署规范)

---

## 🎯 技术栈约束

### 必须使用的技术

```yaml
框架:
  - Nuxt: ^4.2.2  # 必须使用 Nuxt 4
  - Vue: ^3.4.31  # 必须使用 Vue 3 Composition API
  - TypeScript: ^5.5.4  # 强制类型检查

UI 框架:
  - @nuxt/ui: ^4.3.0  # 主要 UI 组件库
  - Tailwind CSS: ^4.1.18  # 原子化 CSS
  - @tailwindcss/typography: ^0.5.19  # 排版插件

内容管理:
  - @nuxt/content: ^3.0.0-alpha.8  # Markdown CMS
  - SQLite: 内容索引数据库

图标库:
  - @heroicons/vue: ^2.1.5  # 主要图标库
  - lucide-vue-next: ^0.561.0  # 辅助图标库
  - @iconify-json/ph: ^1.2.2  # Phosphor Icons

工具库:
  - aos: ^2.3.4  # 滚动动画
  - @headlessui/vue: ^1.7.22  # 无样式组件
```

### 禁止使用的技术

```yaml
❌ 禁止:
  - Vue 2.x 或 Options API 风格
  - jQuery 或其他 DOM 操作库
  - Bootstrap 或其他 CSS 框架（已有 Tailwind）
  - 未经批准的第三方 UI 库
  - Moment.js（使用原生 Date API）
  - Lodash（使用原生 ES6+ 方法）
```

---

## 📁 项目结构规范

### 目录组织规则

```typescript
/**
 * 1. components/ - 组件目录规范
 */
// ✅ 正确：按功能分类
components/
  landing/          // 落地页专用组件
    HeroSection.vue
    FeatureCarousel.vue
  docs/            // 文档系统组件
    Sidebar.vue
  AppNavigation.vue  // 全局组件（App 前缀）
  AppFooter.vue

// ❌ 错误：混乱的组织
components/
  Navigation.vue   // 缺少前缀
  hero.vue         // 命名不规范
  feature-1.vue    // 无意义命名

/**
 * 2. pages/ - 页面目录规范
 */
// ✅ 正确：清晰的路由结构
pages/
  index.vue              // 首页
  blog/
    index.vue            // 列表页
    [...slug].vue        // 详情页（动态路由）
  docs/
    index.vue
    [...slug].vue

// ❌ 错误：混乱的路由
pages/
  home.vue              // 应该用 index.vue
  blog-list.vue         // 应该用目录结构
  blog-detail.vue

/**
 * 3. content/ - 内容目录规范
 */
// ✅ 正确：按集合分类
content/
  blog/                // 博客集合
    1.md               // 文件名可以有数字前缀
  docs/                // 文档集合
    framework/         // 按主题分类
      define.md
    introduction/
      1.start.md       // 数字前缀用于排序

// ❌ 错误：混乱的内容
content/
  article-1.md         // 应该分类到 blog/
  docs.md              // 应该用目录结构

/**
 * 4. utils/ - 工具函数规范
 */
// ✅ 正确：单一职责
utils/
  getDocsRoutes.ts     // 文档路由生成
  pluginData.ts        // 插件数据管理
  scene.ts             // 场景数据

// ❌ 错误：杂乱的工具
utils/
  helpers.ts           // 过于宽泛
  util.ts              // 命名不清晰
  functions.ts         // 无意义命名
```

### 文件命名规范

```yaml
组件文件:
  格式: PascalCase
  示例:
    ✅ AppNavigation.vue
    ✅ HeroSection.vue
    ✅ DocsSidebar.vue
    ❌ app-navigation.vue
    ❌ heroSection.vue
    ❌ docs_sidebar.vue

页面文件:
  格式: kebab-case 或特殊命名
  示例:
    ✅ index.vue
    ✅ [...slug].vue
    ✅ pricing.vue
    ❌ Pricing.vue
    ❌ pricingPage.vue

工具文件:
  格式: camelCase
  示例:
    ✅ getDocsRoutes.ts
    ✅ pluginData.ts
    ❌ GetDocsRoutes.ts
    ❌ plugin-data.ts

内容文件:
  格式: kebab-case.md
  示例:
    ✅ 1.start.md
    ✅ docker-installation.md
    ❌ DockerInstallation.md
    ❌ docker_installation.md
```

---

## 💻 代码规范

### Vue 3 Composition API 规范

```vue
<!-- ✅ 正确的组件结构 -->
<template>
  <!-- 1. 必须有单一根元素 -->
  <div class="component-root">
    <!-- 2. 使用语义化 HTML -->
    <header>
      <h1>{{ title }}</h1>
    </header>
    
    <!-- 3. 条件渲染优先使用 v-if -->
    <main v-if="isReady">
      <!-- 4. 列表渲染必须有 key -->
      <article
        v-for="item in items"
        :key="item.id"
      >
        {{ item.title }}
      </article>
    </main>
    
    <!-- 5. 使用具名插槽 -->
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
// ✅ 1. 导入顺序规范
// (1) Vue 核心
import { ref, computed, onMounted } from 'vue'
// (2) Nuxt 工具
import { useRoute, useRouter } from 'vue-router'
// (3) 第三方库
import { debounce } from 'lodash-es'
// (4) 本地组件
import MyComponent from '~/components/MyComponent.vue'
// (5) 类型定义
import type { User } from '~/types'

// ✅ 2. TypeScript 接口定义
interface Props {
  title: string
  items?: Array<{ id: number; title: string }>
  isReady?: boolean
}

interface Emits {
  (e: 'update', value: string): void
  (e: 'close'): void
}

// ✅ 3. Props 和 Emits 定义
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  isReady: false
})

const emit = defineEmits<Emits>()

// ✅ 4. 响应式状态（ref/reactive）
const count = ref(0)
const user = ref<User | null>(null)

// ✅ 5. 计算属性
const doubleCount = computed(() => count.value * 2)
const itemCount = computed(() => props.items.length)

// ✅ 6. 方法定义
const increment = () => {
  count.value++
  emit('update', String(count.value))
}

const handleClose = () => {
  emit('close')
}

// ✅ 7. 生命周期钩子
onMounted(() => {
  console.log('Component mounted')
})

// ✅ 8. 监听器（如果需要）
watch(() => props.title, (newVal) => {
  console.log('Title changed:', newVal)
})
</script>

<style scoped>
/* ✅ 1. 优先使用 Tailwind 类 */
/* ✅ 2. 仅在必要时使用自定义样式 */
.component-root {
  /* 使用 CSS 变量 */
  color: var(--ui-primary);
}

/* ✅ 3. 使用嵌套选择器 */
.component-root {
  header {
    @apply mb-4;
  }
}
</style>
```

```vue
<!-- ❌ 错误的组件结构 -->
<template>
  <!-- ❌ 1. 缺少根元素 -->
  <h1>{{ title }}</h1>
  <div>Content</div>
  
  <!-- ❌ 2. 不语义化的标签 -->
  <div class="header">
    <div class="title">Title</div>
  </div>
  
  <!-- ❌ 3. v-for 缺少 key -->
  <div v-for="item in items">
    {{ item }}
  </div>
</template>

<script setup>
// ❌ 1. 缺少 TypeScript
// ❌ 2. 使用 Options API
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
```

### 命名规范

```typescript
// ✅ 正确的命名
// 1. 变量和函数：camelCase
const userName = 'John'
const getUserById = (id: number) => {}

// 2. 常量：UPPER_SNAKE_CASE
const MAX_RETRY_COUNT = 3
const API_BASE_URL = 'https://api.example.com'

// 3. 类型/接口：PascalCase
interface UserProfile {}
type BlogPost = {}

// 4. 组件：PascalCase
const MyComponent = defineComponent({})

// 5. 布尔值：is/has/should 前缀
const isLoading = ref(false)
const hasError = ref(false)
const shouldUpdate = computed(() => true)

// 6. 事件处理器：handle 前缀
const handleClick = () => {}
const handleSubmit = () => {}

// ❌ 错误的命名
const UserName = 'John'  // 变量不应该用 PascalCase
const get_user = () => {}  // 应该用 camelCase
const maxretrycount = 3  // 常量应该用 UPPER_SNAKE_CASE
const loading = ref(false)  // 布尔值应该有前缀
const click = () => {}  // 事件处理器应该有 handle 前缀
```

---

## 🧩 组件开发规范

### 组件设计原则

```yaml
单一职责:
  - 每个组件只负责一个功能
  - 复杂组件拆分为多个子组件
  - 逻辑和展示分离

可复用性:
  - 通过 props 传递数据
  - 通过 emits 通信
  - 使用插槽提供灵活性

可维护性:
  - 清晰的命名
  - 完整的类型定义
  - 必要的注释
```

### 组件模板

```vue
<template>
  <div :class="rootClass">
    <!-- 使用具名插槽提供灵活性 -->
    <slot name="header">
      <header class="default-header">
        <h2>{{ title }}</h2>
      </header>
    </slot>
    
    <!-- 默认插槽 -->
    <main class="content">
      <slot />
    </main>
    
    <!-- 条件插槽 -->
    <footer v-if="$slots.footer" class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * 组件属性接口
 */
interface Props {
  /** 组件标题 */
  title: string
  /** 是否显示边框 */
  bordered?: boolean
  /** 组件尺寸 */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * 组件事件接口
 */
interface Emits {
  /** 点击事件 */
  (e: 'click', payload: MouseEvent): void
}

// Props 定义
const props = withDefaults(defineProps<Props>(), {
  bordered: false,
  size: 'md'
})

// Emits 定义
const emit = defineEmits<Emits>()

// 计算样式类
const rootClass = computed(() => ({
  'border border-gray-200': props.bordered,
  'text-sm': props.size === 'sm',
  'text-base': props.size === 'md',
  'text-lg': props.size === 'lg'
}))
</script>
```

### 组件通信规范

```typescript
// ✅ 正确：使用 props 和 emits
// 父组件
<template>
  <ChildComponent
    :items="items"
    @update="handleUpdate"
  />
</template>

// 子组件
const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

const handleChange = (value: string) => {
  emit('update', value)
}

// ✅ 正确：使用 provide/inject（跨层级）
// 祖先组件
provide('theme', 'dark')

// 后代组件
const theme = inject<string>('theme', 'light')

// ❌ 错误：直接修改 props
const props = defineProps<{ count: number }>()
props.count++  // 不允许

// ❌ 错误：使用全局状态（应该用 composables）
window.globalData = {}  // 不允许
```

---

## 🎨 样式规范

### Tailwind CSS 使用规范

```vue
<template>
  <!-- ✅ 正确：使用 Tailwind 原子类 -->
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
    <h2 class="text-2xl font-bold text-gray-900">Title</h2>
    <button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
      Click
    </button>
  </div>
  
  <!-- ✅ 正确：使用自定义组件类 -->
  <div class="section-padding container-padding">
    <button class="btn-primary">Primary</button>
    <button class="btn-secondary">Secondary</button>
  </div>
  
  <!-- ✅ 正确：响应式设计 -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- 内容 -->
  </div>
  
  <!-- ✅ 正确：深色模式支持 -->
  <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- 内容 -->
  </div>
  
  <!-- ❌ 错误：内联样式 -->
  <div style="color: red; font-size: 16px;">
    应该使用 Tailwind 类
  </div>
  
  <!-- ❌ 错误：过长的类名 -->
  <div class="flex items-center justify-center p-4 m-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
    <!-- 应该提取为组件类或使用组件 -->
  </div>
</template>

<style scoped>
/* ✅ 正确：仅在必要时使用自定义 CSS */
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* ✅ 正确：使用 @apply 复用 Tailwind */
.card-custom {
  @apply p-6 bg-white rounded-xl shadow-sm border border-gray-200;
}

/* ✅ 正确：使用 CSS 变量 */
.themed-text {
  color: var(--ui-primary);
}

/* ❌ 错误：重复定义 Tailwind 已有的样式 */
.my-flex {
  display: flex;
  align-items: center;
  /* 应该直接使用 Tailwind 的 flex items-center */
}
</style>
```

### CSS 类命名规范

```yaml
全局工具类:
  前缀: 无
  格式: kebab-case
  示例:
    ✅ section-padding
    ✅ container-padding
    ✅ btn-primary
    ❌ sectionPadding
    ❌ button_primary

组件私有类:
  前缀: 组件名
  格式: kebab-case
  示例:
    ✅ hero-section-title
    ✅ nav-menu-item
    ❌ title
    ❌ item

BEM 命名（如使用）:
  格式: block__element--modifier
  示例:
    ✅ card__header--large
    ✅ nav__item--active
```

### 颜色使用规范

```yaml
主色系:
  primary: violet (Tailwind primary-*)
  用途: 主要按钮、链接、强调内容

辅助色:
  accent: blue (Tailwind accent-*)
  用途: 辅助信息、次要操作

中性色:
  gray: 灰度色板
  用途: 文本、边框、背景

使用规范:
  ✅ class="bg-primary-600 text-white"
  ✅ class="text-gray-900 dark:text-white"
  ❌ class="bg-red-500"  # 应使用预定义色系
  ❌ style="color: #667eea"  # 应使用 Tailwind 类
```

---

## 📘 TypeScript 规范

### 类型定义规范

```typescript
// ✅ 正确：明确的类型定义
interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
  createdAt: Date
  metadata?: Record<string, unknown>
}

interface BlogPost {
  title: string
  description: string
  date: Date
  category: string
  tags: string[]
  image?: string
}

// ✅ 正确：使用 type 定义联合类型和工具类型
type Status = 'pending' | 'success' | 'error'
type Nullable<T> = T | null
type PartialUser = Partial<User>

// ✅ 正确：泛型使用
function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value)
}

interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

// ❌ 错误：使用 any
const data: any = {}  // 应该定义具体类型

// ❌ 错误：不明确的类型
interface Config {
  options: object  // 应该定义具体结构
  callback: Function  // 应该定义函数签名
}
```

### 函数类型规范

```typescript
// ✅ 正确：完整的函数签名
function getUserById(id: number): Promise<User | null> {
  // 实现
}

const formatDate = (date: Date, format: string = 'YYYY-MM-DD'): string => {
  // 实现
}

// ✅ 正确：异步函数
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)
  return response.json()
}

// ✅ 正确：回调函数类型
type EventHandler = (event: Event) => void
type AsyncCallback<T> = (data: T) => Promise<void>

// ❌ 错误：缺少返回类型
function calculate(a: number, b: number) {  // 应该注明返回类型
  return a + b
}

// ❌ 错误：使用 Function 类型
const handler: Function = () => {}  // 应该定义具体签名
```

### 组件 Props 类型规范

```typescript
// ✅ 正确：使用 interface 定义 Props
interface Props {
  // 必需属性
  title: string
  items: Array<{
    id: number
    name: string
  }>
  
  // 可选属性
  description?: string
  maxCount?: number
  
  // 联合类型
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  
  // 函数类型
  onUpdate?: (value: string) => void
  
  // 复杂类型
  config?: {
    enabled: boolean
    timeout: number
  }
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'primary',
  maxCount: 10
})

// ❌ 错误：不明确的类型
interface Props {
  data: any  // 应该定义具体结构
  options: object  // 应该定义具体属性
}
```

---

## 📝 内容管理规范

### Markdown 文件规范

```markdown
<!-- ✅ 正确的博客文章 -->
---
title: 'Vue 3 Composition API 完全指南'
description: '深入理解 Vue 3 的 Composition API，掌握现代 Vue 开发'
date: 2025-12-26
category: '前端开发'
tags: ['Vue', 'TypeScript', 'Composition API']
image: 'https://example.com/cover.jpg'
---

# Vue 3 Composition API 完全指南

## 目录

- [简介](#简介)
- [核心概念](#核心概念)

## 简介

Composition API 是 Vue 3 引入的...

## 核心概念

### ref 和 reactive

...
```

```markdown
<!-- ✅ 正确的文档 -->
---
title: '快速开始'
description: '了解如何快速开始使用 智言万象'
category: 'introduction'
order: 1
links:
  - label: 'GitHub'
    icon: 'i-simple-icons-github'
    to: 'https://github.com/智言万象'
    target: '_blank'
---

# 快速开始

本指南将帮助您快速开始使用 智言万象。

## 环境要求

- Node.js >= 18.0.0
- npm 或 pnpm

## 安装步骤

```bash
npm install
npm run dev
```
```

### 内容文件命名规范

```yaml
博客文章:
  位置: content/blog/
  命名: 数字或语义化名称.md
  示例:
    ✅ 1.md, 2.md
    ✅ vue3-composition-api.md
    ✅ nuxt4-migration-guide.md
    ❌ blog1.md
    ❌ article_2024_12.md

文档:
  位置: content/docs/[category]/
  命名: [数字.]语义化名称.md
  示例:
    ✅ 1.start.md
    ✅ docker-installation.md
    ✅ 2.configuration.md
    ❌ doc1.md
    ❌ page_1.md

更新日志:
  位置: content/update/
  命名: 版本号.md
  示例:
    ✅ 2503.md  # v2.5.3
    ✅ 2510.md  # v2.5.10
    ❌ version-1.md
    ❌ update_2024.md
```

### Frontmatter 必填字段

```yaml
博客 (blog):
  必填:
    - title: string
    - description: string
    - date: Date
    - category: string
    - tags: string[]
  可选:
    - image: string

文档 (docs):
  必填:
    - title: string
    - description: string
  可选:
    - category: string
    - order: number
    - links: Array<{label, icon, to, target}>

更新日志 (update):
  必填:
    - title: string
    - description: string
    - date: string
  可选:
    - isMajor: boolean
    - image: string
    - authors: Array<{name, avatar}>
```

---

## 🛣️ 路由规范

### 页面路由规范

```yaml
静态路由:
  格式: pages/名称.vue
  示例:
    ✅ pages/index.vue → /
    ✅ pages/pricing.vue → /pricing
    ✅ pages/about.vue → /about

动态路由:
  格式: pages/[param].vue
  示例:
    ✅ pages/blog/[...slug].vue → /blog/*
    ✅ pages/docs/[...slug].vue → /docs/*
    ❌ pages/blog/[id].vue  # 应该用 [...slug]

嵌套路由:
  格式: pages/目录/子页面.vue
  示例:
    ✅ pages/blog/index.vue → /blog
    ✅ pages/blog/[...slug].vue → /blog/:slug
```

### 路由命名规范

```typescript
// ✅ 正确：使用路径导航
<NuxtLink to="/docs">文档</NuxtLink>
<NuxtLink to="/blog/vue3-guide">文章</NuxtLink>

// ✅ 正确：程序化导航
const router = useRouter()
router.push('/pricing')
router.push({ path: '/docs', query: { tab: 'api' } })

// ❌ 错误：硬编码 URL
<a href="/docs">文档</a>  // 应该用 NuxtLink
window.location.href = '/pricing'  // 应该用 router.push
```

### 预渲染路由规范

```typescript
// ✅ 正确：在 nuxt.config.ts 中配置预渲染
nitro: {
  prerender: {
    routes: getDocsRoutes()  // 使用工具函数生成
  }
}

// ✅ 正确：工具函数实现
export const getDocsRoutes = (): string[] => {
  // 遍历 content/docs 目录
  // 返回所有路由路径
}

// ❌ 错误：手动维护路由列表
prerender: {
  routes: ['/docs/start', '/docs/config']  // 难以维护
}
```

---

## ⚡ 性能优化规范

### 图片优化规范

```vue
<!-- ✅ 正确：使用懒加载 -->
<img
  src="/image.jpg"
  alt="描述"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
/>

<!-- ✅ 正确：响应式图片 -->
<picture>
  <source srcset="/image.webp" type="image/webp">
  <source srcset="/image.jpg" type="image/jpeg">
  <img src="/image.jpg" alt="描述" />
</picture>

<!-- ❌ 错误：缺少优化属性 -->
<img src="/large-image.jpg" />  // 缺少 loading, width, height

<!-- ❌ 错误：使用过大的图片 -->
<img src="/original-5mb.jpg" />  // 应该压缩和优化
```

### 代码分割规范

```typescript
// ✅ 正确：组件懒加载
const HeavyComponent = defineAsyncComponent(() =>
  import('~/components/HeavyComponent.vue')
)

// ✅ 正确：路由级别代码分割（自动）
pages/
  index.vue        // 自动分割
  about.vue        // 自动分割
  pricing.vue      // 自动分割

// ❌ 错误：在 app.vue 中导入所有组件
import Component1 from '~/components/Component1.vue'
import Component2 from '~/components/Component2.vue'
// ... 应该按需加载
```

### 请求优化规范

```typescript
// ✅ 正确：使用 useAsyncData 缓存
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').all()
)

// ✅ 正确：并行请求
const [{ data: page }, { data: surround }] = await Promise.all([
  useAsyncData('page', () => fetchPage()),
  useAsyncData('surround', () => fetchSurround())
])

// ❌ 错误：串行请求
const page = await fetchPage()
const surround = await fetchSurround()  // 应该并行

// ❌ 错误：缺少缓存
const posts = await queryCollection('blog').all()  // 每次都重新请求
```

### 性能监控规范

```yaml
必须监控:
  - First Contentful Paint (FCP) < 1.8s
  - Largest Contentful Paint (LCP) < 2.5s
  - Time to Interactive (TTI) < 3.8s
  - Cumulative Layout Shift (CLS) < 0.1

优化目标:
  - 首屏加载 < 3s
  - 页面大小 < 500KB (gzip)
  - 请求数量 < 50
```

---

## 🔍 SEO 规范

### Meta 标签规范

```vue
<script setup>
// ✅ 正确：每个页面设置 SEO Meta
useSeoMeta({
  title: '页面标题 - 智言万象',
  description: '页面描述，不超过 160 字符',
  keywords: '关键词1, 关键词2, 关键词3',
  
  // Open Graph
  ogTitle: '页面标题',
  ogDescription: '页面描述',
  ogType: 'website',
  ogImage: 'https://example.com/image.jpg',
  ogUrl: 'https://example.com/page',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: '页面标题',
  twitterDescription: '页面描述',
  twitterImage: 'https://example.com/image.jpg'
})

// ❌ 错误：缺少 SEO 配置
// 没有设置任何 Meta 标签
</script>
```

### 语义化 HTML 规范

```vue
<!-- ✅ 正确：使用语义化标签 -->
<template>
  <article>
    <header>
      <h1>{{ title }}</h1>
      <time :datetime="date">{{ formatDate(date) }}</time>
    </header>
    
    <main>
      <section>
        <h2>章节标题</h2>
        <p>内容...</p>
      </section>
    </main>
    
    <footer>
      <nav aria-label="文章导航">
        <a href="#prev">上一篇</a>
        <a href="#next">下一篇</a>
      </nav>
    </footer>
  </article>
</template>

<!-- ❌ 错误：过度使用 div -->
<template>
  <div>
    <div class="header">
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      内容...
    </div>
  </div>
</template>
```

### 结构化数据规范

```typescript
// ✅ 正确：添加结构化数据
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        datePublished: post.date,
        author: {
          '@type': 'Person',
          name: '智言万象 Team'
        }
      })
    }
  ]
})
```

---

## ♿ 可访问性规范

### ARIA 标签规范

```vue
<!-- ✅ 正确：使用 ARIA 标签 -->
<nav aria-label="主导航">
  <ul>
    <li><a href="/">首页</a></li>
  </ul>
</nav>

<button
  aria-label="打开菜单"
  aria-expanded="false"
  aria-controls="mobile-menu"
>
  <MenuIcon />
</button>

<img
  src="/logo.svg"
  alt="智言万象 Logo"
  role="img"
/>

<!-- ❌ 错误：缺少可访问性标签 -->
<button @click="toggle">
  <MenuIcon />  <!-- 缺少 aria-label -->
</button>

<img src="/logo.svg" />  <!-- 缺少 alt -->
```

### 键盘导航规范

```yaml
交互元素:
  - 所有交互元素必须可通过 Tab 键访问
  - 焦点顺序必须符合逻辑
  - 必须有明显的焦点样式

快捷键:
  - Esc: 关闭模态框/菜单
  - Enter/Space: 激活按钮
  - Arrow Keys: 导航菜单项
```

### 对比度规范

```yaml
WCAG AA 标准:
  - 普通文本: 对比度 >= 4.5:1
  - 大号文本: 对比度 >= 3:1
  - UI 组件: 对比度 >= 3:1

检查工具:
  - 使用 Chrome DevTools 的对比度检查器
  - 使用 axe DevTools 插件
```

---

## 📝 Git 提交规范

### Commit Message 格式

```yaml
格式: <type>(<scope>): <subject>

type:
  - feat: 新功能
  - fix: 修复 bug
  - docs: 文档更新
  - style: 代码格式（不影响功能）
  - refactor: 重构
  - perf: 性能优化
  - test: 测试相关
  - chore: 构建/工具相关

scope:
  - components: 组件
  - pages: 页面
  - utils: 工具函数
  - styles: 样式
  - config: 配置

示例:
  ✅ feat(components): add HeroSection component
  ✅ fix(pages): resolve routing issue in blog detail page
  ✅ docs(readme): update installation guide
  ✅ style(components): format AppNavigation.vue
  ✅ refactor(utils): optimize getDocsRoutes function
  ❌ update files
  ❌ fix bug
  ❌ WIP
```

### 分支管理规范

```yaml
主分支:
  - main: 生产环境代码
  - develop: 开发环境代码

功能分支:
  格式: feature/功能名称
  示例: feature/hero-section
        feature/blog-system

修复分支:
  格式: fix/bug名称
  示例: fix/navigation-mobile
        fix/image-loading

发布分支:
  格式: release/版本号
  示例: release/v2.5.0

合并流程:
  1. feature/* → develop
  2. develop → main (通过 PR)
  3. fix/* → develop → main
```

---

## 🧪 测试规范

### 单元测试规范

```typescript
// ✅ 正确：测试文件命名
// components/AppNavigation.vue
// tests/components/AppNavigation.spec.ts

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppNavigation from '~/components/AppNavigation.vue'

describe('AppNavigation', () => {
  it('renders navigation items', () => {
    const wrapper = mount(AppNavigation)
    expect(wrapper.find('nav').exists()).toBe(true)
  })
  
  it('toggles mobile menu', async () => {
    const wrapper = mount(AppNavigation)
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.mobileMenuOpen).toBe(true)
  })
})
```

### 测试覆盖率要求

```yaml
最低要求:
  - 工具函数: 100%
  - 核心组件: >= 80%
  - 页面组件: >= 60%

必须测试:
  - 所有 utils/ 下的函数
  - 关键的交互组件
  - 数据处理逻辑
```

---

## 🚀 构建部署规范

### 构建前检查清单

```yaml
✅ 必须完成:
  - [ ] npm run typecheck 通过
  - [ ] 所有 ESLint 错误已修复
  - [ ] 测试用例全部通过
  - [ ] 生产环境变量已配置
  - [ ] 图片已优化压缩
  - [ ] 无 console.log 等调试代码
  - [ ] package.json 版本号已更新
```

### 环境变量规范

```yaml
命名规范:
  格式: NUXT_PUBLIC_变量名
  示例:
    ✅ NUXT_PUBLIC_API_BASE_URL
    ✅ NUXT_PUBLIC_SITE_URL
    ❌ API_URL  # 缺少前缀
    ❌ siteUrl  # 应该大写

使用方式:
  # .env
  NUXT_PUBLIC_API_BASE_URL=https://api.example.com
  
  # 代码中
  const apiUrl = useRuntimeConfig().public.apiBaseUrl
```

### 部署检查清单

```yaml
Vercel 部署:
  - [ ] 构建命令: npm run build
  - [ ] 输出目录: dist
  - [ ] Node 版本: 18.x
  - [ ] 环境变量已设置
  - [ ] 域名已配置

Cloudflare Pages:
  - [ ] 构建命令: npm run build
  - [ ] 输出目录: dist
  - [ ] 环境变量: NODE_VERSION=18
```

---

## 📚 文档规范

### 代码注释规范

```typescript
/**
 * ✅ 正确：函数注释
 * 
 * 获取指定用户的详细信息
 * 
 * @param userId - 用户 ID
 * @param options - 可选配置
 * @returns 用户对象，如果未找到返回 null
 * @throws {Error} 当用户 ID 无效时抛出错误
 * 
 * @example
 * ```typescript
 * const user = await getUserById(123)
 * if (user) {
 *   console.log(user.name)
 * }
 * ```
 */
async function getUserById(
  userId: number,
  options?: { includeMetadata?: boolean }
): Promise<User | null> {
  // 实现
}

// ✅ 正确：组件注释
/**
 * Hero Section Component
 * 
 * 首页 Hero 区域组件，包含打字机效果和垂直跑马灯
 * 
 * @component
 */

// ✅ 正确：复杂逻辑注释
// 清理 URL 路径：移除数字前缀和尾部斜杠
const cleanPath = path
  .split('/')
  .map(segment => segment.replace(/^\d+\./, ''))
  .join('/')
  .replace(/\/$/, '')

// ❌ 错误：无用注释
const count = 0  // 定义变量 count
count++  // count 加 1
```

---

## 🎯 最佳实践

### 性能最佳实践

1. **使用 SSG 预渲染**
2. **启用代码分割**
3. **图片懒加载**
4. **使用 requestAnimationFrame 优化动画**
5. **避免不必要的响应式数据**
6. **使用 v-once 和 v-memo 优化渲染**

### 安全最佳实践

1. **永远不提交敏感信息**
2. **使用环境变量存储配置**
3. **验证用户输入**
4. **使用 HTTPS**
5. **设置适当的 CSP 头**

### 可维护性最佳实践

1. **保持组件单一职责**
2. **编写清晰的注释**
3. **使用 TypeScript 类型检查**
4. **编写测试用例**
5. **定期重构代码**

---

## 🔧 开发工具配置

### VSCode 推荐设置

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### 推荐扩展

```yaml
必装:
  - Vue - Official (Vue.volar)
  - TypeScript Vue Plugin (Volar)
  - Tailwind CSS IntelliSense
  - ESLint

推荐:
  - Prettier
  - Auto Rename Tag
  - Path Intellisense
  - GitLens
```

---

## 📞 支持

遇到问题或有建议？

- 📖 查看 [完整文档](./智言万象.md)
- 🐛 [提交 Issue](https://github.com/智言万象/issues)
- 💬 [加入讨论](https://github.com/智言万象/discussions)

---

**最后更新**: 2025-12-26  
**版本**: 1.0.0  
**维护者**: 智言万象 Team
