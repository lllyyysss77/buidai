<template>
  <section class="overflow-hidden bg-white">
    <div class="grid-border-container">
      <!-- 标题区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
          <div class="mb-4 sm:mb-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
              <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                全场景 AI 解决方案
              </span>
            </div>
            <h2 class="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900">
              赋能企业数智化<span class="text-indigo-600">转型升级</span>
            </h2>
            <p class="mt-2 text-xs sm:text-sm text-neutral-500 max-w-2xl">
              超级智能体平台，为创作者与企业提供一站式 AI 能力支持
            </p>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 主体内容区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-0">
          <!-- 主内容区：左侧导航 + 右侧内容 -->
          <div class="main-content-grid">
            <!-- 导航区域 -->
            <aside
              class="tabs-sidebar"
              @mouseenter="pauseAutoplay"
              @mouseleave="resumeAutoplay"
            >
              <!-- Tab 按钮列表 -->
              <div class="tabs-list">
                <button
                  v-for="(t, idx) in tabs"
                  :id="`industry-tab-${idx}`"
                  :key="t.name"
                  type="button"
                  role="tab"
                  :aria-selected="active === idx"
                  :class="[
                    'tab-button',
                    active === idx ? 'tab-button--active' : 'tab-button--inactive'
                  ]"
                  tabindex="0"
                  @click="setActive(idx)"
                  @keydown="handleKeydown($event, idx)"
                >
                  <!-- 激活指示器 - 左侧竖线 -->
                  <div
                    class="tab-indicator"
                    :class="active === idx ? 'tab-indicator--active' : 'tab-indicator--inactive'"
                  />

                  <!-- 图标 -->
                  <component
                    :is="t.icon"
                    class="tab-icon"
                    :class="active === idx ? 'tab-icon--active' : 'tab-icon--inactive'"
                    stroke-width="1.5"
                  />

                  <!-- 标签文字 -->
                  <span
                    class="tab-label"
                    :class="active === idx ? 'tab-label--active' : 'tab-label--inactive'"
                  >
                    {{ t.name }}
                  </span>

                  <!-- 右侧箭头指示器 -->
                  <ChevronRightIcon
                    class="tab-arrow"
                    :class="active === idx ? 'tab-arrow--active' : 'tab-arrow--inactive'"
                    stroke-width="2"
                  />

                  <!-- 底部进度条 -->
                  <div v-if="active === idx && isAutoplay" class="tab-progress-container">
                    <div class="tab-progress-bar" />
                  </div>
                </button>
              </div>

              <!-- 左侧导航底部介绍文案 -->
              <div class="tabs-footer">
                <div class="tabs-footer-content">
                  <div class="tabs-footer-icon-wrapper">
                    <SparklesIcon class="tabs-footer-icon" stroke-width="1.5" />
                  </div>
                  <p class="tabs-footer-title">探索 AI 能力</p>
                </div>
                <p class="tabs-footer-desc">
                  点击上方分类查看详细功能，或联系顾问获取定制化方案
                </p>
              </div>
            </aside>

            <!-- 内容面板 -->
            <section class="content-panel">
              <!-- 头部信息 -->
              <div class="content-header">
                <div class="content-header-badge">
                  <component :is="currentTab?.icon" class="content-header-icon" stroke-width="2" />
                  <span class="content-header-label">
                    {{ currentTab?.name }}
                  </span>
                </div>
                <h3 class="content-header-title">
                  {{ currentTab?.title }}
                </h3>
              </div>

              <!-- 功能网格 -->
              <div class="features-grid">
                <div
                  v-for="(f, i) in currentTab?.features"
                  :key="i"
                  class="feature-card"
                >
                  <!-- 头部：图标 + 标题 -->
                  <div class="feature-card-header">
                    <div class="feature-card-icon-wrapper">
                      <component :is="f.icon" class="feature-card-icon" stroke-width="1.5" />
                    </div>
                    <h4 class="feature-card-title">
                      {{ f.title }}
                    </h4>
                  </div>

                  <!-- 描述 -->
                  <p class="feature-card-desc">
                    {{ f.desc }}
                  </p>
                </div>
              </div>

              <!-- 底部操作栏 -->
              <div class="content-actions">
                <button
                  class="btn btn--primary"
                  @click="openQrModal('solution')"
                >
                  了解方案详情
                  <ArrowRightIcon class="btn-icon" stroke-width="2" />
                </button>

                <button
                  class="btn btn--secondary"
                  @click="openQrModal('consult')"
                >
                  联系售前咨询
                  <ChatBubbleLeftRightIcon class="btn-icon" stroke-width="1.5" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 底部介绍文案 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-3 sm:px-4 lg:px-6 xl:px-8">
          <div class="content-footer">
            <div class="footer-main">
              <!-- 左侧：标题与核心优势 -->
              <div class="footer-info">
                <div class="footer-info-header">
                  <span class="footer-info-indicator" />
                  <h4 class="footer-info-title">
                    智言AI 平台
                  </h4>
                </div>
                <p class="footer-info-desc">
                  整合行业领先的 AI 大模型能力，提供从视觉创作、智能对话到知识管理的全栈解决方案。
                </p>
              </div>

              <!-- 右侧：核心能力标签 -->
              <div class="footer-tags">
                <span class="footer-tag">视觉创作</span>
                <span class="footer-tag footer-tag--highlight">智能对话</span>
                <span class="footer-tag">知识管理</span>
                <span class="footer-tag">企业定制</span>
              </div>
            </div>

            <!-- 底部联系栏 -->
            <div class="footer-bottom">
              <p class="footer-bottom-text">
                已为 500+ 企业提供 AI 转型服务
              </p>
              <button
                class="footer-bottom-link"
                @click="openQrModal('consult')"
              >
                联系商务咨询
                <ArrowRightIcon class="footer-bottom-link-icon" stroke-width="2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部边框行 -->
      <div class="grid-border-row" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, type Component } from 'vue'
import {
  SparklesIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CpuChipIcon,
  PresentationChartLineIcon,
  MicrophoneIcon,
  PhotoIcon,
  ShareIcon,
  CloudArrowUpIcon,
  ArrowPathIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  CommandLineIcon,
  UserIcon,
  ShoppingBagIcon,
  FilmIcon,
  PencilSquareIcon,
  BookOpenIcon,
  MusicalNoteIcon
} from '@heroicons/vue/24/outline'

/**
 * 自动轮播间隔时间（毫秒）
 */
const AUTOPLAY_INTERVAL = 5000

/**
 * 恢复自动轮播延迟时间（毫秒）
 */
const RESUME_DELAY = 5000

/**
 * Tab 数据接口
 * @interface TabItem
 */
interface FeatureItem {
  /** 图标组件 */
  icon: Component
  /** 功能标题 */
  title: string
  /** 功能描述 */
  desc: string
}

interface TabItem {
  /** 标签名称 */
  name: string
  /** 标题 */
  title: string
  /** 图标组件 */
  icon: Component
  /** 功能列表 */
  features: FeatureItem[]
}

/**
 * AI 行业解决方案标签数据
 */
const tabs: TabItem[] = [
  {
    name: 'AI 视觉创作',
    title: 'AI 视觉与创意生成解决方案',
    icon: PhotoIcon,
    features: [
      { icon: VideoCameraIcon, title: 'Sora视频生成', desc: '基于开源Sora技术，一键生成电影级AI视频，支持文生视频与图生视频' },
      { icon: PhotoIcon, title: '香蕉绘画', desc: '基于Gemini 3 Pro模型，支持文生图、图生图与多图融合，预置模板开箱即用' },
      { icon: SparklesIcon, title: '即梦AI视频', desc: '输入文字或上传参考图，快速生成风格多样的短视频，支持720P/1080P' },
      { icon: PhotoIcon, title: '即梦AI绘画', desc: '简单提示词快速生成高质量图像，支持1K/2K分辨率，写实卡通插画皆可' },
      { icon: UserIcon, title: 'AI数字人', desc: '4K超清画质、5秒声音克隆、多语种合成，打造专属数字分身' },
      { icon: ShoppingBagIcon, title: '电商试衣换装', desc: '商品一键适配模特上身，背景智能替换，提升商品主图转化率' },
      { icon: FilmIcon, title: '视频混剪助手', desc: '自动化批量剪辑、智能转场、滤镜调色，一键生成专业级混剪视频' }
    ]
  },
  {
    name: '智能对话 Agent',
    title: '智能体与对话交互系统',
    icon: ChatBubbleLeftRightIcon,
    features: [
      { icon: CpuChipIcon, title: '智能体', desc: '自定义专属AI智能体，满足个性化需求' },
      { icon: ChatBubbleLeftRightIcon, title: 'AI对话', desc: '基于大语言模型的流畅自然交互体验' },
      { icon: CodeBracketIcon, title: '对话html预览', desc: '实时预览对话中生成的HTML代码效果' },
      { icon: CloudArrowUpIcon, title: '对话上传文件', desc: '支持在对话中直接上传并解析文件内容' },
      { icon: CommandLineIcon, title: '智能体DSL', desc: '通过DSL灵活编排智能体工作流' },
      { icon: SparklesIcon, title: '对话文案AI补全', desc: '智能预测并补全用户输入内容' },
      { icon: MicrophoneIcon, title: '语音播报', desc: '将对话回复自动转换为语音播报' },
      { icon: ShareIcon, title: '分享对话', desc: '一键生成链接，便捷分享精彩对话' }
    ]
  },
  {
    name: '内容创作工具',
    title: '智能内容创作与生产工具',
    icon: DocumentTextIcon,
    features: [
      { icon: DocumentTextIcon, title: 'AI简历', desc: '智能问答快速生成简历，提供数十款专业模板，支持AI分析与优化' },
      { icon: PencilSquareIcon, title: 'AI短剧小说', desc: '无限量剧本创作、角色设定、章节可视化拖拽、AI扩写润色续写' },
      { icon: BookOpenIcon, title: '小红书助手', desc: '一键生成爆款标题与风格化文案，AI生成配图与视频封面' },
      { icon: PresentationChartLineIcon, title: 'AI PPT', desc: '输入主题自动生成结构清晰、设计美观的PPT，内置多种模板与图表' },
      { icon: MusicalNoteIcon, title: 'AI音乐', desc: '文本/歌词/哼唱/乐谱输入，快速生成完整歌曲、伴奏、人声或纯音乐' }
    ]
  },
  {
    name: '模型与数据能力',
    title: '多模型管理与数据解析',
    icon: CpuChipIcon,
    features: [
      { icon: CpuChipIcon, title: 'MCP', desc: '支持模型上下文协议，增强模型能力' },
      { icon: CpuChipIcon, title: '模型管理', desc: '统一管理与调度各类大语言模型' },
      { icon: PhotoIcon, title: '大模型视觉识别', desc: '赋予模型强大的图像理解与分析能力' },
      { icon: GlobeAltIcon, title: '网页解析', desc: '智能提取网页正文与关键信息' },
      { icon: PhotoIcon, title: '图文解析', desc: '多模态内容深度理解与结构化提取' },
      { icon: DocumentTextIcon, title: '内容总结', desc: '快速提炼长文核心观点与摘要' },
      { icon: ChartBarIcon, title: '图表生成', desc: '根据数据自动生成可视化图表' }
    ]
  },
  {
    name: '知识库与文档',
    title: '企业级知识库与文档处理',
    icon: DocumentTextIcon,
    features: [
      { icon: DocumentTextIcon, title: '知识库', desc: '构建企业私有知识库，数据安全可控' },
      { icon: CloudArrowUpIcon, title: '文件导入导出', desc: '支持多种格式文档的批量导入与导出' },
      { icon: ArrowPathIcon, title: '问答对导入', desc: '快速导入QA问答对，优化模型回复' },
      { icon: ChartBarIcon, title: '拆分问答对', desc: '智能拆分长文档为独立的问答对片段' },
      { icon: DocumentTextIcon, title: '文档问答', desc: '基于文档内容的精准问答与检索' },
      { icon: DocumentTextIcon, title: 'PDF解析工具', desc: '高效提取PDF文档中的文本与表格' },
      { icon: DocumentTextIcon, title: '文件生成', desc: '自动生成报告、合同等标准化文档' }
    ]
  }
]

// 当前激活的标签索引
const active = ref(0)

// 当前显示的标签
const currentTab = computed(() => tabs[active.value] || tabs[0])

// 是否正在自动轮播
const isAutoplay = ref(true)

// 自动轮播定时器
let autoplayTimer: ReturnType<typeof setInterval> | null = null

// 恢复自动轮播定时器
let autoplayResumeTimer: ReturnType<typeof setTimeout> | null = null

/**
 * 停止自动轮播
 */
const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
  isAutoplay.value = false
}

/**
 * 开始自动轮播
 */
const startAutoplay = () => {
  stopAutoplay()
  isAutoplay.value = true
  autoplayTimer = setInterval(() => {
    active.value = (active.value + 1) % tabs.length
  }, AUTOPLAY_INTERVAL)
}

/**
 * 暂停自动轮播（鼠标进入时）
 */
const pauseAutoplay = () => {
  stopAutoplay()
  if (autoplayResumeTimer) {
    clearTimeout(autoplayResumeTimer)
    autoplayResumeTimer = null
  }
}

/**
 * 恢复自动轮播（鼠标离开时）
 */
const resumeAutoplay = () => {
  if (autoplayResumeTimer) {
    clearTimeout(autoplayResumeTimer)
  }
  autoplayResumeTimer = setTimeout(startAutoplay, RESUME_DELAY)
}

/**
 * 设置当前激活的标签
 * @param index - 目标标签索引
 */
const setActive = (index: number) => {
  active.value = index
  resumeAutoplay()
}

/**
 * 处理键盘导航事件
 * @param event - 键盘事件对象
 * @param currentIndex - 当前按钮索引
 */
const handleKeydown = (event: KeyboardEvent, currentIndex: number) => {
  const actions: Record<string, () => void> = {
    ArrowDown: () => currentIndex < tabs.length - 1 && setActive(currentIndex + 1),
    ArrowUp: () => currentIndex > 0 && setActive(currentIndex - 1),
    Home: () => setActive(0),
    End: () => setActive(tabs.length - 1)
  }

  const action = actions[event.key]
  if (action) {
    event.preventDefault()
    action()
    nextTick(() => document.getElementById(`industry-tab-${active.value}`)?.focus())
  }
}

/**
 * 二维码弹窗 - 触发 BackToTop 组件
 * @param type - 弹窗类型
 */
const openQrModal = (type: 'solution' | 'consult') => {
  const config =
    type === 'solution'
      ? { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' }
      : { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

// 组件挂载时启动自动轮播
onMounted(startAutoplay)

// 组件卸载时清理定时器
onUnmounted(() => {
  stopAutoplay()
  if (autoplayResumeTimer) {
    clearTimeout(autoplayResumeTimer)
  }
})
</script>

<style scoped>
/* ============================================
   网格边框系统 - Grid Border System
   ============================================ */

/**
 * 网格边框容器
 * 使用 CSS Grid 构建三行布局：顶部边框、内容区、底部边框
 */
.grid-border-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  width: 100%;
  min-width: 0;
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
  min-width: 0;
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
  min-width: 0;
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

/* ============================================
   主内容区布局 - Main Content Layout
   ============================================ */

/**
 * 主内容网格
 * 移动端：垂直堆叠
 * 桌面端：左侧固定宽度导航 + 右侧自适应内容区
 */
.main-content-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 0;
  background-color: transparent;
  gap: 0;
}

@media (min-width: 1024px) {
  .main-content-grid {
    grid-template-columns: 260px 1fr;
    grid-template-rows: 1fr;
  }
}

@media (min-width: 1280px) {
  .main-content-grid {
    grid-template-columns: 280px 1fr;
  }
}

/* ============================================
   Tab 侧边栏 - Tabs Sidebar
   ============================================ */

/**
 * Tab 侧边栏容器
 * 贴齐边框设计，无内边距
 * 桌面端内容靠顶部对齐，贴齐左侧边缘
 */
.tabs-sidebar {
  position: relative;
  order: 1;
  width: 100%;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .tabs-sidebar {
    order: 1;
    border-right: 1px solid rgba(229, 229, 229, 0.7);
    justify-content: flex-start;
    min-height: 100%;
  }
}

/**
 * Tab 按钮列表
 * 贴齐边框，无额外内边距
 * 桌面端内容靠顶部对齐，贴齐左侧边缘
 */
.tabs-list {
  display: flex;
  flex-direction: row;
  gap: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  flex: 1;
}

.tabs-list::-webkit-scrollbar {
  display: none;
}

@media (min-width: 1024px) {
  .tabs-list {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    justify-content: flex-start;
    flex: 1;
    max-height: none;
  }
}

/**
 * Tab 按钮基础样式
 * 触控友好的最小尺寸（44px）
 * 参考 FeatureSteps.vue 布局：pl-0 贴齐左侧，内容区用 pl-3 缩进
 */
.tab-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  min-width: fit-content;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-out;
  background: transparent;
  border: none;
  outline: none;
  min-height: 44px;
}

.tab-button:focus-visible {
  box-shadow: inset 0 0 0 2px rgb(99 102 241);
}

@media (min-width: 1024px) {
  .tab-button {
    width: 100%;
    padding: 1rem 1rem 1rem 0;
    border-radius: 0;
    min-height: 56px;
  }
}

/**
 * Tab 按钮状态样式
 * 参考 FeatureSteps.vue 使用左侧边框指示器样式
 */
.tab-button--active {
  background-color: rgb(250 250 250);
  border-bottom: 2px solid rgb(99 102 241);
}

.tab-button--inactive {
  border-bottom: 2px solid transparent;
}

@media (min-width: 1024px) {
  .tab-button--active {
    background-color: rgb(250 250 250);
    border: none;
    border-bottom: none;
    box-shadow: none;
  }

  .tab-button--inactive {
    border: none;
    border-bottom: none;
  }

  .tab-button--inactive:hover {
    background-color: rgb(250 250 250 / 0.5);
  }
}

/**
 * Tab 激活指示器（左侧竖线）
 * 参考 FeatureSteps.vue：left-0 贴齐最左侧，w-1 (4px) 细线设计
 */
.tab-indicator {
  position: absolute;
  left: 0;
  top: 1rem;
  bottom: 1rem;
  width: 4px;
  border-radius: 0 9999px 9999px 0;
  transition: all 0.2s;
}

.tab-indicator--active {
  background-color: rgb(99 102 241);
}

.tab-indicator--inactive {
  background-color: transparent;
}

@media (max-width: 1023px) {
  .tab-indicator {
    display: none;
  }
}

/**
 * Tab 图标
 * 参考 FeatureSteps.vue：图标作为内容区第一个元素，使用 ml-3 (12px) 缩进
 */
.tab-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  transition: color 0.2s;
  margin-left: 0.75rem;
}

.tab-icon--active {
  color: rgb(79 70 229);
}

.tab-icon--inactive {
  color: rgb(163 163 163);
}

@media (max-width: 1023px) {
  .tab-icon--inactive {
    color: rgb(115 115 115);
  }
}

.group:hover .tab-icon--inactive {
  color: rgb(82 82 82);
}

/**
 * Tab 标签文字
 */
.tab-label {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.tab-label--active {
  color: rgb(99 102 241);
}

.tab-label--inactive {
  color: rgb(38 38 38);
}

@media (min-width: 1024px) {
  .tab-label--inactive {
    color: rgb(38 38 38);
  }
}

/**
 * Tab 箭头指示器
 */
.tab-arrow {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  transition: all 0.2s;
}

.tab-arrow--active {
  opacity: 1;
  transform: translateX(0);
  color: rgb(129 140 248);
}

.tab-arrow--inactive {
  opacity: 0;
  transform: translateX(-0.25rem);
  color: rgb(212 212 212);
}

@media (max-width: 1023px) {
  .tab-arrow {
    display: none;
  }
}

/**
 * Tab 进度条容器
 */
.tab-progress-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgb(245 245 245);
}

@media (min-width: 1024px) {
  .tab-progress-container {
    left: 0.5rem;
    right: 0.5rem;
    border-radius: 1px;
  }
}

/**
 * Tab 进度条动画
 */
.tab-progress-bar {
  height: 100%;
  background-color: rgb(129 140 248);
  animation: progress 5s linear;
}

@keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}

/**
 * Tab 侧边栏底部信息区
 * 桌面端固定在底部，贴齐左侧边缘
 */
/**
 * Tab 侧边栏底部信息区
 * 简洁设计，与 FeatureSteps.vue 风格保持一致
 */
.tabs-footer {
  padding: 1rem 0;
  border-top: 1px solid rgba(229, 229, 229, 0.6);
  background-color: rgb(250 250 250);
  flex-shrink: 0;
}

@media (max-width: 1023px) {
  .tabs-footer {
    display: none;
  }
}

.tabs-footer-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-left: 0.75rem;
  margin-bottom: 0.25rem;
}

.tabs-footer-icon-wrapper {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: rgb(238 242 255);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tabs-footer-icon {
  width: 0.875rem;
  height: 0.875rem;
  color: rgb(99 102 241);
}

.tabs-footer-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(38 38 38);
}

.tabs-footer-desc {
  font-size: 11px;
  line-height: 1.25rem;
  color: rgb(115 115 115);
  padding-left: 0.75rem;
  margin-top: 0.25rem;
}

/* ============================================
   内容面板 - Content Panel
   ============================================ */

/**
 * 内容面板容器
 * 移动端：减小 padding 让卡片更宽
 */
.content-panel {
  position: relative;
  order: 2;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0.5rem;
  min-width: 0;
  overflow: hidden;
  width: 100%;
}

@media (min-width: 640px) {
  .content-panel {
    padding: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .content-panel {
    padding: 1.5rem;
  }
}

@media (min-width: 1280px) {
  .content-panel {
    padding: 2rem;
  }
}

/**
 * 内容面板头部
 */
.content-header {
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .content-header {
    margin-bottom: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .content-header {
    margin-bottom: 1.5rem;
  }
}

.content-header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

@media (min-width: 640px) {
  .content-header-badge {
    margin-bottom: 0.75rem;
  }
}

.content-header-icon {
  width: 1rem;
  height: 1rem;
  color: rgb(99 102 241);
}

.content-header-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  color: rgb(79 70 229);
  text-transform: uppercase;
}

.content-header-title {
  font-size: 1rem;
  font-weight: 700;
  color: rgb(23 23 23);
  letter-spacing: -0.025em;
  line-height: 1.4;
}

@media (min-width: 640px) {
  .content-header-title {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .content-header-title {
    font-size: 1.25rem;
  }
}

/* ============================================
   功能网格 - Features Grid
   ============================================ */

/**
 * 功能卡片网格
 * 移动端：参考 buidai.vue 双列网格布局，gap-4 (1rem)
 * 小平板（640px+）：双列
 * 大平板及以上：自适应列数
 */
.features-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  content: start;
  margin-bottom: 1rem;
  min-width: 0;
  width: 100%;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.625rem;
    margin-bottom: 1.25rem;
  }
}

@media (min-width: 1280px) {
  .features-grid {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
}

/**
 * 功能卡片
 * 触控友好的最小高度
 * 移动端：参考 buidai.vue，双列布局，px-5 py-4 (1.25rem 1rem)
 */
.feature-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(229, 229, 229, 0.8);
  background-color: white;
  transition: all 0.2s ease-out;
  min-width: 0;
  min-height: auto;
  width: 100%;
}

@media (min-width: 640px) {
  .feature-card {
    padding: 1.25rem;
    gap: 0.75rem;
  }
}

@media (min-width: 1024px) {
  .feature-card {
    padding: 1.25rem;
    gap: 0.75rem;
  }
}

.feature-card:hover {
  border-color: rgb(199 210 254);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  background-color: rgb(238 242 255 / 0.2);
}

/**
 * 功能卡片头部
 */
.feature-card-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  min-width: 0;
}

.feature-card-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.375rem;
  background-color: rgb(238 242 255);
  border: 1px solid rgb(224 231 255);
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .feature-card-icon-wrapper {
    width: 2rem;
    height: 2rem;
  }
}

.feature-card-icon {
  width: 0.875rem;
  height: 0.875rem;
  color: rgb(79 70 229);
}

@media (min-width: 640px) {
  .feature-card-icon {
    width: 1rem;
    height: 1rem;
  }
}

.feature-card-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(23 23 23);
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  line-height: 1.3;
  white-space: nowrap;
}

@media (min-width: 640px) {
  .feature-card-title {
    font-size: 1rem;
  }
}

/**
 * 功能卡片描述
 */
.feature-card-desc {
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(82 82 82);
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

@media (min-width: 640px) {
  .feature-card-desc {
    font-size: 0.8125rem;
  }
}

/* ============================================
   操作按钮 - Action Buttons
   ============================================ */

/**
 * 内容区操作栏
 */
.content-actions {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(229, 229, 229, 0.7);
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
}

@media (min-width: 640px) {
  .content-actions {
    padding-top: 1.25rem;
    gap: 0.75rem;
  }
}

/**
 * 按钮基础样式
 * 触控友好的最小尺寸（44px）
 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1rem;
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
  min-height: 40px;
  flex: 1;
  min-width: 120px;
}

@media (min-width: 640px) {
  .btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    min-height: 44px;
    flex: 0 0 auto;
  }
}

.btn:focus-visible {
  box-shadow: 0 0 0 2px white, 0 0 0 4px rgb(99 102 241);
}

.btn-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.375rem;
}

@media (min-width: 640px) {
  .btn-icon {
    margin-left: 0.5rem;
  }
}

/**
 * 主要按钮
 */
.btn--primary {
  color: white;
  background-color: rgb(99 102 241);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.btn--primary:hover {
  background-color: rgb(79 70 229);
}

/**
 * 次要按钮
 */
.btn--secondary {
  color: rgb(64 64 64);
  background-color: white;
  border: 1px solid rgb(229 229 229);
}

.btn--secondary:hover {
  background-color: rgb(250 250 250);
  border-color: rgb(212 212 212);
}

/* ============================================
   底部区域 - Footer Section
   ============================================ */

/**
 * 底部内容区
 */
.content-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 0;
}

@media (min-width: 640px) {
  .content-footer {
    padding: 1.5rem 0;
  }
}

@media (min-width: 1024px) {
  .content-footer {
    padding: 2rem 0;
  }
}

/**
 * 底部主内容
 */
.footer-main {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 56rem;
}

@media (min-width: 1024px) {
  .footer-main {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}

/**
 * 底部信息区
 */
.footer-info {
  flex: 1;
  min-width: 0;
}

.footer-info-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.footer-info-indicator {
  display: inline-block;
  height: 0.375rem;
  width: 1rem;
  border-radius: 9999px;
  background-color: rgb(79 70 229);
}

.footer-info-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(23 23 23);
  letter-spacing: -0.025em;
}

@media (min-width: 640px) {
  .footer-info-title {
    font-size: 1rem;
  }
}

.footer-info-desc {
  font-size: 0.75rem;
  line-height: 1.6;
  color: rgb(82 82 82);
  margin: 0;
}

@media (min-width: 640px) {
  .footer-info-desc {
    font-size: 0.8125rem;
    line-height: 1.625;
  }
}

/**
 * 底部标签组
 */
.footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .footer-tags {
    max-width: 220px;
    justify-content: flex-end;
  }
}

.footer-tag {
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  background-color: rgb(245 245 245);
  color: rgb(64 64 64);
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
}

.footer-tag--highlight {
  background-color: rgb(238 242 255);
  color: rgb(67 56 202);
}

/**
 * 底部联系栏
 */
.footer-bottom {
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid rgb(245 245 245);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  max-width: 56rem;
}

@media (min-width: 640px) {
  .footer-bottom {
    margin-top: 1.5rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.footer-bottom-text {
  font-size: 11px;
  color: rgb(163 163 163);
  margin: 0;
}

.footer-bottom-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgb(64 64 64);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0;
  min-height: 32px;
}

.footer-bottom-link:hover {
  color: rgb(23 23 23);
}

.footer-bottom-link-icon {
  width: 0.75rem;
  height: 0.75rem;
}
</style>
