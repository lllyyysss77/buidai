<template>
  <!-- AI应用系统展示组件 -->
  <section class="bg-white">
    <!-- 主内容区域 -->
    <div class="container mx-auto px-4 py-16 md:py-20">
      <!-- 标题 -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-neutral-900 md:text-3xl">
          使用智言AI可以<span class="text-indigo-600">积木式轻松搭建</span>如下AI应用系统
        </h2>
        <p class="mt-3 text-neutral-500">智言AI同样致力于在AI时代打造备受青睐的、可快速搭建AI应用系统的开源解决方案</p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 左侧展示卡片 -->
        <div class="md:col-span-2 lg:col-span-2 lg:row-span-3 bg-neutral-50 rounded-2xl overflow-hidden flex flex-col border border-neutral-300">
          <!-- 图片区域 -->
          <div class="relative w-full bg-white p-4">
            <div class="relative w-full overflow-hidden rounded-xl border border-neutral-300" style="aspect-ratio: 16/5.5;">
              <!-- 预加载下一张图片 -->
              <img
                v-for="system in systemsList"
                :key="`preload-${system.id}`"
                :src="system.demoImage"
                :alt="system.name"
                class="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
                loading="eager"
              />
              <!-- 当前显示图片 -->
              <img
                :src="currentSystem?.demoImage || '/images/CtaSection.jpg'"
                :alt="currentSystem?.name"
                loading="eager"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out rounded-xl"
                :class="isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'"
              />
            </div>
          </div>
          
          <!-- 信息栏 -->
          <div class="px-5 py-3 border-t border-neutral-200 flex items-center justify-between bg-white">
            <h3 class="font-semibold text-neutral-900">{{ currentSystem?.name }}</h3>
            <!-- 圆点指示器 -->
            <div class="flex items-center gap-1.5">
              <button
                v-for="(system, idx) in systemsList"
                :key="`dot-${system.id}`"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="activeIndex === idx
                  ? 'bg-indigo-500 w-5'
                  : 'bg-neutral-300 hover:bg-neutral-400'"
                :aria-label="`切换到 ${system.name}`"
                @click="selectSystem(idx)"
                @mouseenter="pauseAutoPlay"
                @mouseleave="resumeAutoPlay"
              />
            </div>
          </div>
          
          <!-- 进度条 - 使用 CSS 动画替代 JS 计算 -->
          <div class="h-1 bg-neutral-200 relative overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 absolute left-0 top-0"
              :class="{ 'progress-bar': !isPaused && !isTransitioning }"
              :style="{ width: isPaused || isTransitioning ? `${progress}%` : '100%' }"
            />
          </div>
        </div>

        <!-- 右侧列表 -->
        <div
          v-for="(system, index) in systemsList"
          :key="system.id"
          class="px-4 py-5 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-center"
          :class="activeIndex === index 
            ? 'border-indigo-300 bg-indigo-50/60' 
            : 'border-neutral-300 hover:border-indigo-300 bg-white'"
          @click="selectSystem(index)"
          @mouseenter="pauseAutoPlay"
          @mouseleave="resumeAutoPlay"
        >
          <div class="flex items-start gap-3">
            <div 
              class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
              :class="activeIndex === index 
                ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md' 
                : 'bg-neutral-100 text-neutral-500'"
            >
              <component :is="system.icon" class="w-5 h-5"/>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-sm leading-tight transition-colors duration-300" :class="activeIndex === index ? 'text-indigo-600' : 'text-neutral-800'">
                {{ system.name }}
              </h4>
              <p class="text-xs text-neutral-500 line-clamp-2 mt-1 leading-relaxed">{{ system.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import type { Component } from 'vue'
import {
  Palette, Bot, MessageCircleCode, Lightbulb, BookOpenText,
  School, ChevronsLeftRightEllipsis, BadgeCheck, ShoppingCart,
  Map, FileText, HeartPulse
} from 'lucide-vue-next'

// 类型定义
export interface AIApplicationSystem {
  id: number | string
  name: string
  description: string
  icon: Component
  demoImage: string
}

interface Props {
  systems?: AIApplicationSystem[]
  autoPlayInterval?: number
  autoPlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  systems: () => [],
  autoPlayInterval: 4000,
  autoPlay: true
})

// 默认数据
const defaultSystems: AIApplicationSystem[] = [
  { id: 1, name: 'AI聊天绘画系统', description: '可快速搭建集成全球所有顶级大语言模型并且兼容主流AIGC图片模型，具备智能对话，图片生成，用户管理，算力计费，会员订阅等模块的AI应用系统', icon: Palette, demoImage: '/images/Modelbackground.png' },
  { id: 2, name: '企业智能体系统', description: '可快速搭建企业级智能体，支持业务流程自动化、数据分析汇总、决策辅助，可对接企业现有系统，扩展权限分级管理，提升企业运营效率的AI应用系统', icon: Bot, demoImage: '/images/Modelbackground.png' },
  { id: 3, name: '企业AI客服系统', description: '可快速搭建集成多轮对话模型，支持7*24小时智能知识库应答、常见问题解答，可扩展工单流转与客户画像管理能力，降低企业客服运营成本的AI应用系统', icon: MessageCircleCode, demoImage: '/images/buidai-1.webp' },
  { id: 4, name: 'AI漫剧创意系统', description: '可快速搭建支持剧本智能创作、角色形象生成、漫剧素材库管理，适配分镜设计与台词优化，显著降低漫剧创作门槛，适配个人创作者与工作室的AI应用系统', icon: Lightbulb, demoImage: '/images/buidai-2.webp' },
  { id: 5, name: 'AI论文学术系统', description: '可快速搭建提供文献检索、论文框架构建、查重辅助与格式校对功能，集成学术大模型答疑和参考文献管理，助力科研人员提升论文撰写效率的AI应用系统', icon: BookOpenText, demoImage: '/images/buidai-3.webp' },
  { id: 6, name: 'AI校园助手系统', description: '可快速搭建包含校园信息查询、选课咨询、成绩查询、校园导航等AI智能体功能，提升校园管理与服务效率的AI应用系统', icon: School, demoImage: '/images/buidai-4.webp' },
  { id: 7, name: '智能体在线实训系统', description: '支持智能体开发实训、大模型对话操练、知识库内容清洗', icon: ChevronsLeftRightEllipsis, demoImage: '/images/buidai-4.webp' },
  { id: 8, name: 'AI工业质检辅助系统', description: '集成高精度图像识别模型，支持多品类产品缺陷检测', icon: BadgeCheck, demoImage: '/images/buidai-5.webp' },
  { id: 9, name: 'AI电商素材系统', description: '支持商品文案智能生成、主图/详情图多风格AIGC创作', icon: ShoppingCart, demoImage: '/images/buidai-6.webp' },
  { id: 10, name: 'AI文旅导览系统', description: '提供多语言数字人语音导览、景点深度讲解、行程规划', icon: Map, demoImage: '/images/buidai-7.webp' },
  { id: 11, name: 'AI法律文书系统', description: '支持多类型文书起草、法律条文检索、合规性审核', icon: FileText, demoImage: '/images/Modelbackground.png' },
  { id: 12, name: 'AI医疗咨询系统', description: '提供权威健康知识科普、症状问询与风险分级、就医建议', icon: HeartPulse, demoImage: '/images/Modelbackground.png' }
]

// 状态
const systemsList = computed(() => props.systems.length > 0 ? props.systems : defaultSystems)
const activeIndex = ref(0)
const progress = ref(0)
const isTransitioning = ref(false)
const isPaused = ref(false)

let autoPlayTimer: ReturnType<typeof setTimeout> | null = null
let progressStartTime = 0
let progressRafId: number | null = null

// 计算属性
const currentSystem = computed(() => systemsList.value[activeIndex.value])

// 方法
const selectSystem = (index: number) => {
  if (index < 0 || index >= systemsList.value.length || index === activeIndex.value) {
    return
  }

  isTransitioning.value = true
  progress.value = 0

  // 使用 requestAnimationFrame 确保动画流畅
  requestAnimationFrame(() => {
    activeIndex.value = index

    // 等待过渡动画完成
    setTimeout(() => {
      isTransitioning.value = false
      resetAutoPlay()
    }, 500)
  })
}

const pauseAutoPlay = () => { 
  isPaused.value = true 
  cancelProgressAnimation()
}

const resumeAutoPlay = () => { 
  isPaused.value = false
  resetAutoPlay()
}

// 使用 requestAnimationFrame 替代 setInterval 实现更流畅的进度条
const startProgressAnimation = () => {
  if (!props.autoPlay) {
    return
  }

  progressStartTime = performance.now()
  const duration = props.autoPlayInterval

  const animate = (currentTime: number) => {
    if (isPaused.value || isTransitioning.value) {
      progressRafId = requestAnimationFrame(animate)
      return
    }

    const elapsed = currentTime - progressStartTime
    progress.value = Math.min((elapsed / duration) * 100, 100)

    if (elapsed < duration) {
      progressRafId = requestAnimationFrame(animate)
    }
  }

  progressRafId = requestAnimationFrame(animate)
}

const cancelProgressAnimation = () => {
  if (progressRafId) {
    cancelAnimationFrame(progressRafId)
    progressRafId = null
  }
}

// 自动播放 - 使用单个定时器管理
const startAutoPlay = () => {
  if (!props.autoPlay) {
    return
  }

  startProgressAnimation()

  autoPlayTimer = setTimeout(() => {
    if (!isPaused.value) {
      const nextIndex = (activeIndex.value + 1) % systemsList.value.length
      selectSystem(nextIndex)
    }
  }, props.autoPlayInterval)
}

const stopAutoPlay = () => {
  cancelProgressAnimation()
  if (autoPlayTimer) {
    clearTimeout(autoPlayTimer)
    autoPlayTimer = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  progress.value = 0
  startAutoPlay()
}

// 监听 activeIndex 变化，自动重置自动播放
watch(activeIndex, () => {
  resetAutoPlay()
})

onMounted(() => {
  // 预加载所有图片
  systemsList.value.forEach(system => {
    const img = new Image()
    img.src = system.demoImage
  })
  
  startAutoPlay()
})

onUnmounted(() => stopAutoPlay())
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* CSS 进度条动画 */
.progress-bar {
  animation: progress linear;
  animation-duration: v-bind('`${autoPlayInterval}ms`');
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* 优化滚动性能 */
@media (prefers-reduced-motion: no-preference) {
  .transition-all {
    will-change: transform, opacity;
  }
}
</style>
