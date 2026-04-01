<template>
  <section class="overflow-hidden bg-white">
    <div class="grid-border-container">
      <!-- 标题区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div class="mb-6 sm:mb-8">
            <div class="flex items-center gap-2 mb-2">
              <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
              <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                功能特性
              </span>
            </div>
            <h2 class="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              智言AI 智言万象
              <span class="text-indigo-600">你的私有AI应用系统</span>
            </h2>
            <p class="mt-3 text-sm text-neutral-500 max-w-2xl">
              致力于在AI时代打造备受青睐的、可快速搭建AI应用解决方案
            </p>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 功能卡片网格区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <!-- 4列网格布局 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div
              v-for="(item, index) in displayedItems"
              :key="index"
              class="group relative flex flex-col gap-3 border border-neutral-200/70 bg-white p-5 -mt-px -ml-px first:mt-0 first:ml-0 sm:[&:nth-child(2)]:ml-0 lg:[&:nth-child(3)]:ml-0 xl:[&:nth-child(4)]:ml-0 transition-all duration-200 ease-out hover:border-indigo-200 hover:bg-indigo-50/20 hover:z-10"
            >
              <!-- 头部：图标 + 标题 -->
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-50 border border-indigo-100">
                  <component :is="item.icon" class="h-4 w-4 text-indigo-600" stroke-width="1.5" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <h3 class="text-sm font-bold text-neutral-900 tracking-tight">
                      {{ item.title }}
                    </h3>
                    <span
                      class="text-xl leading-none shrink-0"
                      :class="getStatusColor(item.status)"
                    >
                      ·
                    </span>
                  </div>
                </div>
              </div>

              <!-- 描述 -->
              <p class="text-xs leading-5 text-neutral-600 line-clamp-2">
                {{ item.desc }}
              </p>

              <!-- 底部标签 -->
              <div class="mt-auto flex flex-wrap gap-2 pt-2">
                <span
                  v-for="(tag, tagIndex) in item.tags"
                  :key="tagIndex"
                  class="bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- 查看更多按钮 -->
          <div class="mt-8 text-center">
            <button
              type="button"
              class="group inline-flex h-10 items-center gap-2 border border-neutral-200 bg-white px-5 text-sm font-medium text-neutral-900 transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600"
              @click="toggleExpand"
            >
              <span>{{ isExpanded ? '收起' : '查看更多' }}</span>
              <component :is="isExpanded ? PanelTopClose : LayoutGrid" class="h-4 w-4" />
              <ChevronDownIcon
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': isExpanded }"
              />
            </button>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 底部信息 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content content-footer px-4 sm:px-6 lg:px-8">
          <span class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">智言AI</span>
          <span class="w-px h-6 bg-neutral-200" />
          <span class="text-base sm:text-lg text-neutral-600 font-medium">持续迭代，功能不断完善</span>
        </div>
      </div>

      <!-- 底部边框行 -->
      <div class="grid-border-row" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Bot,
  Store,
  Download,
  Code,
  BookOpen,
  Shield,
  MessageCircle,
  Upload,
  Sparkles,
  Eye,
  Link,
  Paintbrush,
  MessageSquare,
  User,
  Monitor,
  Cloud,
  CreditCard,
  Crown,
  Settings,
  HardDrive,
  BarChart3,
  Users,
  ShoppingCart,
  Key,
  FolderOpen,
  Ticket,
  LayoutGrid,
  PanelTopClose,
  ChevronDownIcon,
  type LucideIcon,
} from 'lucide-vue-next'

/** 功能项状态类型 */
type StatusType = 'released' | 'developing' | 'planned'

/** 功能项数据结构 */
interface FeatureItem {
  /** 功能名称 */
  title: string
  /** 功能描述 */
  desc: string
  /** 图标组件 */
  icon: LucideIcon
  /** 状态 */
  status: StatusType
  /** 标签列表 */
  tags: string[]
}

/**
 * 所有功能列表数据
 */
const allFeatures: FeatureItem[] = [
  {
    title: '智能体搭建',
    desc: '可快速搭建智能体，并关联知识库能够深度理解用户输入的文本提示词',
    icon: Bot,
    status: 'released',
    tags: ['已开源', '应用插件'],
  },
  {
    title: 'Coze智能体',
    desc: '已对接Coze第三方智能体，只需填写对应参数即可添加',
    icon: Bot,
    status: 'developing',
    tags: ['已开源', '应用插件'],
  },
  {
    title: 'Dify智能体',
    desc: '已对接Dify第三方智能体，只需填写对应参数即可添加',
    icon: Bot,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '智能体广场',
    desc: '不用自己开发，就能快速找到并使用适配各类场景的智能体，轻松解决工作与生活中的各类问题',
    icon: Store,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '智能体导入/导出',
    desc: '支持导入/导出DSL文件，快速备份、复用智能体的核心配置，无需重复编写逻辑',
    icon: Download,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '智能体发布API',
    desc: '允许将智能体能力开放给合作伙伴或第三方开发者，快速构建基于智能体的生态体系',
    icon: Code,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '知识库创建',
    desc: '用户自主搭建结构化、可扩展的知识存储体系，支持导入不同格式的文件',
    icon: BookOpen,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '知识库权限',
    desc: '支持邀请出成员进行协作管理知识库，能按需分配不同用户的查看、编辑、管理权限',
    icon: Shield,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: 'AI对话',
    desc: 'AI 对话能随时随地的聊天、解答疑问，就像身边有个全能的智能助手',
    icon: MessageCircle,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '上传文件',
    desc: '对话和智能体支持上传图片和文件，高效提取信息，转化结构化数据，提升内容利用效率',
    icon: Upload,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: 'AI文案优化',
    desc: '快速修正文案问题、优化表达，小白也能写出高质量的专业文案',
    icon: Sparkles,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: 'html预览',
    desc: '生成的HTML，支持在线预览效果，可实时可视化呈现代码编写效果',
    icon: Eye,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: 'MCP工具',
    desc: '前后台都能添加 MCP工具,运营可在后台统一配置,用户能在前台自主使用,兼顾管控效率与用户体验',
    icon: Link,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: 'DIY装修',
    desc: '通过可视化拖拽、模块化组件与自由布局能力,实现页面样式与功能的灵活定制',
    icon: Paintbrush,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '微信登录',
    desc: '微信登录无需注册新账号、记忆密码,一键即可快速进入应用,省心又便捷',
    icon: MessageSquare,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '账号登录',
    desc: '账号登录绑定用户身份,存储个性化数据,保障账户安全',
    icon: User,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: 'PC桌面端',
    desc: 'PC桌面端性能强、功能全、体验高效,是复杂任务与专业场景的首选',
    icon: Monitor,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '阿里云OSS',
    desc: '阿里云 OSS具备海量、安全、低成本、高可用的特性,可便捷实现任意类型文件的存储、管理与高速访问',
    icon: Cloud,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '用户充值',
    desc: '灵活调控用户充值行为,精准分层激励高价值用户,优化平台用户结构',
    icon: CreditCard,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '会员订阅',
    desc: '支持灵活的计费周期与权益配置,可无缝对接权限管理、自动续费等核心业务模块',
    icon: Crown,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '模型管理',
    desc: '无需技术开发即可一键调整模型参数、切换模型版本,轻松实现大模型能力的灵活配置',
    icon: Settings,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '添加本地模型',
    desc: '无需依赖外部接口,即可快速扩充自有模型库,按需切换模型满足不同业务场景需求',
    icon: HardDrive,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '财务统计',
    desc: '通过自动化的对账、结算与报表生成,大幅减少财务人员的重复工作,提升整体运营效率',
    icon: BarChart3,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '用户管理',
    desc: '一键查询、筛选、操作用户数据,快速处理账号问题,大幅减轻日常管理负担',
    icon: Users,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '订单管理',
    desc: '支持多维度订单数据统计与分析,可快速识别热销商品、高价值用户,助力优化运营策略',
    icon: ShoppingCart,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '角色权限',
    desc: '后台角色权限按需分配权限,隔离操作风险,提升管理安全性',
    icon: Key,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '组织架构',
    desc: '可视化搭建，人员权责清晰，高效支撑企业管理与协同',
    icon: Users,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '云文件',
    desc: '云端存管多端同步，权限可控协作高效，一站式搞定文件管理',
    icon: FolderOpen,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
  {
    title: '卡密兑换',
    desc: '支持批量生成、自定义权益，轻松实现虚拟商品的无接触分发，还能快速盘活存量用户、拉动新客转化',
    icon: Ticket,
    status: 'planned',
    tags: ['已开源', '应用插件'],
  },
]

/** 展开/收起状态 */
const isExpanded = ref(false)

/** 默认显示数量 - 4排4列 = 16个 */
const DEFAULT_DISPLAY_COUNT = 16

/**
 * 根据展开状态计算显示的功能项
 */
const displayedItems = computed(() => {
  return isExpanded.value
    ? allFeatures
    : allFeatures.slice(0, DEFAULT_DISPLAY_COUNT)
})

/**
 * 切换展开/收起状态
 */
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

/**
 * 获取状态颜色类名
 * @param status - 功能项状态
 * @returns 对应的颜色类名
 */
const getStatusColor = (status: StatusType): string => {
  const colorMap: Record<StatusType, string> = {
    released: 'text-green-500',
    developing: 'text-blue-500',
    planned: 'text-neutral-400',
  }
  return colorMap[status]
}
</script>

<style scoped>
/**
 * 网格边框容器
 * 使用 CSS Grid 构建三行布局：顶部边框、内容区、底部边框
 */
.grid-border-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  width: 100%;
}

/**
 * 网格边框包裹层
 * 相对定位容器，用于放置左右装饰边框
 */
.grid-border-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}

/**
 * 横向贯穿分隔线
 * 双横线之间填充斜向网格纹理
 * 用于标题下方和底部摘要上方
 */
.grid-border-divider {
  height: 1rem;
  border-top: 1px solid rgba(229, 229, 229, 0.7);
  border-bottom: 1px solid rgba(229, 229, 229, 0.7);
  background-color: white;
  background-image: repeating-linear-gradient(
    315deg,
    color-mix(in oklab, rgb(3, 7, 18) 5%, transparent) 0,
    color-mix(in oklab, rgb(3, 7, 18) 5%, transparent) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 10px 10px;
  background-attachment: fixed;
  width: 100%;
  flex-shrink: 0;
}

/**
 * 左右装饰边框基础样式
 * 绝对定位在内容区两侧
 */
.grid-border-side {
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc((100% - 1536px) / 2);
  min-width: 0;
  background-color: white;
}

/**
 * 左侧装饰边框
 */
.grid-border-side-left {
  left: 0;
}

/**
 * 左侧装饰边框的伪元素
 * 创建双竖线效果，中间填充网格纹理
 */
.grid-border-side-left::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 1rem;
  background-color: white;
  background-image: repeating-linear-gradient(
    315deg,
    color-mix(in oklab, rgb(3, 7, 18) 5%, transparent) 0,
    color-mix(in oklab, rgb(3, 7, 18) 5%, transparent) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 10px 10px;
  background-attachment: fixed;
  border-left: 1px solid rgba(229, 229, 229, 0.7);
  border-right: 1px solid rgba(229, 229, 229, 0.7);
}

/**
 * 右侧装饰边框
 */
.grid-border-side-right {
  right: 0;
}

/**
 * 右侧装饰边框的伪元素
 * 创建双竖线效果，中间填充网格纹理
 */
.grid-border-side-right::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1rem;
  background-color: white;
  background-image: repeating-linear-gradient(
    315deg,
    color-mix(in oklab, rgb(3, 7, 18) 5%, transparent) 0,
    color-mix(in oklab, rgb(3, 7, 18) 5%, transparent) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 10px 10px;
  background-attachment: fixed;
  border-left: 1px solid rgba(229, 229, 229, 0.7);
  border-right: 1px solid rgba(229, 229, 229, 0.7);
}

/**
 * 内容区容器
 * 限制最大宽度并居中显示
 */
.grid-border-content {
  position: relative;
  z-index: 1;
  max-width: 1536px;
  margin: 0 auto;
  width: 100%;
}

/**
 * 顶部和底部边框行
 */
.grid-border-row {
  min-height: 4rem;
  border-top: 1px solid rgba(229, 229, 229, 0.7);
  border-bottom: 1px solid rgba(229, 229, 229, 0.7);
  background-color: white;
}

/**
 * 底部摘要区域
 * 居中对齐的品牌信息展示
 */
.content-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
}

@media (min-width: 640px) {
  .content-footer {
    padding: 2rem 0;
  }
}
</style>
