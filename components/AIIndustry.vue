<template>
  <div class="w-full font-sans bg-white">
    <!-- 顶部边框行 - 带斜线网格效果 -->
    <div class="p-1">
      <div
        class="w-full min-h-4 rounded-lg border border-neutral-200/70 bg-white"
        style="
          --grid-line-color: color-mix(in oklab, #0a0a0a 5%, transparent);
          background-image: repeating-linear-gradient(315deg, var(--grid-line-color) 0, var(--grid-line-color) 1px, transparent 0, transparent 50%);
          background-size: 10px 10px;
          background-attachment: fixed;
        "
      />
    </div>

    <!-- 标题区域 -->
    <div class="flex p-1 pt-1">
      <div class="flex-1 rounded-lg border border-neutral-200/70 bg-white" />
      <div class="mx-1 w-full max-w-400 rounded-lg border border-neutral-200/75 bg-white px-6 py-8 sm:px-8 sm:py-10">
        <div class="text-center">
          <h2 class="text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl lg:text-[28px]">
            全场景
            <span class="text-neutral-300 font-light mx-2">|</span>
            AI 解决方案
          </h2>
          <p class="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-neutral-500 sm:mt-5 sm:text-sm">
            赋能企业与个人的超级智能体平台，助力业务数智化升级
          </p>
        </div>
      </div>
      <div class="flex-1 rounded-lg border border-neutral-200/70 bg-white" />
    </div>

    <!-- 主体内容区域 -->
    <div class="flex p-1 pt-1">
      <div class="flex-1 rounded-lg border border-neutral-200/70 bg-white" />
      <div class="mx-1 w-full max-w-400 overflow-hidden rounded-lg border border-neutral-200/75 bg-white">
        <!-- 主体卡片容器 -->
        <div class="relative min-h-[600px] flex flex-col lg:flex-row bg-white">
          <!-- 导航区域 -->
          <aside class="relative z-10 w-full lg:w-[22%] min-w-[180px] bg-neutral-50/30 border-b lg:border-b-0 lg:border-r border-neutral-200/70 flex flex-col">
            <!-- 移动端横向滚动 / 桌面端垂直列表 -->
            <div class="flex-1 overflow-x-auto lg:overflow-y-auto scrollbar-hide p-2">
              <div class="flex lg:flex-col lg:h-full gap-2">
                <button
                  v-for="(t, idx) in tabs"
                  :key="t.name"
                  class="group flex items-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-250 min-w-[140px] lg:min-w-0 text-left outline-none border lg:flex-1 lg:max-h-[64px]"
                  :class="[
                    active === idx
                      ? 'bg-white border-neutral-200 shadow-sm text-neutral-900'
                      : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100/60 hover:border-neutral-200/40'
                  ]"
                  @click="setActive(idx)"
                  @mouseenter="handleMouseEnter(idx)"
                >
                  <!-- 激活指示器 - 左侧竖线 -->
                  <div
                    class="w-1 h-5 rounded-full transition-all duration-250 shrink-0 hidden lg:block"
                    :class="active === idx ? 'bg-indigo-500' : 'bg-transparent'"
                  />

                  <!-- 图标 -->
                  <component
                    :is="t.icon"
                    class="h-5 w-5 transition-colors duration-250 shrink-0"
                    :class="
                      active === idx
                        ? 'text-neutral-800'
                        : 'text-neutral-400 group-hover:text-neutral-600'
                    "
                    stroke-width="1.5"
                  />

                  <!-- 标签文字 -->
                  <span 
                    class="text-[15px] font-medium tracking-normal truncate flex-1"
                    :class="active === idx ? 'text-neutral-900' : 'text-neutral-600'"
                  >
                    {{ t.name }}
                  </span>

                  <!-- 右侧箭头指示器 -->
                  <ChevronRightIcon
                    class="h-4 w-4 transition-all duration-250 shrink-0 hidden lg:block"
                    :class="active === idx ? 'opacity-100 translate-x-0 text-neutral-400' : 'opacity-0 -translate-x-1 text-neutral-300'"
                    stroke-width="2"
                  />
                </button>
              </div>
            </div>

            <!-- 左侧导航底部介绍文案 - 仅桌面端显示 -->
            <div class="hidden lg:block p-4 border-t border-neutral-200/60 bg-neutral-50/50">
              <div class="flex items-start gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-white border border-neutral-200/70 flex items-center justify-center shrink-0">
                  <SparklesIcon class="h-4 w-4 text-neutral-500" stroke-width="1.5" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-medium text-neutral-700 mb-1">探索 AI 能力</p>
                  <p class="text-[11px] leading-relaxed text-neutral-500">
                    点击上方分类查看详细功能，或联系顾问获取定制化方案
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <!-- 内容面板 -->
          <section class="relative z-10 flex-1 p-4 sm:p-6 lg:p-8 flex flex-col bg-white">
            <!-- 头部信息 -->
            <div class="mb-6 lg:mb-8 animate-slide-up">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200/70 bg-neutral-50 mb-4">
                <SparklesIcon class="h-3.5 w-3.5 text-neutral-500" />
                <span class="text-xs font-medium tracking-wider text-neutral-600 uppercase">
                  {{ currentTab?.name }}
                </span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                {{ currentTab?.title }}
              </h3>
            </div>

            <!-- 功能网格 - 参考 OpenSourceRoadmap 样式 -->
            <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-1 content-start mb-6">
              <div
                v-for="(f, i) in currentTab?.features"
                :key="i"
                class="group flex flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-300 ease-out hover:border-neutral-300"
              >
                <!-- 头部：图标 + 标题 -->
                <div class="flex items-center gap-2">
                  <component :is="f.icon" class="h-4 w-4 shrink-0 text-primary-600" stroke-width="1.5" />
                  <h4 class="text-sm font-semibold text-neutral-900 truncate">
                    {{ f.title }}
                  </h4>
                </div>

                <!-- 描述 -->
                <p class="text-xs leading-relaxed text-neutral-500 line-clamp-2">
                  {{ f.desc }}
                </p>
              </div>
            </div>

            <!-- 底部操作栏 -->
            <div class="mt-auto pt-6 border-t border-neutral-200/70 flex flex-wrap gap-3">
              <button
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-all"
                @click="openQrModal('solution')"
              >
                了解方案详情
                <ArrowRightIcon class="ml-2 h-4 w-4" stroke-width="2" />
              </button>

              <button
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200/70 rounded-lg transition-all hover:border-neutral-300"
                @click="openQrModal('consult')"
              >
                联系售前咨询
                <ChatBubbleLeftRightIcon class="ml-2 h-4 w-4" stroke-width="1.5" />
              </button>
            </div>
          </section>
        </div>
      </div>
      <div class="flex-1 rounded-lg border border-neutral-200/70 bg-white" />
    </div>

    <!-- 底部介绍文案 -->
    <div class="flex p-1 pt-1">
      <div class="flex-1 rounded-lg border border-neutral-200/70 bg-white" />
      <div class="mx-1 w-full max-w-400 rounded-lg border border-neutral-200/70 bg-white px-8 py-8 sm:px-10 sm:py-10">
        <div class="flex items-center justify-between gap-8">
          <!-- 左侧：标题与核心优势 -->
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-1 h-5 bg-neutral-900 rounded-full" />
              <h4 class="text-base font-semibold text-neutral-900 tracking-tight">
                智言AI 平台
              </h4>
            </div>
            <p class="text-sm leading-6 text-neutral-500">
              整合行业领先的 AI 大模型能力，提供从视觉创作、智能对话到知识管理的全栈解决方案。
            </p>
          </div>

          <!-- 右侧：核心能力标签 -->
          <div class="flex flex-wrap gap-2 shrink-0 max-w-[200px]">
            <span class="px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium">
              视觉创作
            </span>
            <span class="px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium">
              智能对话
            </span>
            <span class="px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium">
              知识管理
            </span>
            <span class="px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium">
              企业定制
            </span>
          </div>
        </div>

        <!-- 底部联系栏 -->
        <div class="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
          <p class="text-xs text-neutral-400">
            已为 500+ 企业提供 AI 转型服务
          </p>
          <button 
            class="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            @click="openQrModal('consult')"
          >
            联系商务咨询
            <ArrowRightIcon class="h-3.5 w-3.5" stroke-width="2" />
          </button>
        </div>
      </div>
      <div class="flex-1 rounded-lg border border-neutral-200/70 bg-white" />
    </div>

    <!-- 底部边框行 - 带斜线网格效果 -->
    <div class="p-1 pt-1">
      <div
        class="w-full min-h-4 rounded-lg border border-neutral-200/70 bg-white"
        style="
          --grid-line-color: color-mix(in oklab, #0a0a0a 5%, transparent);
          background-image: repeating-linear-gradient(315deg, var(--grid-line-color) 0, var(--grid-line-color) 1px, transparent 0, transparent 50%);
          background-size: 10px 10px;
          background-attachment: fixed;
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
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

// 二维码弹窗 - 触发 BackToTop 组件
const openQrModal = (type: 'solution' | 'consult') => {
  const config =
    type === 'solution'
      ? { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' }
      : { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

/**
 * AI Industry Solutions Component
 * 参考 OpenSourceRoadmap 的边框行设计
 */

const tabs = [
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

const active = ref(0)
const currentTab = computed(() => tabs[active.value] || tabs[0])

const setActive = (index: number) => {
  active.value = index
}

const handleMouseEnter = (index: number) => {
  active.value = index
}
</script>

<style scoped>
/* 隐藏滚动条但允许滚动 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
