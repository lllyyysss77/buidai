<script setup lang="ts">
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  ChartBarIcon,
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

interface DemoPlatform {
  title: string
  icon: any
  url: string
  account: string
  password: string
}

interface ProductDemo {
  id: string
  title: string
  description: string
  icon: any
  status: 'online' | 'beta'
  platforms: DemoPlatform[]
}

const products: ProductDemo[] = [
  {
    id: 'chat-bot',
    title: '必定AI',
    description: '基于大语言模型的智能客服与对话系统，支持多轮对话、上下文理解与意图识别。',
    icon: ChatBubbleLeftRightIcon,
    status: 'online',
    platforms: [
      { title: 'PC演示前台', icon: ComputerDesktopIcon, url: 'https://chat.example.com', account: '自行注册', password: '自行注册' },
      { title: '站点管理端', icon: Cog6ToothIcon, url: 'https://admin.example.com', account: 'demo', password: 'demo123' },
      { title: 'SaaS平台端', icon: Cog6ToothIcon, url: 'https://saas.example.com', account: '联系客服', password: '联系客服' },
      { title: 'WAP演示', icon: DevicePhoneMobileIcon, url: 'https://chat.example.com/mobile', account: '自行注册', password: '自行注册' }
    ]
  },
  {
    id: 'knowledge-base',
    title: '企业知识库',
    description: '能够自动解析文档、构建向量索引的智能知识库，为企业提供精准的问答服务。',
    icon: BookOpenIcon,
    status: 'online',
    platforms: [
      { title: '演示前台', icon: ComputerDesktopIcon, url: 'https://kb.example.com', account: '自行注册', password: '自行注册' },
      { title: '体验后台', icon: Cog6ToothIcon, url: 'https://kb-admin.example.com', account: 'admin', password: '123456' },
      { title: 'API文档', icon: DocumentTextIcon, url: 'https://doc.example.com', account: '联系客服', password: '联系客服' },
      { title: '移动端', icon: DevicePhoneMobileIcon, url: 'https://kb.example.com/mobile', account: '联系客服', password: '联系客服' }
    ]
  },
  {
    id: 'ai-art',
    title: '聊天绘画',
    description: '集文生图、图生图于一体的创意绘画平台，释放无限创意可能。',
    icon: PhotoIcon,
    status: 'beta',
    platforms: [
      { title: 'H5演示', icon: DevicePhoneMobileIcon, url: 'https://art.example.com/mobile', account: '自行注册', password: '自行注册' },
      { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://art.example.com', account: '自行注册', password: '自行注册' },
      { title: '管理后台', icon: Cog6ToothIcon, url: 'https://art-admin.example.com', account: 'admin', password: '123456' },
      { title: 'API文档', icon: DocumentTextIcon, url: 'https://doc.example.com/art', account: '联系客服', password: '联系客服' }
    ]
  },
    {
    id: 'ai-hunma',
    title: 'AI数字人',
    description: '集文生图、图生图于一体的创意绘画平台，释放无限创意可能。',
    icon: PhotoIcon,
    status: 'beta',
    platforms: [
      { title: 'H5演示', icon: DevicePhoneMobileIcon, url: 'https://art.example.com/mobile', account: '自行注册', password: '自行注册' },
      { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://art.example.com', account: '自行注册', password: '自行注册' },
      { title: '管理后台', icon: Cog6ToothIcon, url: 'https://art-admin.example.com', account: 'admin', password: '123456' },
      { title: 'API文档', icon: DocumentTextIcon, url: 'https://doc.example.com/art', account: '联系客服', password: '联系客服' }
    ]
  },
  {
    id: 'data-insight',
    title: '论文创作',
    description: '自动化数据分析平台，自然语言生成报表，发现数据背后的价值。',
    icon: ChartBarIcon,
    status: 'online',
    platforms: [
      { title: '演示前台', icon: ComputerDesktopIcon, url: 'https://data.example.com', account: '联系客服', password: '联系客服' },
      { title: '体验后台', icon: Cog6ToothIcon, url: 'https://data-admin.example.com', account: 'admin', password: '123456' },
      { title: '数据API', icon: DocumentTextIcon, url: 'https://doc.example.com/data', account: '联系客服', password: '联系客服' },
      { title: '移动端', icon: DevicePhoneMobileIcon, url: 'https://data.example.com/mobile', account: '联系客服', password: '联系客服' }
    ]
  }
]

/**
 * 手风琴展开状态管理
 * 
 * 功能说明：
 * - 使用 ref 跟踪每个产品的展开/收缩状态
 * - 默认所有产品为收缩状态（false）
 * - 使用产品ID作为状态键，确保状态唯一性
 */
const expandedProducts = ref<Record<string, boolean>>({})

/**
 * 切换产品展开/收缩状态
 * 
 * 功能说明：
 * - 根据产品ID切换展开状态
 * - 点击已展开的产品会将其收缩
 * - 点击收缩的产品会将其展开
 * 
 * 参数说明：
 * - productId: string - 要切换状态的产品ID
 */
function toggleProduct(productId: string): void {
  expandedProducts.value[productId] = !expandedProducts.value[productId]
}

/**
 * SEO 配置常量
 * 用于设置页面的搜索引擎优化元数据
 */
const siteName = 'BuidAI'
const baseUrl = 'https://buidai.com'
const pageTitle = '产品演示中心 - BuidAI | 在线体验AI产品'
const pageDescription = 'BuidAI产品演示中心，在线体验必定AI智能客服、企业知识库、聊天绘画、AI数字人等AI产品。支持PC端、移动端、后台管理等多平台演示。'
const canonicalUrl = `${baseUrl}/demo`
const ogImage = `${baseUrl}/images/og-demo.png`

/**
 * SEO 元数据配置
 * 
 * 功能说明：
 * - 设置页面标题、描述、关键词等基础元数据
 * - 配置 Open Graph 协议标签（用于社交平台分享预览）
 * - 配置 Twitter Cards 标签（用于 Twitter 分享预览）
 * - 设置 robots 规则（控制搜索引擎爬取行为）
 * 
 * 参数说明：
 * - title: 页面标题，显示在浏览器标签页和搜索结果中
 * - description: 页面描述，显示在搜索结果摘要中
 * - og: Open Graph 协议标签，Facebook、LinkedIn 等平台分享时显示预览信息
 * - twitter: Twitter Cards 标签，Twitter 分享时显示预览信息
 * - robots: 搜索引擎爬虫规则，index=允许索引，follow=允许追踪链接
 */
useHead({
  title: pageTitle,
  meta: [
    // 页面描述：显示在搜索引擎结果摘要中
    { name: 'description', content: pageDescription },
    
    // Open Graph 协议标签：用于社交平台分享预览（Facebook、LinkedIn 等）
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: ogImage },
    { property: 'og:site_name', content: siteName },
    
    // Twitter Cards 标签：用于 Twitter 分享预览
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: ogImage },
    
    // 搜索引擎爬虫规则：允许索引和追踪链接
    { name: 'robots', content: 'index, follow' }
  ],
  
  // Canonical 标签：指定页面的规范 URL，避免重复内容问题
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  
  /**
   * JSON-LD 结构化数据
   * 
   * 功能说明：
   * - 为搜索引擎提供结构化的页面信息
   * - 帮助搜索引擎更好地理解页面内容和结构
   * - 可能获得丰富的搜索结果展示（富媒体摘要）
   * 
   * Schema.org 类型说明：
   * - WebPage: 表示这是一个网页
   * - ItemList: 表示这是一个项目列表（产品列表）
   * - Organization: 表示组织信息
   */
  script: [
    // 网页结构化数据：包含面包屑导航
    { type: 'application/ld+json', innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '产品演示中心',
      description: pageDescription,
      url: canonicalUrl,
      // 面包屑导航结构化数据
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: '产品演示', item: canonicalUrl }
        ]
      }
    })},
    
    // 产品列表结构化数据：包含所有产品的详细信息
    { type: 'application/ld+json', innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      // 将产品数组转换为 Schema.org 列表项格式
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,  // 产品在列表中的位置（从 1 开始）
        item: {
          '@type': 'Product',
          name: product.title,
          description: product.description,
          url: `${canonicalUrl}#${product.id}`,
          image: `${baseUrl}/images/products/${product.id}.png`,
          // 产品供应信息
          offers: {
            '@type': 'Offer',
            // 可用性：根据产品状态映射到 Schema.org 状态
            availability: product.status === 'online' 
              ? 'https://schema.org/InStock' 
              : 'https://schema.org/PreOrder',
            priceCurrency: 'CNY',
            price: '0'
          }
        }
      }))
    })},
    
    // 组织结构化数据：包含公司基本信息
    { type: 'application/ld+json', innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'BuidAI',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      // 社交媒体链接
      sameAs: ['https://github.com/buidai', 'https://twitter.com/buidai']
    })}
  ]
})
</script>

<template>
  <div class="min-h-screen bg-neutral-50 font-sans">
    <!-- 背景装饰 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-[#6E58FF]/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 left-1/3 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative">
      <!-- Hero 区域 -->
      <section class="pt-20 pb-12">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            产品演示中心
          </h1>
          <p class="text-lg text-neutral-500 max-w-2xl mx-auto">
            选择产品类型体验我们的产品功能
          </p>
        </div>
      </section>

      <!-- 产品演示列表 -->
      <section class="pb-24">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(product, index) in products"
              :key="product.id"
              class="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <!-- 顶部图片区域 -->
              <div class="relative aspect-video bg-neutral-100 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="w-16 h-16 rounded-2xl flex items-center justify-center"
                    :class="product.status === 'beta' ? 'bg-orange-100' : 'bg-green-100'"
                  >
                    <component
                      :is="product.icon"
                      class="w-8 h-8"
                      :class="product.status === 'beta' ? 'text-orange-600' : 'text-green-600'"
                    />
                  </div>
                </div>
                <!-- 状态标签 -->
                <div class="absolute top-3 right-3">
                  <span
                    class="px-2.5 py-1 rounded-full text-xs font-medium"
                    :class="product.status === 'online' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'"
                  >
                    {{ product.status === 'online' ? '已上线' : 'Beta' }}
                  </span>
                </div>
              </div>

              <!-- 产品信息 -->
              <div class="p-5">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-semibold text-neutral-900">
                    {{ product.title }}
                  </h3>
                  <!-- 手风琴展开/收缩按钮 -->
                  <button
                    @click="toggleProduct(product.id)"
                    class="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors duration-200"
                    :aria-label="expandedProducts[product.id] ? '收缩产品详情' : '展开产品详情'"
                  >
                    <ChevronDownIcon
                      class="w-4 h-4 text-neutral-600 transition-transform duration-300"
                      :class="{ 'rotate-180': expandedProducts[product.id] }"
                    />
                  </button>
                </div>
                <p class="text-sm text-neutral-500 mb-4 line-clamp-2">
                  {{ product.description }}
                </p>

                <!-- 手风琴内容区域 -->
                <Transition
                  name="accordion"
                  mode="out-in"
                >
                  <ul v-if="expandedProducts[product.id]" class="space-y-2">
                    <li v-for="platform in product.platforms" :key="platform.title">
                      <a
                        :href="platform.url"
                        target="_blank"
                        class="block p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-100 transition-all duration-200"
                      >
                        <div class="flex items-center justify-between mb-2">
                          <div class="flex items-center gap-2">
                            <component :is="platform.icon" class="w-4 h-4 text-neutral-500" />
                            <span class="text-sm font-medium text-neutral-800">{{ platform.title }}</span>
                          </div>
                          <ArrowTopRightOnSquareIcon class="w-3.5 h-3.5 text-neutral-400" />
                        </div>
                        <div class="text-xs text-neutral-400 mb-2 truncate">{{ platform.url }}</div>
                        <div class="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-200">
                          <div>
                            <span class="text-xs text-neutral-400">账号</span>
                            <div class="text-xs font-medium text-neutral-600 truncate">{{ platform.account }}</div>
                          </div>
                          <div>
                            <span class="text-xs text-neutral-400">密码</span>
                            <div class="text-xs font-medium text-neutral-600 truncate">{{ platform.password }}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <!-- 收缩状态显示提示 -->
                  <button
                    v-else
                    @click="toggleProduct(product.id)"
                    class="w-full py-3 px-3 bg-neutral-50 rounded-xl border border-dashed border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100 transition-all duration-200 text-center cursor-pointer"
                  >
                    <span class="text-xs text-neutral-400">点击展开查看演示平台</span>
                  </button>
                </Transition>
              </div>
            </div>
          </div>

          <!-- 底部 CTA -->
          <div class="mt-16 text-center">
            <p class="text-neutral-500 mb-4">需要定制化解决方案？</p>
            <a href="/contact" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6E58FF] text-white font-medium text-sm hover:bg-[#5A43FF] transition-colors">
              联系我们
              <ArrowTopRightOnSquareIcon class="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

div[style*="animation-delay"] {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/**
 * 手风琴过渡动画
 * 
 * 功能说明：
 * - accordion-enter-active: 进入动画（展开时）
 * - accordion-leave-active: 离开动画（收缩时）
 * - accordion-enter-from: 动画起始状态
 * - accordion-leave-to: 动画结束状态
 */

/* 进入动画：从透明和收缩状态到可见和展开状态 */
.accordion-enter-active {
  animation: accordion-expand 0.3s ease-out;
}

/* 离开动画：从展开状态到收缩状态 */
.accordion-leave-active {
  animation: accordion-collapse 0.3s ease-out;
}

/* 展开动画关键帧 */
@keyframes accordion-expand {
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
}

/* 收缩动画关键帧 */
@keyframes accordion-collapse {
  from {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
}
</style>
