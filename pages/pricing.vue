<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

interface PricingButton {
  label: string
  to?: string
  variant?: 'solid' | 'outline' | 'subtle' | 'ghost' | 'link' | 'soft'
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  click?: () => void
}

interface PricingPlan {
  title: string
  description?: string
  price: string
  billingCycle?: string
  features?: string[]
  button?: PricingButton
  highlight?: boolean
  badge?: string
}

// 状态管理
const activeTab = ref('cloud')
const isYearly = ref(false)

// 静态数据
const tabs = [
  { name: '云服务', key: 'cloud' },
  { name: '私有部署', key: 'self' }
]

const featuresData = {
  free: [
    '100 AI 积分',
    '600 组知识库索引',
    '1 个团队成员',
    '3 个知识库',
    '30 天对话记录保留',
    '30 QPM'
  ],
  basic: [
    '4000 AI 积分',
    '6000 组知识库索引',
    '5 个团队成员',
    '50 个 Agent',
    '30 个知识库',
    '180 天对话记录保留',
    '300 QPM',
    '站点同步最大 500 页',
    '48 小时工单支持响应'
  ],
  premium: [
    '25000 AI 积分',
    '36000 组知识库索引',
    '50 个团队成员',
    '200 个 Agent',
    '100 个知识库',
    '360 天对话记录保留',
    '720 天团队操作日志记录',
    '1500 QPM',
    '站点同步最大 500 页',
    '24 小时工单支持响应',
    '3 个应用备案'
  ],
  custom: [
    '优先深度技术支持',
    '弹性资源配置',
    '安全可控',
    '专属客户经理'
  ],
  selfHosted: [
    '源码交付 / 镜像部署',
    '专属品牌定制',
    '企业级权限管理'
  ]
}

// 价格方案计算
const cloudPlans = computed<PricingPlan[]>(() => [
  {
    title: '免费版',
    price: '¥0',
    description: '核心功能免费试用。30 天未登录，将会清空知识库。',
    features: featuresData.free,
    button: { label: '开始使用', variant: 'soft', color: 'primary' }
  },
  {
    title: '基础版',
    price: `¥${isYearly.value ? 990 : 99}`,
    billingCycle: isYearly.value ? '/年' : '/月',
    description: '可解锁 BuidAI 完整功能',
    features: featuresData.basic,
    button: { label: '升级套餐', variant: 'soft', color: 'primary' }
  },
  {
    title: '高级版',
    price: `¥${isYearly.value ? 5990 : 599}`,
    billingCycle: isYearly.value ? '/年' : '/月',
    description: '适合企业级的生产工具',
    features: featuresData.premium,
    highlight: true,
    badge: '最受欢迎',
    button: { label: '升级套餐', variant: 'solid', color: 'primary' }
  },
  {
    title: '定制版',
    price: '联系商务',
    description: '助力中大型企业构建核心竞争力',
    features: featuresData.custom,
    button: { label: '联系商务', variant: 'soft', color: 'primary' }
  }
])

const selfHostedPlans: PricingPlan[] = [
  {
    title: '企业私有化部署',
    price: '咨询报价',
    description: '数据安全，专属定制',
    features: featuresData.selfHosted,
    button: { label: '咨询详情', variant: 'solid', color: 'primary' },
    highlight: true
  }
]

/**
 * 根据当前 Tab 计算显示的方案列表
 */
const currentPlans = computed(() => activeTab.value === 'cloud' ? cloudPlans.value : selfHostedPlans)

/**
 * 切换 Tab 并滚动到顶部
 */
const handleTabChange = (key: string) => {
  activeTab.value = key
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

/**
 * 动态网格布局类
 */
const gridClass = computed(() =>
  activeTab.value === 'cloud'
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    : 'grid-cols-1 lg:grid-cols-1 max-w-sm mx-auto'
)

// FAQ 数据
const faqItems = [
  {
    label: '是否切换订阅套餐？',
    content: '套餐使用采用覆盖更新的逻辑。因此，购买新套餐后将立即生效，剩余套餐额度将被清除，请务必谨慎操作。'
  },
  {
    label: '在哪里查看已订阅套餐？',
    content: '在【个人中心 - 套餐详情】中可以查看当前套餐的生效时间和剩余额度。当付费套餐过期后将自动恢复为免费版。'
  },
  {
    label: '什么是AI积分？',
    content: '每次调用AI模型时，将会消耗一定AI积分。具体计算标准参考上方的“AI积分计算标准”。系统会优先采用模型厂商的高级Token计费方式，Token=0.75中文汉字=0.9英文单词。'
  },
  {
    label: 'AI积分过期怎么办？',
    content: '会过期。当前套餐过期后，AI积分将会清零，并重置为新套餐的AI积分。年度套餐的AI积分时长为1年，而不是每个月。'
  },
  {
    label: '知识库存储怎么计算？',
    content: '1条知识库存储等于1条知识库索引。一条分块数据，通常对应多条索引，可以在单个知识库集合中查阅“W组索引”。'
  },
  {
    label: '知识库索引超出删除了么？',
    content: '不会。但知识库索引超出时，无法插入和更新知识库内容。'
  },
  {
    label: '额外资源包可以叠加么？',
    content: '可以的。每次购买的资源包都是独立的，在其有效期内将会叠加使用。AI积分会优先扣除最大过期的资源包。'
  },
  {
    label: '免费版数据会清除么？',
    content: '免费版团队（免费版且未购买额外套餐）连续 30 天未登录系统，系统会自动清除该团队下所有知识库内容。'
  }
]
</script>

<template>
  <div class="py-24 sm:py-32 bg-white dark:bg-gray-950 min-h-screen relative overflow-hidden font-sans">
    <!-- Background Decoration -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base font-semibold leading-7 text-ui-primary uppercase tracking-wide">定价方案</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          选择更适合 <span class="text-ui-primary">你的版本</span>
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          免费使用或升级更高的套餐，满足不同阶段的业务需求
        </p>
      </div>

      <!-- Tabs -->
      <div class="mt-16 flex justify-center">
        <div class="grid grid-cols-2 gap-x-1 rounded-full p-1.5 text-center text-sm font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div
            v-for="tab in tabs"
            :key="tab.key"
            @click="handleTabChange(tab.key)"
            class="cursor-pointer rounded-full px-8 py-2.5 transition-all duration-300 select-none"
            :class="[
              activeTab === tab.key
                ? 'bg-white dark:bg-gray-800 text-ui-primary shadow-sm ring-1 ring-gray-200 dark:ring-gray-700'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            ]"
          >
            {{ tab.name }}
          </div>
        </div>
      </div>

      <!-- Billing Toggle -->
      <div v-show="activeTab === 'cloud'" class="mt-10 flex justify-center transition-opacity duration-300">
        <div class="relative flex items-center">
          <div class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-sm font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm">
            <button
              @click="isYearly = false"
              class="cursor-pointer rounded-full px-6 py-2 transition-all duration-300 select-none outline-none focus:ring-2 focus:ring-primary-500/20"
              :class="[
                !isYearly
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-700'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              ]"
            >
              按月
            </button>
            <button
              @click="isYearly = true"
              class="cursor-pointer rounded-full px-6 py-2 transition-all duration-300 select-none outline-none focus:ring-2 focus:ring-primary-500/20"
              :class="[
                isYearly
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-700'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              ]"
            >
              按年
            </button>
          </div>

          <div class="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-max hidden sm:block">
            <UBadge label="支付10个月，畅享一年！" variant="subtle" color="primary" size="sm" class="rounded-full" />
          </div>
        </div>
      </div>

      <!-- Plans -->
      <div class="mt-16 grid gap-8 lg:gap-8 transition-all duration-500 ease-in-out" :class="gridClass">
        <UCard
          v-for="(plan, index) in currentPlans"
          :key="`${activeTab}-${index}`"
          :ui="{
            root: 'relative flex flex-col overflow-hidden transition-all duration-300 h-full hover:-translate-y-1',
            body: 'flex-1 flex flex-col gap-8 p-8 sm:p-10',
            header: 'px-8 pt-8 pb-0 sm:px-10'
          }"
          :class="[
            'rounded-2xl',
            'bg-white dark:bg-gray-900',
            plan.highlight ? 'ring-2 ring-ui-primary' : 'ring-1 ring-gray-200 dark:ring-gray-800',
            plan.highlight ? 'shadow-xl shadow-primary-500/10' : 'shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50'
          ]"
        >
          <!-- Header Section -->
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                {{ plan.title }}
              </h3>
              <UBadge v-if="plan.badge" :label="plan.badge" variant="subtle" color="primary" class="rounded-full" />
            </div>
            <p v-if="plan.description" class="text-sm leading-6 text-gray-500 dark:text-gray-400 min-h-12">
              {{ plan.description }}
            </p>
          </div>

          <!-- Price Section -->
          <div class="flex items-baseline gap-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {{ plan.price }}
            </span>
            <span v-if="plan.billingCycle" class="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400 truncate">
              {{ plan.billingCycle }}
            </span>
          </div>

          <!-- Features List -->
          <div v-if="plan.features?.length" class="flex-1">
            <ul class="space-y-3">
              <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-ui-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span class="text-sm leading-6 text-gray-600 dark:text-gray-300">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Action Button -->
          <div v-if="plan.button" class="mt-2">
            <UButton
              block
              size="lg"
              :label="plan.button.label"
              :to="plan.button.to"
              :variant="plan.button.variant || (plan.highlight ? 'solid' : 'soft')"
              :color="plan.button.color || 'primary'"
              @click="plan.button.click"
              class="transition-transform active:scale-95"
            />
          </div>
        </UCard>
      </div>

      <!-- FAQ Section -->
      <div class="mt-24 sm:mt-32 lg:mt-40">
        <div class="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              常见问题
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              如果您有其他问题，请随时联系我们的支持团队。
            </p>
          </div>
          <div class="lg:col-span-7">
            <UAccordion
              :items="faqItems"
              color="gray"
              variant="soft"
              size="lg"
              :ui="{
                wrapper: 'space-y-4',
                item: 'mb-0 rounded-xl px-6 py-4 text-lg font-medium text-gray-900 dark:text-white',
                default: {
                  class: 'px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed'
                }
              }"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
