<template>
  <div class="min-h-screen bg-[#F3F4F6] font-sans selection:bg-[#6E58FF] selection:text-white">
    <!-- 1. Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden text-center">
      <!-- Background Elements -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#6E58FF] opacity-[0.08] blur-[120px] rounded-full"></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <!-- Badge -->
        <div class="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow-sm">
           <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E58FF] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#6E58FF]"></span>
          </span>
          <span class="text-xs font-medium text-gray-600">必定AI旗下 AI 平台</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0F0F12] tracking-tight leading-[1.15] mb-6">
          必定AI你的 <span class="text-[#6E58FF]">AI 办公空间</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg text-[#5A5E6A] max-w-2xl mx-auto mb-10 leading-relaxed">
          必定AI旗下新一代 AI 办公平台，让创作与协作更高效
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row items-center gap-4 mb-24">
          <button class="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6E58FF] to-[#7A42FF] text-white font-semibold text-[15px] shadow-[0_8px_20px_-4px_rgba(110,88,255,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(110,88,255,0.5)] hover:-translate-y-0.5 transition-all duration-300">
            立即体验
            <span class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          </button>

          <div class="relative group">
            <button class="px-8 py-3.5 rounded-full bg-white border border-[#E5E6F0] text-[#1D2129] font-medium text-[15px] hover:border-[#6E58FF] hover:text-[#6E58FF] hover:bg-[#F9F8FF] transition-all duration-300 flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L12 3M12 16L7 11M12 16L17 11M6 21H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              下载客户端
            </button>
            <!-- QR Code Tooltip -->
             <div class="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-32 p-3 bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 pointer-events-none">
                <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                <div class="w-full aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden relative">
                   <!-- QR Placeholder -->
                   <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR" class="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div class="text-[10px] text-center text-gray-500">扫码下载 App</div>
             </div>
          </div>
        </div>

        <!-- 装饰性层叠卡片（轮播占位） -->
        <div class="relative w-full max-w-5xl h-[260px] md:h-[340px] perspective-1000">
          <div class="absolute inset-x-0 bottom-0 h-full flex justify-center items-end">
             <!-- Center Card -->
             <div class="w-[280px] md:w-[360px] h-[300px] md:h-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-30 transform hover:-translate-y-4 transition-transform duration-500 flex flex-col overflow-hidden">
                <div class="h-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col justify-center items-center text-center">
                   <div class="text-4xl font-serif italic mb-2">Portfolio</div>
                   <div class="text-sm text-gray-500">智能作品集生成</div>
                </div>
                <div class="h-1/2 p-6 flex flex-col justify-between">
                   <div class="space-y-2">
                      <div class="h-2 w-2/3 bg-gray-100 rounded"></div>
                      <div class="h-2 w-full bg-gray-50 rounded"></div>
                   </div>
                   <button class="w-full py-2 bg-gray-50 rounded-lg text-xs text-gray-600 font-medium">查看详情</button>
                </div>
             </div>
             <!-- Left Card (Inner) -->
             <div class="absolute left-1/2 -translate-x-[110%] bottom-0 w-[240px] md:w-[320px] h-[260px] md:h-[340px] bg-[#1E1E2E] rounded-2xl shadow-xl z-20 transform rotate-[-6deg] hover:rotate-[-8deg] transition-transform duration-500 overflow-hidden border border-gray-800">
                 <div class="p-6 h-full flex flex-col text-white">
                    <div class="text-4xl font-bold tracking-tighter text-[#6E58FF] mb-2">CODE</div>
                    <div class="text-xl font-light opacity-80">EVENT 2025</div>
                    <div class="mt-auto h-px w-full bg-gray-700"></div>
                 </div>
             </div>
             <!-- Left Card (Outer) - New -->
             <div class="absolute left-1/2 -translate-x-[180%] bottom-4 w-[220px] md:w-[300px] h-[240px] md:h-[320px] bg-white rounded-2xl shadow-lg z-10 transform rotate-[-12deg] hover:rotate-[-14deg] transition-transform duration-500 border border-gray-200 overflow-hidden hidden sm:block">
                 <div class="p-5 h-full relative bg-gray-50">
                    <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div class="space-y-3 mt-8">
                       <div class="h-2 w-3/4 bg-gray-200 rounded"></div>
                       <div class="h-2 w-1/2 bg-gray-200 rounded"></div>
                       <div class="h-2 w-full bg-gray-200 rounded"></div>
                    </div>
                    <div class="absolute bottom-5 left-5 right-5 h-24 bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex items-center gap-3">
                       <div class="w-10 h-10 rounded-full bg-purple-100 shrink-0"></div>
                       <div class="flex-1 space-y-1">
                          <div class="h-1.5 w-2/3 bg-gray-200 rounded"></div>
                          <div class="h-1.5 w-1/3 bg-gray-100 rounded"></div>
                       </div>
                    </div>
                 </div>
             </div>

             <!-- Right Card (Inner) -->
             <div class="absolute left-1/2 translate-x-[10%] bottom-0 w-[240px] md:w-[320px] h-[260px] md:h-[340px] bg-gradient-to-br from-[#E0E7FF] to-[#F3E8FF] rounded-2xl shadow-xl z-20 transform rotate-[6deg] hover:rotate-[8deg] transition-transform duration-500 border border-white/50">
                 <div class="p-6 h-full relative">
                    <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <div class="relative z-10 text-3xl font-script text-indigo-900">f(x)</div>
                 </div>
             </div>
             <!-- Right Card (Outer) - New -->
             <div class="absolute left-1/2 translate-x-[80%] bottom-4 w-[220px] md:w-[300px] h-[240px] md:h-[320px] bg-[#0F0F12] rounded-2xl shadow-lg z-10 transform rotate-[12deg] hover:rotate-[14deg] transition-transform duration-500 border border-gray-800 overflow-hidden hidden sm:block">
                 <div class="p-5 h-full flex flex-col">
                    <div class="flex items-center justify-between mb-6">
                       <div class="w-8 h-8 rounded-lg bg-gray-800"></div>
                       <div class="text-xs text-gray-500">AI Analysis</div>
                    </div>
                    <div class="flex-1 flex items-end justify-between gap-2 px-2">
                       <div class="w-1/5 h-[40%] bg-purple-900/50 rounded-t"></div>
                       <div class="w-1/5 h-[70%] bg-purple-800/50 rounded-t"></div>
                       <div class="w-1/5 h-[50%] bg-purple-700/50 rounded-t"></div>
                       <div class="w-1/5 h-[90%] bg-[#6E58FF] rounded-t shadow-[0_0_15px_rgba(110,88,255,0.5)]"></div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Feature Grid Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-[#0F0F12] mb-8">全能 AI 办公助手，释放你的创作生产力</h2>

          <!-- Tabs -->
          <div class="inline-flex items-center p-1.5 bg-[#F5F6FA] rounded-full">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="currentTab = tab"
              :class="[
                'px-6 py-2 rounded-full text-sm font-medium transition-all duration-200',
                currentTab === tab
                  ? 'bg-white text-[#6E58FF] shadow-sm'
                  : 'text-[#5A5E6A] hover:text-[#0F0F12]'
              ]"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, index) in filteredFeatures" :key="index" class="group relative bg-[#F9FAFB] rounded-2xl overflow-hidden border border-[#EAECF2] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#6E58FF]/30 transition-all duration-300 h-[280px] cursor-pointer">
             <div class="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-[#0F0F12] shadow-sm border border-gray-100">
                {{ item.tag }}
             </div>
             <div class="h-full w-full flex flex-col">
                <!-- Card Visual Content -->
                <div class="flex-1 relative overflow-hidden flex items-center justify-center p-6" :class="item.bgClass">
                   <component :is="item.icon" v-if="item.icon" class="w-16 h-16 text-[#6E58FF] opacity-80" />
                   <div v-if="item.customVisual" v-html="item.customVisual"></div>
                </div>
                <!-- Card Footer Info -->
                <div class="h-16 bg-white border-t border-gray-100 px-5 flex items-center justify-between">
                   <span class="font-bold text-[#0F0F12]">{{ item.title }}</span>
                   <span class="w-8 h-8 rounded-full bg-[#F5F6FA] flex items-center justify-center group-hover:bg-[#6E58FF] group-hover:text-white transition-colors">
                      <ArrowRightIcon class="w-4 h-4" />
                   </span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 快速开始区域 -->
    <section class="py-20 bg-[#F7F8FC]">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-24">

          <!-- Left Content -->
          <div class="lg:w-1/3 flex flex-col justify-start items-start text-left pt-4">
            <h2 class="text-3xl md:text-4xl font-bold text-[#0F0F12] mb-4">快速入门</h2>
            <p class="text-lg text-[#5A5E6A] mb-8">AI 职场神队友，告别无效加班！</p>
            <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6E58FF] text-white font-medium hover:bg-[#5A43FF] transition-colors">
              探索更多
              <ArrowRightIcon class="w-4 h-4" />
            </button>
          </div>

          <!-- Right Grid -->
          <div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div v-for="(card, i) in quickStartCards" :key="i" class="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 flex flex-col items-start gap-8 group border border-transparent h-full min-h-[240px]">
                <div class="inline-flex items-center justify-center border border-transparent py-0.5 font-medium w-fit whitespace-nowrap shrink-0 px-4 rounded-full bg-[#B5BFFF4D] text-[16px] text-[#333333]">
                   {{ card.badge }}
                </div>
                <p class="text-lg font-medium text-[#0F0F12] leading-relaxed flex-1">
                   {{ card.desc }}
                </p>
                <button class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#6E58FF] group-hover:border-[#6E58FF] group-hover:text-white transition-all">
                   <ArrowRightIcon class="w-6 h-6" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. Zero Threshold / One-stop Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
           <h2 class="text-3xl font-bold text-[#0F0F12]">0门槛，一站式 AI 办公空间</h2>
        </div>

        <div class="space-y-24">
           <!-- Feature 1: Left Text, Right Image -->
           <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div class="lg:w-1/2 space-y-6">
                 <div class="inline-flex items-center gap-2 text-[#6E58FF] bg-[#F4F0FF] px-3 py-1 rounded-full text-xs font-bold">
                    <SparklesIcon class="w-4 h-4" />
                    AI 辅助写作
                 </div>
                 <h3 class="text-3xl font-bold text-[#0F0F12]">和子文档 — <br/>让创作如虎添翼</h3>
                 <p class="text-lg text-[#5A5E6A] leading-relaxed">
                    内置强大的 AI 写作助手，支持文章续写、润色、翻译及摘要生成。无论是工作报告还是创意文案，都能一键搞定。
                 </p>
                 <div class="flex gap-4 pt-4">
                    <button class="px-6 py-2.5 bg-[#6E58FF] text-white rounded-full text-sm font-semibold hover:bg-[#5A43FF] transition-colors shadow-lg shadow-[#6E58FF]/20">
                       创建文档
                    </button>
                    <button class="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50">
                       了解更多
                    </button>
                 </div>
              </div>
              <div class="lg:w-1/2 relative">
                 <div class="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-50 rounded-3xl -z-10 blur-xl opacity-60"></div>
                 <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                    <img src="/sell-point-1.png" alt="AI Writing" class="rounded-xl w-full h-auto" />
                 </div>
              </div>
           </div>

           <!-- Feature 2: Right Text, Left Image -->
           <div class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div class="lg:w-1/2 space-y-6">
                 <div class="inline-flex items-center gap-2 text-[#6E58FF] bg-[#F4F0FF] px-3 py-1 rounded-full text-xs font-bold">
                    <PhotoIcon class="w-4 h-4" />
                    智能图像处理
                 </div>
                 <h3 class="text-3xl font-bold text-[#0F0F12]">一键生图，<br/>创意不再受限</h3>
                 <p class="text-lg text-[#5A5E6A] leading-relaxed">
                    输入文字描述即可生成高质量图片，支持多种艺术风格。更有智能修图功能，无损放大、去背景、画质增强一气呵成。
                 </p>
                 <button class="px-6 py-2.5 bg-[#6E58FF] text-white rounded-full text-sm font-semibold hover:bg-[#5A43FF] transition-colors shadow-lg shadow-[#6E58FF]/20">
                    立即体验
                 </button>
              </div>
              <div class="lg:w-1/2 relative">
                 <div class="absolute -inset-4 bg-gradient-to-l from-pink-100 to-purple-50 rounded-3xl -z-10 blur-xl opacity-60"></div>
                 <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                    <img src="/sell-point-2.png" alt="Image Gen" class="rounded-xl w-full h-auto" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- 5. FAQ Section -->
    <section class="py-24 bg-[#F7F8FC]">
       <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            <!-- Left: Title -->
            <div class="lg:w-1/3">
              <h1 class="text-3xl md:text-4xl font-bold text-[#0F0F12]">常见问题</h1>
            </div>

            <!-- 右侧：折叠面板列表 -->
            <div class="lg:w-2/3 w-full space-y-4">
               <div v-for="(faq, i) in faqs" :key="i" class="bg-white rounded-2xl transition-all duration-300 overflow-hidden">
                  <button @click="faq.open = !faq.open" class="w-full flex items-start justify-between p-6 text-left">
                     <span class="text-lg font-medium text-[#0F0F12] pr-8">{{ faq.question }}</span>
                     <ChevronDownIcon class="w-5 h-5 text-gray-400 shrink-0 mt-1 transition-transform duration-300" :class="{ 'rotate-180': faq.open }" />
                  </button>
                  <div
                    class="grid transition-all duration-300 ease-in-out"
                    :class="faq.open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                  >
                    <div class="overflow-hidden">
                      <div class="px-6 pb-6 text-[15px] text-[#5A5E6A] leading-relaxed">
                         {{ faq.answer }}
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
       </div>
    </section>

    <!-- 6. Footer Callout -->
    <section class="relative bg-[#121318] overflow-hidden">
       <!-- Full Width Bottom Image -->
       <div class="absolute inset-x-0 bottom-0 z-0">
          <img src="/foot.png" alt="" class="w-full object-cover" />
       </div>

       <div class="relative z-10 container mx-auto px-4 py-24">
          <div class="flex flex-col items-start text-left max-w-3xl">
             <h2 class="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               必定AI你的 AI 办公空间
             </h2>
             <div class="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                <button class="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6E58FF] text-white font-bold text-[16px] hover:bg-[#5A43FF] transition-colors shadow-xl">
                   立即体验
                </button>
                <button class="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1D2129] font-medium text-[16px] hover:bg-gray-100 transition-colors">
                   下载客户端
                </button>
             </div>
          </div>
       </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  ArrowRightIcon,
  SparklesIcon,
  PhotoIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'default'
})

// Types
interface FeatureItem {
  title: string;
  tag: string;
  category: string;
  icon?: any;
  bgClass?: string;
  customVisual?: string;
}

// State
const currentTab = ref('全部')
const tabs = ['全部', '写作', '设计', '编程', '效率']

/**
 * 核心功能数据列表
 * 包含：作品集、函数图像、代码事件、抽象图形等
 */
const allFeatures: FeatureItem[] = [
  {
    title: '智能作品集',
    tag: 'Portfolio',
    category: '设计',
    bgClass: 'bg-gradient-to-br from-purple-50 to-white',
    customVisual: '<div class="text-3xl font-serif italic text-gray-800">Portfolio</div>'
  },
  {
    title: '数学函数可视化',
    tag: 'Math',
    category: '效率',
    bgClass: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    customVisual: '<div class="text-2xl font-script text-blue-600">f(x) = sin(x)</div>'
  },
  {
    title: '代码活动 2025',
    tag: 'Event',
    category: '编程',
    bgClass: 'bg-[#1E1E2E]',
    customVisual: '<div class="text-2xl font-bold text-white tracking-widest">CODE<br/><span class="text-purple-400">2025</span></div>'
  },
  {
    title: '数据可视化',
    tag: 'Chart',
    category: '效率',
    bgClass: 'bg-white',
    customVisual: '<div class="w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center"><div class="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div></div>'
  },
  {
    title: '灵感捕捉',
    tag: 'Idea',
    category: '写作',
    bgClass: 'bg-gray-100',
    customVisual: '<div class="w-full h-full bg-[url(\'https://placehold.co/300x200/e2e8f0/94a3b8?text=Writing\')] bg-cover bg-center opacity-80"></div>'
  },
  {
    title: '抽象设计',
    tag: 'Art',
    category: '设计',
    bgClass: 'bg-white',
    customVisual: '<div class="w-24 h-24 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full blur-xl opacity-50"></div>'
  }
]

/**
 * 根据当前 Tab 过滤功能列表
 * @returns {FeatureItem[]} 过滤后的列表
 */
const filteredFeatures = computed(() => {
  if (currentTab.value === '全部') return allFeatures
  return allFeatures.filter(f => f.category === currentTab.value)
})

// Quick Start Cards
const quickStartCards = [
  { badge: '在校学生', desc: '“求学求职社交都能用，不靠模板不撞款”' },
  { badge: '教育从业者', desc: '“教学科研办公都能用 AI 从入门到精通”' },
  { badge: '市场运营&电商', desc: '“增长才是硬道理，分析不再是难题”' },
  { badge: '自媒体运营', desc: '“热点创作又快又多，智能排版一文多发”' }
]

// FAQ Data
const faqs = ref([
  { question: '怎么下载导出必定AIAI生成的PPT、文档、表格、设计？', answer: '必定AIAI生成好后，你可以直接选择导出下载，支持常见的PPTX、DOCX、PDF、XLSX、JPG、PNG格式。', open: true },
  { question: '必定AI是免费使用吗？', answer: '必定AI提供免费的基础版，包含大部分核心功能。对于高级功能和更多存储空间，我们提供灵活的付费订阅方案。', open: false },
  { question: '必定AI可以把PDF/图片/网站/报告/论文内容改成PPT吗？', answer: '可以。您可以上传 PDF、图片或输入网址，AI 会自动提取关键信息并生成结构清晰、设计精美的 PPT 演示文稿。', open: false },
  { question: '我没有设计基础，可以让必定AIAI做设计吗？', answer: '完全没问题。必定AI内置了专业的设计引擎，您只需输入文字描述，AI 就能自动生成海报、Banner、配图等高质量设计作品。', open: false },
  { question: '必定AIAI可以帮我创作自媒体内容吗？', answer: '当然。我们提供专门的自媒体创作工具，支持从选题策划、文案生成到排版配图的全流程辅助，助您高效产出爆款内容。', open: false }
])

</script>

<style scoped>
/* Custom Font Families if not in Tailwind config */
.font-serif {
  font-family: 'Georgia', 'Cambria', 'Times New Roman', serif;
}
.font-script {
  font-family: 'Brush Script MT', cursive;
}

/* Variables for potential reuse */
:root {
  --primary: #6E58FF;
  --primary-hover: #5A43FF;
  --text-main: #0F0F12;
  --bg-page: #F3F4F6;
}

/* Animation Utilities */
.perspective-1000 {
  perspective: 1000px;
}
</style>
