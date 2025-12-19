# BuidAI 项目规则（Trae IDE）

本文件定义在本仓库的开发与协作规则，约束命令使用、代码风格、验证流程与安全规范。请所有参与者遵循以下约定。

## 基本信息

- 操作系统：Windows 11（PowerShell 环境）
- 语言约定：中文或英文均可，提交信息建议使用中文
- 框架栈：Nuxt 4、Vue 3、TypeScript、Tailwind CSS、Nuxt UI、Nuxt Content

## 命令与脚本

- 安装依赖：`npm install`
- 启动开发：`npm run dev`
- 构建生产：`npm run build`
- 预览生产：`npm run preview`
- 类型检查（必须执行）：`npm run typecheck`
- 说明：当前仓库未配置 Lint 脚本，暂不强制执行 ESLint/Prettier

## 提交与验证流程

<!-- - 每次代码改动后必须执行：`npm run typecheck` -->
- 涉及页面或路由改动时建议本地预览：`npm run preview`
- 需要启动开发服务器进行交互验证时：`npm run dev`
- 严禁将任何密钥、Token、私有配置提交到仓库（参考 `.gitignore`）

## 代码风格与结构

- 组件与页面使用 Vue 3 Composition API
- 样式以 Tailwind 原子类为主，复用 `assets/css/main.css` 中的组件类
- 主题与颜色统一在 `tailwind.config.js` 与 `app.config.ts` 内管理
- 主色来源统一为 Nuxt UI：以 `app.config.ts` 的 `ui.colors.primary` 与 CSS 变量 `--ui-primary` 为准；禁止以 Tailwind `primary-*` 作为品牌主色来源。文本、图标与边框的品牌色必须使用 `--ui-primary`（可通过在 `assets/css/main.css` 定义类封装后使用），背景与渐变可使用 Tailwind 调色板作为辅助但不得替代主色来源。
- 新增代码须添加函数级注释（函数功能、参数与返回值说明）
- 命名语义化、文件职责清晰；避免过度嵌套与超长组件

### 组件与命名约定

- 组件文件命名使用 `PascalCase`（如 `AppNavigation.vue`、`DocsSidebar.vue`）。
- 路由页面与目录命名使用 `kebab-case`（如 `solutions.vue`、`blog/index.vue`）。
- 组件位置：通用组件放置于 `components/`，落地页组件放置于 `components/landing/`，页面内大段重复结构必须抽象为组件。
- 自动导入：优先使用 Nuxt 组件自动导入；需要显式导入的库组件统一放置于文件顶部。

### 图标（Icons）

- 标准：首选使用 `@heroicons/vue/24/outline` 组件。
- 用法：必须将图标作为组件导入（例如 `import { RocketLaunchIcon } from '@heroicons/vue/24/outline'`），尽量避免使用原始 SVG 字符串，除非是自定义图标。
- 说明：Nuxt UI 内置的图标别名（如 `i-ph-*`）用于其组件内部场景；业务页面与通用展示优先使用 Heroicons 保持一致性。

### 4.5. 注释与文档

- 语言：所有注释（包括代码注释和 HTML 注释）必须使用中文。
- 函数级注释：每个函数必须包含注释块，说明：
  - 功能描述。
  - 参数（名称、类型、描述）。
  - 返回值（类型、描述）。

## 内容与路由

- 文档与博客位于 `content/`；文档目录使用 `.navigation.yml` 维护分组
- 必要的 Frontmatter 字段：`title`, `description`，博客需包含 `date`, `category`, `tags`
- 文档预渲染：`nuxt.config.ts` 中 `getDocsRoutes()` 会自动遍历 `content/docs` 生成静态路由
- 文档目录约定：每级目录必须包含 `index.md` 作为入口；允许使用数字前缀进行排序（如 `1.introduce/1.index.md`），文件名与路由名按 `getDocsRoutes()` 的清洗规则生成。
- `.navigation.yml` 约定：顶层声明 `title` 与可选 `navigation.icon` 字段，用于侧边栏分组与图标展示。

## SEO 与可访问性

- 标准：页面级 SEO 使用 `useSeoMeta` 设置元标签（`title`、`description`、`og:*` 等）。
- 原因：`useSeoMeta` 提供更好的类型安全与更扁平的结构。
- 全局配置：全局默认 SEO 在 `nuxt.config.ts` 的 `app.head` 中配置。
- 行为：关键页面必须补充 `title` 与 `description`；按需添加 OG 标签与社交分享信息。
- 交互元素需有可见的焦点样式与足够的颜色对比度
- 图片与图标按需懒加载，避免无意义动画影响性能
- 可访问性：交互元素需具备可聚焦与键盘可达性；所有图片必须包含有效 `alt` 文本。

## 样式与布局

- Tailwind 用法：禁止内联 `style`，统一使用 Tailwind 原子类；对复杂样式在 `@layer components` 中抽象复用。
- 布局容器：页面容器统一使用 `container mx-auto px-4` 或项目内约定的容器类，移动优先并按需使用响应式断点（`sm:`、`md:`、`lg:`）。
- 动画：仅使用 `tailwind.config.js` 中已定义的动画与 `keyframes`，禁止在组件内新增散乱的自定义动画。
- UI 主色桥接：建议在 `assets/css/main.css` 定义 `.text-ui-primary`、`.border-ui-primary` 等类用于桥接 `--ui-primary`，页面中统一使用这些类表示品牌色。

## 导入与路径

- 路径别名：统一使用 `~`/`~/` 别名进行本地导入（如 `import x from '~/utils/x'`），禁止使用复杂的相对路径（`../../..`）。
- 资源管理：静态资源放置于 `public/`，通过绝对路径引用（如 `/images/xxx.png`）；避免将大型 SVG/图片内联进模板。

## 数据与状态

- 数据获取：页面级数据统一使用 `useAsyncData`；内容数据优先使用 `@nuxt/content` 的 `queryCollection` 等查询方法。
- 状态管理：跨组件共享的轻量状态使用 `useState`，命名以模块语义为前缀（如 `useState('pricing-selectedPlan')`）；避免未命名或通用键导致冲突。
- 计算派生：统一使用 `computed` 进行派生状态，避免在模板内进行复杂计算。

## 组件复用与去冗余

- 页面内出现两次以上的结构或逻辑必须抽象为组件并放入 `components/` 或相应子目录。
- 公共样式统一抽象至 `assets/css/main.css` 的 `@layer components`，禁止在多个组件中重复书写相同样式。
- 导航项与侧边栏：导航添加与修改统一在 `components/AppNavigation.vue` 的配置中进行；文档侧边栏结构统一由 `.navigation.yml` 提供，禁止在多个页面内手写目录。

## 部署与环境

- 默认 SSG 目标：Nitro `vercel-static`（Vercel 推荐）
- Cloudflare Pages 部署参考 `content/docs/6.deploy/4.cloudflare-pages.md`
- 本地预览与生产验证使用 `npm run preview`

## 安全与合规

- 不得提交环境变量文件与敏感信息
- 依赖版本升级需评估影响并执行类型检查与预览验证

## 变更管理

- 在进行大规模重构或新增模块前，先更新 README 并在 PR 中说明设计思路、技术考量与影响范围
- 约定式提交信息（建议）：`feat: ...` / `fix: ...` / `docs: ...` / `refactor: ...` / `chore: ...`
