# BuidAI 项目开发规范

> 智言AI (BuidAI) 官方网站项目 - 企业级 AI 应用构建平台

## 1. 项目概述

### 1.1 项目信息

- **项目名称**: BuidAI (智言AI)
- **项目类型**: Nuxt.js 4 全栈应用
- **主要功能**: 企业级 AI 应用构建平台官方网站
- **目标用户**: AI 开发者、AI 创业者、企业组织

### 1.2 技术栈

| 类别 | 技术 |
|------|------|
| 前端框架 | Vue 3 + Nuxt 4 |
| 编程语言 | TypeScript |
| UI 组件库 | @nuxt/ui (基于 Tailwind CSS) |
| 样式方案 | Tailwind CSS 4 |
| 内容管理 | @nuxt/content v3 |
| 图标系统 | Phosphor Icons + Lucide Icons |
| 动画效果 | AOS (Animate On Scroll) |
| 3D 图形 | Three.js |
| 物理引擎 | Matter.js |
| 构建工具 | Vite |
| 代码规范 | ESLint + Prettier |

## 2. 目录结构规范

### 2.1 标准目录组织

```
buidai/
├── .trae/rules/           # Trae IDE 规则配置
├── .vscode/               # VS Code 工作区配置
├── assets/                # 静态资源（CSS、字体、图片）
│   └── css/
│       └── main.css       # 全局样式入口
├── components/            # Vue 组件
│   ├── docs/              # 文档相关组件
│   ├── landing/           # 落地页组件
│   └── [Component].vue    # 全局共享组件
├── composables/           # 组合式函数（自动导入）
├── content/               # Markdown 内容文件
│   ├── blog/              # 博客文章
│   ├── docs/              # 文档内容
│   └── update/            # 更新日志
├── layouts/               # 页面布局
│   └── default.vue        # 默认布局
├── middleware/            # 路由中间件
├── pages/                 # 页面路由
│   ├── blog/              # 博客页面
│   ├── docs/              # 文档页面
│   ├── product/           # 产品页面
│   └── [page].vue         # 顶级页面
├── plugins/               # Nuxt 插件
├── public/                # 静态公共资源
├── server/                # 服务端代码
├── types/                 # TypeScript 类型声明
│   └── nuxt-global.d.ts   # Nuxt 全局类型
├── utils/                 # 工具函数（自动导入）
│   ├── aos.ts             # AOS 初始化
│   ├── getDocsRoutes.ts   # 文档路由生成
│   ├── getSitemapRoutes.ts # 站点地图路由
│   └── pluginData.ts      # 插件数据
├── app.config.ts          # Nuxt UI 配置
├── app.vue                # 应用根组件
├── content.config.ts      # Content 模块配置
├── error.vue              # 错误页面
├── eslint.config.js       # ESLint 配置
├── nuxt.config.ts         # Nuxt 主配置
├── tailwind.config.js     # Tailwind 配置
└── package.json           # 项目依赖
```

### 2.2 目录命名规范

- **小写命名**: 所有目录名使用小写字母
- **连字符分隔**: 多词目录使用连字符（如 `docs-intro`）
- **语义化命名**: 目录名应清晰表达其用途

### 2.3 特殊目录说明

| 目录 | 用途 | 注意事项 |
|------|------|----------|
| `components/landing/` | 落地页专用组件 | 仅首页使用的区块组件 |
| `components/docs/` | 文档页专用组件 | 文档布局相关组件 |
| `content/` | Markdown 内容 | 支持 YAML Frontmatter |
| `public/` | 静态资源 | 构建时直接复制到输出目录 |
| `utils/` | 工具函数 | 自动导入，无需显式引入 |

## 3. 文件命名规范

### 3.1 组件文件

```
# 单文件组件 - PascalCase
AppNavigation.vue
HeroSection.vue
Sidebar.vue

# 多词组件 - PascalCase
AIApplicationSystems.vue
CallToAction.vue

# 页面组件 - 小写或 kebab-case
index.vue
about.vue
[...slug].vue          # 动态路由
product-detail.vue     # 多词页面
```

### 3.2 脚本文件

```
# 工具函数 - camelCase
getDocsRoutes.ts
getSitemapRoutes.ts
aos.ts
ui.ts

# 配置文件 - camelCase 或 固定名称
nuxt.config.ts
app.config.ts
content.config.ts
tailwind.config.js
eslint.config.js
```

### 3.3 内容文件

```
# Markdown 文件 - 小写或数字前缀
1.md
2.md
prerequisites.md
define.md

# 图片资源 - 小写，描述性命名
logo.svg
banner.png
hero-section.webp
```

## 4. 代码风格标准

### 4.1 Vue 单文件组件 (SFC) 结构

```vue
<template>
  <!-- 模板内容 -->
  <div class="component-root">
    <!-- 组件内容 -->
  </div>
</template>

<script setup lang="ts">
/**
 * 组件文件头注释
 *
 * 功能描述：简要说明组件的主要功能
 * 使用场景：描述何时使用该组件
 * 注意事项：重要的实现细节或限制
 */

// 1. 类型导入
import type { SomeType } from '~/types'

// 2. 组合式函数导入
import { useSomeComposable } from '~/composables'

// 3. 工具函数导入
import { someUtil } from '~/utils'

// 4. 组件 Props 定义
interface Props {
  title: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: ''
})

// 5. 事件定义
const emit = defineEmits<{
  click: [id: string]
  update: [value: string]
}>()

// 6. 页面元数据（仅页面组件）
definePageMeta({
  layout: 'default'
})

// 7. SEO 配置（仅页面组件）
useSeoMeta({
  title: '页面标题',
  description: '页面描述'
})

// 8. 响应式数据
const count = ref(0)
const doubleCount = computed(() => count.value * 2)

// 9. 方法定义
const handleClick = () => {
  emit('click', 'some-id')
}

// 10. 生命周期钩子
onMounted(() => {
  // 初始化逻辑
})
</script>

<style scoped>
/* 组件样式（尽可能使用 Tailwind） */
</style>
```

### 4.2 TypeScript 规范

```typescript
// 1. 接口命名 - PascalCase
interface UserProfile {
  id: string
  name: string
  email: string
}

// 2. 类型别名 - PascalCase
type ButtonVariant = 'primary' | 'secondary' | 'ghost'

// 3. 函数参数类型标注
const formatDate = (date: Date, format: string): string => {
  // 实现
}

// 4. 返回值类型标注
const getUser = async (id: string): Promise<UserProfile> => {
  // 实现
}

// 5. 泛型使用
const useAsyncData = <T>(key: string, fetcher: () => Promise<T>) => {
  // 实现
}

// 6. 枚举定义
enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}
```

### 4.3 注释规范

```typescript
/**
 * 函数级注释 - JSDoc 格式
 *
 * @description 详细描述函数功能
 * @param {string} param1 - 参数说明
 * @param {number} param2 - 参数说明
 * @returns {boolean} 返回值说明
 * @example
 * const result = myFunction('test', 123)
 */
const myFunction = (param1: string, param2: number): boolean => {
  return true
}

// 行内注释 - 简要说明复杂逻辑
const result = complexCalculation() // 计算结果用于后续渲染

// 区块注释 - 分隔代码段落
// ============================================
// 状态管理
// ============================================
const state = reactive({ ... })
```

### 4.4 Prettier 配置

```json
{
  "semi": false,           // 不使用分号
  "singleQuote": true,     // 使用单引号
  "tabWidth": 2,           // 缩进 2 空格
  "printWidth": 100,       // 每行最大 100 字符
  "trailingComma": "none", // 不使用尾随逗号
  "arrowParens": "avoid",  // 箭头函数单参数省略括号
  "bracketSpacing": true,  // 对象括号间保留空格
  "endOfLine": "lf",       // 使用 LF 换行
  "htmlWhitespaceSensitivity": "ignore",
  "vueIndentScriptAndStyle": false
}
```

## 5. 模块划分原则

### 5.1 组件设计原则

1. **单一职责**: 每个组件只负责一个功能
2. **可复用性**: 通用组件应解耦业务逻辑
3. ** Props 向下传递**: 数据流单向流动
4. **事件向上抛出**: 使用 emit 通知父组件

### 5.2 组件分类

| 类型 | 位置 | 示例 | 特点 |
|------|------|------|------|
| 全局组件 | `components/` | AppNavigation.vue | 多页面共享 |
| 页面组件 | `components/landing/` | HeroSection.vue | 特定页面使用 |
| 文档组件 | `components/docs/` | Sidebar.vue | 文档系统专用 |
| 布局组件 | `layouts/` | default.vue | 页面布局框架 |

### 5.3 组合式函数 (Composables)

```typescript
// composables/useCounter.ts
export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  return {
    count: readonly(count),
    doubleCount,
    increment,
    decrement
  }
}
```

### 5.4 工具函数 (Utils)

```typescript
// utils/format.ts
/**
 * 格式化日期
 *
 * @param date - 日期对象或字符串
 * @param format - 格式化模板
 * @returns 格式化后的日期字符串
 */
export const formatDate = (date: Date | string, format = 'YYYY-MM-DD'): string => {
  // 实现
}
```

## 6. 依赖管理规则

### 6.1 依赖分类

```json
{
  "dependencies": {
    // 运行时依赖 - 生产环境必需
    "@nuxt/content": "^3.0.0",
    "@nuxt/ui": "^4.3.0",
    "vue": "^3.4.31"
  },
  "devDependencies": {
    // 开发依赖 - 仅开发环境使用
    "eslint": "^10.1.0",
    "prettier": "^3.8.1",
    "typescript": "^5.5.4"
  }
}
```

### 6.2 版本管理

- **固定主版本**: 使用 `^` 允许小版本和补丁更新
- **锁定关键依赖**: 核心依赖指定精确版本
- **定期更新**: 每月检查并更新依赖

### 6.3 添加新依赖流程

1. 评估必要性：确认是否必须使用
2. 检查大小：避免引入过大的包
3. 检查维护状态：选择活跃维护的包
4. 更新文档：在 README 中记录

```bash
# 安装生产依赖
npm install <package-name>

# 安装开发依赖
npm install -D <package-name>

# 安装指定版本
npm install <package-name>@<version>
```

## 7. 版本控制规范

### 7.1 Git 分支策略

```
main                # 生产分支，永远可部署
├── develop         # 开发分支，功能集成
├── feature/*       # 功能分支
├── bugfix/*        # 修复分支
└── hotfix/*        # 紧急修复分支
```

### 7.2 提交信息规范

```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型 (Type)**:

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `docs` | 文档更新 |
| `style` | 代码格式调整 |
| `refactor` | 重构代码 |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/工具相关 |

**示例**:

```bash
feat(landing): 添加 Hero 区块动画效果

- 集成 AOS 实现滚动动画
- 添加渐变背景过渡效果
- 优化移动端显示

Closes #123
```

### 7.3 .gitignore 配置

```gitignore
# Nuxt dev/build outputs
.output
.vercel/output
.data
.nuxt
.nitro
.cache
dist

# Node dependencies
node_modules

# Logs
logs
*.log
npm-debug.log*

# Misc
.DS_Store
.fleet
.idea

# Local env files
.env
.env.*

# 备份和参考
.备份目录
.参考设计/
```

## 8. 文档撰写要求

### 8.1 Markdown 内容规范

```markdown
---
# YAML Frontmatter
title: '文章标题'
description: '文章描述'
date: 2024-12-17
category: '产品动态'
tags: ['标签1', '标签2']
image: '/blog/image.webp'
---

# 一级标题

## 二级标题

### 三级标题

**粗体文本** 和 *斜体文本*

- 列表项 1
- 列表项 2
  - 嵌套项

1. 有序列表 1
2. 有序列表 2

[链接文本](https://example.com)

![图片说明](/path/to/image.webp)

> 引用文本

`行内代码`

```typescript
// 代码块
const example = 'code'
```
```

### 8.2 组件文档

每个组件应包含:

1. **文件头注释**: 功能描述、使用场景
2. **Props 文档**: 类型、默认值、必填项
3. **Events 文档**: 事件名、参数
4. **使用示例**: 代码示例

### 8.3 API 文档

```typescript
/**
 * 获取站点地图路由列表
 *
 * @description
 * 汇总所有需要生成 sitemap 的路由路径
 *
 * @returns {string[]} 返回包含所有路由路径的字符串数组
 *
 * @example
 * const routes = getSitemapRoutes()
 * console.log(routes) // ['/', '/about', '/docs/intro']
 */
export const getSitemapRoutes = (): string[] => {
  // 实现
}
```

## 9. 性能优化规范

### 9.1 图片优化

- 使用 WebP 格式
- 提供响应式图片
- 使用懒加载
- 指定 width/height 避免布局偏移

```vue
<img
  src="/image.webp"
  alt="描述文本"
  width="800"
  height="600"
  loading="lazy"
/>
```

### 9.2 代码分割

- 动态导入大型组件
- 路由级别代码分割
- 按需加载第三方库

```typescript
// 动态导入
const HeavyComponent = defineAsyncComponent(() =>
  import('~/components/HeavyComponent.vue')
)
```

### 9.3 渲染优化

- 使用 `v-once` 静态内容
- 使用 `v-memo` 缓存列表项
- 避免不必要的响应式数据
- 合理使用 `computed` 缓存计算结果

## 10. 安全规范

### 10.1 输入验证

- 所有用户输入必须验证
- 使用 Zod 进行运行时类型检查
- 防止 XSS 攻击

### 10.2 敏感信息

- 不在代码中硬编码密钥
- 使用环境变量存储敏感配置
- `.env` 文件不提交到版本控制

```bash
# .env.example
API_KEY=your_api_key_here
DATABASE_URL=your_database_url
```

### 10.3 依赖安全

- 定期运行 `npm audit`
- 及时更新有漏洞的依赖
- 使用 `npm audit fix` 自动修复

## 11. 测试规范

### 11.1 测试文件位置

```
components/
├── Button.vue
└── Button.spec.ts    # 测试文件

utils/
├── format.ts
└── format.spec.ts    # 测试文件
```

### 11.2 测试命名

```typescript
// 描述性测试名称
describe('Button', () => {
  it('renders correctly with default props', () => {
    // 测试代码
  })

  it('emits click event when clicked', () => {
    // 测试代码
  })
})
```

## 12. 部署规范

### 12.1 构建命令

```bash
# 开发环境
npm run dev

# 生产构建
npm run build

# 静态生成
npm run generate

# 类型检查
npm run typecheck

# 代码检查
npm run lint

# 代码格式化
npm run format
```

### 12.2 环境配置

| 环境 | 分支 | 域名 |
|------|------|------|
| 开发 | develop | dev.buidai.com |
| 预览 | preview | preview.buidai.com |
| 生产 | main | www.buidai.com |

## 13. 开发工作流

### 13.1 新功能开发流程

1. 从 `develop` 创建功能分支：`git checkout -b feature/new-feature`
2. 开发并提交代码
3. 运行代码检查：`npm run lint && npm run typecheck`
4. 提交 Pull Request 到 `develop`
5. 代码审查通过后合并
6. 测试环境验证
7. 合并到 `main` 部署生产

### 13.2 Bug 修复流程

1. 从 `main` 创建修复分支：`git checkout -b bugfix/issue-description`
2. 修复并提交代码
3. 提交 Pull Request 到 `main` 和 `develop`
4. 代码审查后合并
5. 部署验证

## 14. 附录

### 14.1 常用命令速查

```bash
# 项目初始化
npm install

# 开发服务器
npm run dev

# 代码检查
npm run lint
npm run lint:fix

# 代码格式化
npm run format
npm run format:check

# 类型检查
npm run typecheck

# 构建
npm run build
npm run generate

# 预览生产构建
npm run preview
```

### 14.2 推荐 VS Code 扩展

- Vue - Official
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Iconify IntelliSense

### 14.3 参考资源

- [Nuxt 文档](https://nuxt.com/docs)
- [Vue 文档](https://vuejs.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [Nuxt UI 文档](https://ui.nuxt.com/)
