<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 relative">
    <!-- 背景装饰：左上角网格 -->
    <div class="absolute top-0 left-0 w-full h-[400px] md:h-[600px] bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] z-0"></div>

    <!-- 英雄区域 -->
    <section class="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden z-10">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-600 mb-8">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>BuidAI V4.6.8 strong release</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
          必定AI <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 block sm:inline">企业级 AI </span>应用构建平台
        </h1>

        <p class="text-base sm:text-xl text-gray-500 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
         可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button class="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation">
            <!-- Rocket Icon -->
            <RocketLaunchIcon class="w-5 h-5" />
            立即开始
            <!-- Arrow Right Icon -->
            <ArrowRightIcon class="w-4 h-4" />
          </button>
          <button class="w-full sm:w-auto px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 active:scale-95 transition-all shadow-[0_4px_14px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 touch-manipulation">
            <!-- Document Icon -->
            <DocumentTextIcon class="w-5 h-5" />
            查看文档
          </button>
        </div>
      </div>
    </section>

    <!-- 核心功能 卡片网格 -->
    <section class="py-12 md:py-20 bg-gray-50/50">
      <div class="container mx-auto px-4">
        <!-- 标题区域 -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">核心功能</h2>
          <p class="text-lg text-gray-500 max-w-2xl mx-auto">
            全方位赋能企业 AI 转型，打造智能高效的业务闭环
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(item, index) in featureCards" :key="index" class="group relative flex flex-col h-full">

            <!-- 顶部装饰线条 -->
            <div class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- 卡片主体 -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden z-10">

              <!-- 背景光晕装饰 -->
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-gray-50 rounded-full blur-3xl group-hover:bg-blue-50/50 transition-colors duration-500 z-0"></div>

              <!-- 头部信息 -->
              <div class="relative z-10 flex items-start justify-between mb-6">
                 <!-- 类别标签 -->
                 <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {{ item.category }}
                </span>
                <!-- 功能标签 -->
                <span class="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  {{ item.tag }}
                </span>
              </div>

              <!-- 标题与描述 -->
              <div class="relative z-10 mb-6 flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {{ item.desc }}
                </p>
              </div>

              <!-- 图像区域 -->
              <div class="relative z-10 mt-auto rounded-xl overflow-hidden bg-gray-50 border border-gray-100 aspect-video group-hover:border-blue-100 transition-colors duration-300">
                <img
                  :src="item.image"
                  :alt="item.title"
                  loading="lazy"
                  class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 全行业解决方案 -->
    <AIIndustry />

    <!-- 产品优势 -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 md:mb-20">
          <span class="inline-block py-1 px-3 rounded-full bg-ui-primary/10 border border-ui-primary/20 text-ui-primary text-sm font-semibold mb-4">Core Strengths</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">产品核心优势</h2>
          <p class="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            为您提供一站式的 AI 解决方案，助力企业实现业务效率的质变与创新
          </p>
        </div>

        <div class="flex flex-col gap-16 md:gap-24">
          <div v-for="(feature, idx) in features" :key="idx"
               class="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24"
               :class="{ 'lg:flex-row-reverse': idx % 2 === 1 }"
          >
            <!-- 文本内容 -->
            <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div class="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <component :is="feature.icon" class="w-8 h-8 text-ui-primary" />
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ feature.title }}</h3>
              <p class="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                {{ feature.desc }}
              </p>

              <!-- 装饰线条 -->
              <div class="w-20 h-1 bg-gray-100 rounded-full group-hover:w-32 group-hover:bg-ui-primary transition-all duration-300"></div>
            </div>

            <!-- 视频演示 -->
            <div class="w-full lg:w-1/2">
              <div class="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200 border border-gray-100 bg-white aspect-video group-hover:-translate-y-2 transition-transform duration-300">
                <video
                  :src="feature.video"
                  autoplay
                  loop
                  muted
                  playsinline
                  class="w-full h-full object-cover"
                ></video>
                <!-- 视频遮罩 -->
                <div class="absolute inset-0 bg-linear-to-tr from-ui-primary/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900 relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16 md:mb-20">
          <UBadge label="Why BuidAI" variant="subtle" color="neutral" class="mb-4 px-3 py-1" />
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">为什么选择 BuidAI ?</h2>
          <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            从底层架构到上层应用，我们提供全栈式的 AI 解决方案，助您在智能时代保持领先
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(adv, idx) in advantages" :key="idx"
               class="group p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">

            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors duration-200">
                <component :is="adv.icon" class="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-200" />
              </div>

              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-100 transition-colors duration-200">{{ adv.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 leading-relaxed">{{ adv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 md:py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          <!-- 左侧：标题 -->
          <div class="lg:w-1/3 w-full text-center lg:text-left">
            <h2 class="text-2xl md:text-4xl font-bold text-[#0F0F12] mb-4">常见问题</h2>
            <p class="text-gray-500 text-sm md:text-base">关于 BuidAI 的常见疑问解答</p>
          </div>

          <!-- 右侧：FAQ 列表 -->
          <div class="lg:w-2/3 w-full space-y-4">
            <div
              v-for="(faq, idx) in faqs"
              :key="idx"
              class="bg-white rounded-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                @click="toggleFaq(idx)"
                class="w-full flex items-start justify-between p-6 text-left focus:outline-none hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation min-h-[44px]"
              >
                <span class="text-base md:text-lg font-medium text-[#0F0F12] pr-4 md:pr-8">{{ faq.question }}</span>
                <span class="text-gray-400 shrink-0 mt-1 transition-transform duration-300" :class="{ 'rotate-45': activeFaq === idx }">
                  <PlusIcon class="w-5 h-5" />
                </span>
              </button>
              <div
                class="grid transition-all duration-300 ease-in-out"
                :class="activeFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <div class="px-6 pb-6 text-sm md:text-[15px] text-[#5A5E6A] leading-relaxed">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <!-- 装饰背景 -->
      <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-50/50 dark:to-gray-800/50 pointer-events-none"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary-50/40 via-transparent to-transparent pointer-events-none dark:from-primary-900/10"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <!-- 左侧文案 -->
          <div class="text-center lg:text-left max-w-2xl">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
              现在开始构建您的 <span class="text-primary-600 dark:text-primary-400">AI Agent</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              加入数万开发者的行列，使用 BuidAI 释放智能体的无限潜能，让 AI 触手可及。
            </p>
          </div>

          <!-- 右侧按钮组 -->
          <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <UButton
              label="立即使用"
              size="xl"
              variant="ghost"
              color="neutral"
              class="w-full sm:w-auto min-w-[160px] justify-center px-8 py-4 text-lg font-semibold rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            />
            <UButton
              label="开始构建"
              size="xl"
              color="primary"
              class="w-full sm:w-auto min-w-[160px] justify-center px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-200"
              icon="i-heroicons-rocket-launch"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CircleStackIcon,
  ArrowsRightLeftIcon,
  CommandLineIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  PlusIcon,
  RocketLaunchIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

// 类型定义：功能卡片
interface FeatureCard {
  category: string
  tag: string
  title: string
  desc: string
  image: string
}

// 类型定义：核心特性
interface Feature {
  title: string
  desc: string
  icon: any // HeroIcon component type
  video: string
}

// 类型定义：优势
interface Advantage {
  title: string
  desc: string
  icon: any // HeroIcon component type
}

// 类型定义：常见问题
interface Faq {
  question: string
  answer: string
}

// SEO 元数据配置
useSeoMeta({
  title: '必定AI - BuidAI新一代AI一站式创意生产力平台',
  description: '探索AI创作的无限可能！必定AI平台提供Sora2视频、香蕉绘画Nanobanana、AI PPT、艺术二维码等前沿创意工具，结合智能体、知识库与AI对话，实现文档问答、文件管理及一键发布至微信生态。无论是AI绘画、视频生成，还是爆款文章创作与内容总结，我们都能助您高效实现创意构想，让灵感轻松落地'
})

/**
 * 功能卡片数据列表
 * 展示不同场景下的 AI 应用案例
 */
const featureCards: FeatureCard[] = [
  {
    category: 'AI 核心',
    tag: '多模态模型',
    title: '大语言模型',
    desc: '集成全球领先的 LLM 模型，支持 GPT-4o、Claude 3.5、Gemini Pro 等主流模型，提供稳定、高速的 API 调用服务，满足对话、写作、翻译等多种场景需求。',
    image: '/images/大语言模型.jpeg'
  },
  {
    category: '知识管理',
    tag: '高效检索',
    title: 'RAF知识库',
    desc: '构建企业级 RAF 知识库，支持 PDF、Word、Markdown 等多格式文档导入，自动分段与向量化，实现精准的语义检索与问答，让 AI 懂你的业务。',
    image: '/images/知识库.jpg'
  },
  {
    category: '流程自动化',
    tag: '可视化编排',
    title: '工作流编排',
    desc: '强大的可视化 Workflow 编排引擎，通过拖拽即可将大模型、插件、知识库等组件连接起来，构建复杂的业务流程，实现从简单对话到复杂任务的自动化处理。',
    image: '/images/工作流编排.jpg'
  },
  {
    category: '协议标准',
    tag: '模型上下文',
    title: 'MCP服务',
    desc: '全面支持 Model Context Protocol (MCP)，实现模型与数据的无缝连接。标准化的接口协议，让智能体能够安全、高效地访问本地文件、数据库及第三方 API 服务。',
    image: '/images/MCP服务.jpeg'
  }
]

/**
 * 核心特性数据列表
 * 介绍平台的核心功能模块
 */
const features: Feature[] = [
  {
    title: '全栈赋能',
    desc: '最新的大模型，丰富的资源库，提供 AI Agent 开发所需的全部核心技术。',
    icon: CubeIcon,
    video: 'https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_5947ecf038587e21912f7a7f0c29723a.mp4'
  },
  {
    title: '开箱即用',
    desc: '健全的应用模板和编排框架，用最低的成本开发最专业的 AI Agent。',
    icon: WrenchScrewdriverIcon,
    video: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/7a2291113013f873_1749556611819.mp4'
  },
  {
    title: '安全可信',
    desc: '覆盖 Agent 开发全生命周期安全保障，满足企业级安全需求。',
    icon: PuzzlePieceIcon,
    video: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d2dabbdbb1d7fbae_1765444399839.mp4'
  },
  {
    title: '全网发布',
    desc: '点击一下，全平台上线！APP、网页、小程序统统搞定。',
    icon: RocketLaunchIcon,
    video: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58508b9898be7111_1749556627094.mp4'
  }
]

/**
 * 平台优势数据列表
 * 突出产品核心竞争力
 */
const advantages: Advantage[] = [
  {
    title: '开源优势',
    desc: '坚持开源，代码透明，社区活跃。支持私有化部署，数据更安全。',
    icon: CubeIcon
  },
  {
    title: '独特的 QA 结构',
    desc: '专为 QA 问答优化的数据结构，提高搜索准确率和回复质量。',
    icon: SparklesIcon
  },
  {
    title: '可视化工作流',
    desc: '通过拖拽即可完成 AI 工作流的编排，降低使用门槛，提高效率。',
    icon: ArrowsRightLeftIcon
  },
  {
    title: '无限扩展',
    desc: '基于插件机制，可以轻松接入各类第三方服务，扩展系统能力。',
    icon: PuzzlePieceIcon
  },
  {
    title: '便于调试',
    desc: '提供完整的调试工具，方便开发者快速定位问题，优化 Prompt。',
    icon: WrenchScrewdriverIcon
  },
  {
    title: '支持多种模型',
    desc: '兼容 OpenAI、Azure、Anthropic 等主流大模型，支持本地模型接入。',
    icon: WrenchIcon
  }
]

/**
 * 常见问题数据列表
 */
const faqs: Faq[] = [
  {
    question: '开源版和商业版有什么区别？',
    answer: '开源版遵循 Apache 2.0 协议，您可以免费用于商业项目。商业版提供更专业的技术支持和企业级特性。'
  },
  {
    question: 'BuidAI 私有部署对服务器配置有什么要求？',
    answer: '基础运行建议 2核 4G 内存以上。如果需要运行本地大模型，则需要高性能 GPU 服务器。'
  },
  {
    question: 'BuidAI 可以接入微信/飞书/钉钉吗？',
    answer: '可以。BuidAI 提供了标准的 API 接口，可以方便地接入各类 IM 工具和第三方应用。'
  },
  {
    question: '如何获取 API Key？',
    answer: '在控制台的应用设置中，您可以创建和管理 API Key。请妥善保管您的 Key。'
  }
]

// FAQ 展开/收起状态管理
const activeFaq = ref<number | null>(null)

/**
 * 切换 FAQ 展开状态
 * 使用索引控制当前展开的项，再次点击则收起
 * @param idx - 点击的 FAQ 索引
 */
const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}
</script>

<style scoped>
/* 自定义动画或样式补充 */
</style>
