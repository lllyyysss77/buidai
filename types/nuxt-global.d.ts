// Nuxt 全局类型声明 — ESLint 识别 Nuxt 4 自动导入函数

// ---------- 复用类型（避免 Record<string, unknown>） ----------

/** 页面元数据 — definePageMeta 参数 */
interface PageMeta {
  layout?: string
  middleware?: string | string[]
  name?: string
  path?: string
  alias?: string | string[]
  [key: string]: unknown // 保留扩展性，但不作为主要类型
}

/** SEO 元数据 — useSeoMeta 参数 */
interface SeoMetaInput {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  ogUrl?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  robots?: string
  [key: string]: unknown
}

/** Head 配置 — useHead 参数 */
interface HeadInput {
  title?: string
  meta?: Array<Record<string, string>>
  link?: Array<Record<string, string>>
  script?: Array<Record<string, string>>
  htmlAttrs?: Record<string, string>
  bodyAttrs?: Record<string, string>
  [key: string]: unknown
}

/** navigateTo 选项 */
interface NavigateToOptions {
  external?: boolean
  open?: { target: string }
  replace?: boolean
  redirectCode?: number
  [key: string]: unknown
}

/** useFetch / useAsyncData 通用选项 */
interface AsyncDataOptions {
  server?: boolean
  lazy?: boolean
  immediate?: boolean
  default?: () => unknown
  transform?: (data: unknown) => unknown
  watch?: unknown[]
  [key: string]: unknown
}

/** queryCollection 链式查询构建器 */
interface CollectionQueryBuilder<T = unknown> {
  select: (...fields: string[]) => CollectionQueryBuilder<T>
  where: (field: string, operator: string, value: unknown) => CollectionQueryBuilder<T>
  order: (field: string, direction: 'ASC' | 'DESC') => CollectionQueryBuilder<T>
  limit: (n: number) => CollectionQueryBuilder<T>
  skip: (n: number) => CollectionQueryBuilder<T>
  first: () => Promise<T | null>
  all: () => Promise<T[]>
}

declare global {
  // ---------- 页面元数据 ----------
  const definePageMeta: (meta: PageMeta) => void

  // ---------- SEO / Head ----------
  const useSeoMeta: (meta: SeoMetaInput) => void
  const useHead: (head: HeadInput) => void

  // ---------- 路由 ----------
  const useRouter: typeof import('vue-router').useRouter
  const useRoute: typeof import('vue-router').useRoute
  const navigateTo: (path: string, options?: NavigateToOptions) => void

  // ---------- 状态管理 ----------
  const useState: <T>(key: string, init?: () => T | T) => Ref<T>
  const useFetch: <T>(url: string, options?: AsyncDataOptions) => Promise<{ data: Ref<T | null>; pending: Ref<boolean>; error: Ref<unknown>; refresh: () => Promise<void> }>
  const useAsyncData: <T>(key: string, fn: () => Promise<T>, options?: AsyncDataOptions) => Promise<{ data: Ref<T | null>; pending: Ref<boolean>; error: Ref<unknown>; refresh: () => Promise<void> }>

  // ---------- Vue 组合式 API ----------
  const ref: typeof import('vue').ref
  const computed: typeof import('vue').computed
  const watch: typeof import('vue').watch
  const onMounted: typeof import('vue').onMounted
  const onUnmounted: typeof import('vue').onUnmounted
  const reactive: typeof import('vue').reactive
  const nextTick: typeof import('vue').nextTick

  // ---------- Nuxt 错误处理 ----------
  const clearError: (options?: { redirect?: string }) => void
  const setResponseStatus: (code: number, message?: string) => void
  const createError: (options: { statusCode: number; statusMessage: string; fatal?: boolean }) => Error

  // ---------- Nuxt Content v3 ----------
  const queryCollection: (collection: string) => CollectionQueryBuilder
  const queryCollectionNavigation: (collection: string) => Promise<unknown[]>
  const queryCollectionItemSurroundings: (collection: string, path: string, options?: { fields?: string[] }) => Promise<unknown[]>
}

export {}
