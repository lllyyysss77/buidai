<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-8">

        <!-- 侧边栏导航 -->
        <aside class="w-full lg:w-64 flex-shrink-0 space-y-6">
          <!-- 搜索框 -->
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜索应用"
              class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
            >
            <SearchIcon class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <!-- 分类列表 -->
          <nav class="space-y-1">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="activeCategory = category.id"
              class="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-between group"
              :class="activeCategory === category.id
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'"
            >
              {{ category.name }}
            </button>
          </nav>
        </aside>

        <!-- 主要内容区域 -->
        <main class="flex-1 min-w-0">

          <!-- 促销横幅 -->
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 mb-10 shadow-lg group">
            <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div class="space-y-2">
                <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Building应用市场上线啦!</h2>
                <p class="text-blue-100 text-sm sm:text-base">联系客服领取五折优惠码，数量有限，先到先得</p>
              </div>
              <button class="px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap flex items-center gap-2">
                获取5折优惠码
                <ArrowRightIcon class="w-4 h-4" />
              </button>
            </div>

            <!-- 装饰元素 -->
            <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <!-- 3D 元素占位符（右侧） -->
            <div class="absolute right-4 bottom-4 lg:right-10 lg:bottom-1/2 lg:translate-y-1/2 opacity-20 lg:opacity-100 pointer-events-none">
              <div class="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 transform rotate-[-5deg]">
                 <div class="flex items-center gap-2">
                   <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400"></div>
                   <span class="font-bold italic">Building AI</span>
                 </div>
              </div>
            </div>
          </div>

          <!-- Section Title -->
          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white">全部应用</h2>
          </div>

          <!-- Apps Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="app in filteredApps"
              :key="app.id"
              class="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <!-- App Preview Image -->
              <div class="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                <!-- Placeholder Pattern -->
                <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"></div>
                 <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                    <img :src="app.image" :alt="app.name" class="w-full h-full object-contain" />
                 </div>
              </div>

              <!-- Content -->
              <div class="p-5 flex-1 flex flex-col">
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                       <component :is="app.icon" class="w-6 h-6" />
                    </div>
                    <h3 class="font-bold text-gray-900 dark:text-white line-clamp-1">{{ app.name }}</h3>
                  </div>
                </div>

                <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
                  {{ app.description }}
                </p>

                <!-- 价格和信息 -->
                <div class="space-y-4">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-lg font-bold text-gray-900 dark:text-white">¥{{ app.originalPrice.toFixed(2) }}</span>
                    <span class="px-2 py-0.5 bg-gray-900 dark:bg-gray-700 text-yellow-400 text-xs font-medium rounded">
                      折后 ¥{{ app.discountPrice.toFixed(2) }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div class="flex items-center gap-1">
                      <CheckBadgeIcon class="w-3.5 h-3.5" />
                      <span>官方认证</span>
                    </div>
                    <span>{{ app.date }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredApps.length === 0" class="text-center py-20">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <InboxIcon class="w-8 h-8 text-gray-400" />
            </div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">未找到相关应用</h3>
            <p class="text-gray-500 text-sm">换个搜索词试试看吧</p>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Search as SearchIcon,
  ArrowRight as ArrowRightIcon,
  Video as VideoIcon,
  Palette as PaletteIcon,
  FileText as FileTextIcon,
  GitBranch as GitBranchIcon,
  User as UserIcon,
  PenTool as PenToolIcon,
  CheckCircle as CheckBadgeIcon,
  Inbox as InboxIcon,
  MonitorPlay as PresentationIcon,
  FileSignature as FileSignatureIcon,
  ShoppingBag as ShoppingBagIcon,
  Tv as TvIcon,
  BookOpen as BookOpenIcon,
  MapPin as MapPinIcon,
  Image as ImageIcon,
  Film as FilmIcon,
  Trophy as TrophyIcon,
  Copy as CopyIcon,
  Shirt as ShirtIcon,
  Scissors as ScissorsIcon,
  ImagePlus as ImagePlusIcon
} from 'lucide-vue-next'

/**
 * 应用数据接口定义
 */
interface AppData {
  id: number
  name: string
  description: string
  icon: any
  image: string
  category: string
  originalPrice: number
  discountPrice: number
  date: string
}

/**
 * 分类数据接口定义
 */
interface Category {
  id: string
  name: string
}

definePageMeta({
  layout: 'default'
})

// --- 状态定义 ---

const searchQuery = ref('')
const activeCategory = ref('all')

const categories: Category[] = [
  { id: 'all', name: '全部应用' },
  { id: 'recommend', name: '官方推荐' },
  { id: 'independent', name: '独立应用' },
  { id: 'extension', name: '扩展应用' },
  { id: 'video', name: '图像视频' },
  { id: 'writing', name: '智能写作' },
  { id: 'enterprise', name: '企业工具' },
  { id: 'efficiency', name: '效率工具' }
]

const apps: AppData[] = [
  {
    id: 1,
    name: 'Sora2短剧视频创作',
    description: 'Sora2短剧视频创作是一款聚焦高效优质短剧创作的AI智能生成工具，它能深度理解用户输入的文字提示词，将创...',
    icon: VideoIcon,
    image: '/plugin/Sora2短剧视频创作.png',
    category: 'video',
    originalPrice: 1398.00,
    discountPrice: 699.00,
    date: '2025/11/14'
  },
  {
    id: 2,
    name: 'Nanobanana',
    description: '香蕉绘画预置多个模版，开箱即用。结合gemini-3-pro-image-preview的生图能力，能够有效保持角色一致性，...',
    icon: PaletteIcon,
    image: '/plugin/Nanobanana.png',
    category: 'video',
    originalPrice: 1398.00,
    discountPrice: 699.00,
    date: '2025/11/14'
  },
  {
    id: 3,
    name: 'AI简历',
    description: 'AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。是基于AI...',
    icon: FileTextIcon,
    image: '/plugin/AI简历.png',
    category: 'efficiency',
    originalPrice: 1598.00,
    discountPrice: 799.00,
    date: '2025/11/14'
  },
  {
    id: 4,
    name: '思维导图',
    description: '各种结构的思维导图，支持自由导图样式，修改前台显示名称',
    icon: GitBranchIcon,
    image: '/plugin/思维导图.png',
    category: 'efficiency',
    originalPrice: 899.00,
    discountPrice: 499.00,
    date: '2025/11/14'
  },
  {
    id: 5,
    name: 'AI 证件照',
    description: '各种证件照类型，尺寸自定义，生成图片导出',
    icon: UserIcon,
    image: '/plugin/AI 证件照.png',
    category: 'video',
    originalPrice: 599.00,
    discountPrice: 299.00,
    date: '2025/11/14'
  },
  {
    id: 6,
    name: '智能写作助手',
    description: '在线编辑，支持AI改写，自定义模板助手',
    icon: PenToolIcon,
    image: '/plugin/智能写作助手.png',
    category: 'writing',
    originalPrice: 999.00,
    discountPrice: 499.00,
    date: '2025/11/14'
  },
  {
    id: 7,
    name: 'AI PPT',
    description: '智能生成PPT，一键排版，海量模板，让演示更出彩。',
    icon: PresentationIcon,
    image: '/plugin/AI PPT.png',
    category: 'efficiency',
    originalPrice: 1299.00,
    discountPrice: 599.00,
    date: '2025/11/15'
  },
  {
    id: 8,
    name: 'AI合同',
    description: '智能合同审查与生成，降低法律风险，提高签约效率。',
    icon: FileSignatureIcon,
    image: '/plugin/AI合同.png',
    category: 'efficiency',
    originalPrice: 2999.00,
    discountPrice: 1499.00,
    date: '2025/11/15'
  },
  {
    id: 9,
    name: 'AI商图秀',
    description: '电商主图智能生成，模特替换，场景合成，提升点击率。',
    icon: ShoppingBagIcon,
    image: '/plugin/AI商图秀.png',
    category: 'video',
    originalPrice: 899.00,
    discountPrice: 399.00,
    date: '2025/11/15'
  },
  {
    id: 10,
    name: 'AI直播短视频数字人',
    description: '7x24小时无人直播，数字人带货，低成本高回报。',
    icon: TvIcon,
    image: '/plugin/AI直播短视频数字人.png',
    category: 'video',
    originalPrice: 3999.00,
    discountPrice: 1999.00,
    date: '2025/11/15'
  },
  {
    id: 11,
    name: 'AI短剧小说创作',
    description: '辅助短剧剧本创作，小说续写，激发创作灵感。',
    icon: BookOpenIcon,
    image: '/plugin/AI短剧小说创作.png',
    category: 'writing',
    originalPrice: 699.00,
    discountPrice: 349.00,
    date: '2025/11/15'
  },
  {
    id: 12,
    name: 'GEO优化排名工具',
    description: '基于地理位置的SEO优化工具，提升本地搜索排名。',
    icon: MapPinIcon,
    image: '/plugin/GEO优化排名工具.png',
    category: 'enterprise',
    originalPrice: 1599.00,
    discountPrice: 799.00,
    date: '2025/11/15'
  },
  {
    id: 13,
    name: '即梦AI绘画',
    description: '文本生成图片，艺术创作，风格迁移，释放你的想象力。',
    icon: ImageIcon,
    image: '/plugin/即梦AI绘画.png',
    category: 'video',
    originalPrice: 999.00,
    discountPrice: 499.00,
    date: '2025/11/15'
  },
  {
    id: 14,
    name: '即梦AI视频',
    description: '文本生成视频，静态图转视频，轻松制作创意短片。',
    icon: FilmIcon,
    image: '/plugin/即梦AI视频.png',
    category: 'video',
    originalPrice: 1499.00,
    discountPrice: 749.00,
    date: '2025/11/15'
  },
  {
    id: 15,
    name: '大模型擂台',
    description: '主流大模型能力评测与对比，助你选择最适合的模型。',
    icon: TrophyIcon,
    image: '/plugin/大模型擂台.png',
    category: 'enterprise',
    originalPrice: 0.00,
    discountPrice: 0.00,
    date: '2025/11/15'
  },
  {
    id: 16,
    name: '小红书内容复刻',
    description: '一键提取爆款笔记文案，智能仿写，快速产出高质量内容。',
    icon: CopyIcon,
    image: '/plugin/小红书内容复刻.png',
    category: 'writing',
    originalPrice: 599.00,
    discountPrice: 299.00,
    date: '2025/11/15'
  },
  {
    id: 17,
    name: '模绘衣境',
    description: 'AI服装设计与展示，虚拟试衣，缩短设计周期。',
    icon: ShirtIcon,
    image: '/plugin/模绘衣境.png',
    category: 'video',
    originalPrice: 1999.00,
    discountPrice: 999.00,
    date: '2025/11/15'
  },
  {
    id: 18,
    name: '热门视频混剪',
    description: '智能抓取热门素材，自动混剪，快速生成短视频。',
    icon: ScissorsIcon,
    image: '/plugin/热门视频混剪.png',
    category: 'video',
    originalPrice: 899.00,
    discountPrice: 449.00,
    date: '2025/11/15'
  },
  {
    id: 19,
    name: '爆款文章自动配图',
    description: '根据文章内容自动匹配高质量图片，提升阅读体验。',
    icon: ImagePlusIcon,
    image: '/plugin/爆款文章自动配图.png',
    category: 'writing',
    originalPrice: 499.00,
    discountPrice: 249.00,
    date: '2025/11/15'
  }
]

// --- 计算属性 ---

/**
 * 根据搜索关键词和当前分类过滤应用列表
 */
const filteredApps = computed(() => {
  return apps.filter(app => {
    // 1. 根据搜索关键词过滤
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    // 2. 根据分类过滤
    const matchesCategory = activeCategory.value === 'all' || app.category === activeCategory.value ||
                            // 模拟 "官方推荐" 分类显示部分项目
                            (activeCategory.value === 'recommend' && app.id <= 3) ||
                            // 模拟 "独立应用" 分类
                            (activeCategory.value === 'independent' && app.id > 3)

    return matchesSearch && matchesCategory
  })
})

</script>

<style scoped>
/* 侧边栏自定义滚动条 */
aside::-webkit-scrollbar {
  width: 4px;
}
aside::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.1);
  border-radius: 4px;
}
</style>
