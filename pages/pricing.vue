<script setup lang="ts">
/**
 * 定价页面组件
 * 展示不同等级的订阅计划及其功能对比，包含计费周期切换、FAQ 等模块。
 */
import { ref, computed } from 'vue'
import { CheckIcon, XMarkIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'

// 类型定义
interface PricingFeature {
  label: string
  key: string
  tooltip?: string
}

interface PricingPlan {
  title: string
  price: {
    monthly: string
    yearly: string
  }
  description: string
  button: {
    label: string
    variant: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
    color: any
  }
  highlight?: boolean
  badge?: string
  features: Record<string, string | boolean>
}

/**
 * 切换计费周期
 * @param {boolean} value - 是否为年付
 */
const toggleBilling = (value: boolean) => {
  isYearly.value = value
}

// 状态管理
const isYearly = ref(true)

// 功能项定义（左侧Label列）
const featuresList: PricingFeature[] = [
  { label: 'AI积分', key: 'ai_points', tooltip: '用于调用AI模型的积分消耗' },
  { label: '自定义AI大模型', key: 'custom_model', tooltip: '支持接入私有大模型' },
  { label: '应用', key: 'apps' },
  { label: '知识库文件容量', key: 'kb_capacity', tooltip: '上传文件的总大小限制' },
  { label: '知识库条数', key: 'kb_count' },
  { label: '知识库导入限制', key: 'kb_import_limit' },
  { label: '内置数据库行数', key: 'db_rows' },
  { label: '远程数据库', key: 'remote_db' },
  { label: '自定义插件', key: 'plugins' },
  { label: '工作流', key: 'workflows' },
  { label: '数据看板', key: 'dashboard' },
  { label: '渠道接入', key: 'channels' },
  { label: '客户端管理', key: 'client_mgmt' },
  { label: '对话限流配置', key: 'rate_limit' },
  { label: '智能转人工', key: 'human_handoff' },
  { label: '聚合对话管理', key: 'conversation_mgmt' },
  { label: '团队空间', key: 'team_space' },
  { label: '开放 API', key: 'api' },
  { label: '服务', key: 'support' }
]

// 价格方案数据
const plans: PricingPlan[] = [
  {
    title: '基础版',
    price: { monthly: '¥0', yearly: '¥0' },
    description: '先人一步体验 AI 生产力',
    button: { label: '开始使用', variant: 'soft', color: 'primary' },
    features: {
      ai_points: '每日签到',
      custom_model: false,
      apps: '3个',
      kb_capacity: '100M',
      kb_count: '2,000条',
      kb_import_limit: false,
      db_rows: '5千行',
      remote_db: false,
      plugins: '3个',
      workflows: '2个',
      dashboard: false,
      channels: false,
      client_mgmt: false,
      rate_limit: false,
      human_handoff: false,
      conversation_mgmt: false,
      team_space: false,
      api: false, // 基础
      support: '社区支持'
    }
  },
  {
    title: '标准版',
    price: { monthly: '¥268', yearly: '¥2680' },
    description: '适合开发者和小型团队',
    button: { label: '开始使用', variant: 'solid', color: 'primary' },
    highlight: true,
    features: {
      ai_points: '36万',
      custom_model: true,
      apps: '10个',
      kb_capacity: '500M',
      kb_count: '20,000条',
      kb_import_limit: false,
      db_rows: '5万行',
      remote_db: false,
      plugins: '10个',
      workflows: '6个',
      dashboard: true,
      channels: true,
      client_mgmt: true,
      rate_limit: true,
      human_handoff: false,
      conversation_mgmt: false,
      team_space: false,
      api: true, // 高级
      support: '客服支持'
    }
  },
  {
    title: '专业版',
    price: { monthly: '¥998', yearly: '¥9980' },
    description: '专业团队和组织首选',
    button: { label: '开始使用', variant: 'solid', color: 'primary' },
    features: {
      ai_points: '100万',
      custom_model: true,
      apps: '30个',
      kb_capacity: '3G',
      kb_count: '100,000条',
      kb_import_limit: false,
      db_rows: '20万行',
      remote_db: true,
      plugins: '30个',
      workflows: '15个',
      dashboard: true,
      channels: true, // 图标展示
      client_mgmt: true,
      rate_limit: true,
      human_handoff: true,
      conversation_mgmt: true,
      team_space: '10人',
      api: true, // 高级
      support: '专属服务群'
    }
  },
  {
    title: '企业版',
    price: { monthly: '咨询顾问', yearly: '咨询顾问' },
    description: '中大型企业拥抱 AI 的最佳选择',
    button: { label: '立即咨询', variant: 'solid', color: 'primary' },
    features: {
      ai_points: '专业版所有权益', // 特殊处理
      custom_model: true,
      apps: '接入渠道客户管理',
      kb_capacity: '自定义企业LOGO',
      kb_count: '自定义企业应用广场',
      kb_import_limit: '按需定制空间成员数量',
      db_rows: '按需定制功能权益容量',
      remote_db: '最高优先级性能保障',
      plugins: '智能训练调优服务',
      workflows: '可支持私有化部署',
      dashboard: true,
      channels: true,
      client_mgmt: true,
      rate_limit: true,
      human_handoff: true,
      conversation_mgmt: true,
      team_space: true,
      api: true,
      support: '优先性能保障'
    }
  }
]

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
    label: '知识库存储怎么计算？',
    content: '1条知识库存储等于1条知识库索引。一条分块数据，通常对应多条索引，可以在单个知识库集合中查阅“W组索引”。'
  }
]
</script>

<template>
  <div class="py-24 sm:py-32 bg-white dark:bg-gray-950 min-h-screen relative overflow-hidden font-sans">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- 头部 Hero 区域 -->
      <div class="text-center py-12 md:py-20 relative z-10">
        <div class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-ui-primary-weak border border-ui-primary/20">
          <span class="text-xs font-semibold text-ui-primary">定价方案</span>
        </div>
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl mb-6">
          简单的定价 <span class="text-ui-primary">伴随你成长</span>
        </h1>
        <p class="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          选择适合您团队的计划，开启 AI 生产力之旅
        </p>
      </div>

      <!-- 定价卡片区域 -->
      <div class="flex flex-col items-center">
        <!-- 计费周期切换 -->
        <div class="relative flex items-center justify-center mb-12">
          <div class="grid grid-cols-2 gap-x-1 rounded-md p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm">
            <button
              @click="isYearly = false"
              class="cursor-pointer rounded-md px-4 py-2 transition-all duration-300 select-none outline-none focus:ring-2 focus:ring-primary-500/20"
              :class="[
                !isYearly
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-700'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              ]"
            >
              按月付费
            </button>
            <button
              @click="isYearly = true"
              class="cursor-pointer rounded-md px-4 py-2 transition-all duration-300 select-none outline-none focus:ring-2 focus:ring-primary-500/20"
              :class="[
                isYearly
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-700'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              ]"
            >
              按年付费
            </button>
          </div>
          <div class="absolute -top-6 -right-12">
             <span class="text-xs font-semibold text-orange-500 transform rotate-12 inline-block">按年节省25%</span>
          </div>
        </div>

        <!-- 卡片网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl">
          <div
            v-for="(plan, index) in plans"
            :key="plan.title"
            class="flex flex-col rounded-md bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden relative"
            :class="[
              plan.highlight
                ? 'ring-2 ring-ui-primary shadow-xl shadow-primary-500/10 z-10 scale-105 md:scale-100 xl:scale-105'
                : 'ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm hover:shadow-lg'
            ]"
          >
            <!-- 标准版高亮标识 -->
            <div v-if="plan.highlight" class="absolute top-0 inset-x-0 h-1 bg-ui-primary"></div>
            <div v-if="plan.highlight" class="absolute top-4 right-4">
              <span class="inline-flex items-center rounded-md bg-ui-primary-weak px-2.5 py-0.5 text-xs font-medium text-ui-primary border border-ui-primary/20">
                最受欢迎
              </span>
            </div>

            <!-- 卡片头部 -->
            <div class="p-8 text-center border-b border-gray-100 dark:border-gray-800">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ plan.title }}</h3>

              <div class="mt-4 flex items-baseline justify-center gap-x-1">
                <span class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {{ isYearly ? plan.price.yearly : plan.price.monthly }}
                </span>
                <span v-if="plan.price.monthly !== '咨询顾问'" class="text-sm font-semibold leading-6 text-gray-500">
                  /{{ isYearly ? '年' : '月' }}
                </span>
              </div>

              <p class="mt-2 text-sm leading-6 text-gray-500 h-6">{{ plan.description }}</p>

              <div class="mt-6">
                 <UButton
                  block
                  size="lg"
                  :label="plan.button.label"
                  :variant="plan.button.variant"
                  :color="plan.button.color"
                  class="w-full"
                />
              </div>
            </div>

            <!-- 功能列表 -->
            <div class="flex-1 p-8 text-sm leading-6 bg-gray-50/50 dark:bg-gray-800/50">
              <ul role="list" class="space-y-4">
                <!-- 常规功能项 -->
                <li v-for="feature in featuresList" :key="feature.key" class="flex justify-between items-center gap-x-2">
                  <div class="flex items-center gap-1 min-w-0">
                    <span class="text-gray-500 dark:text-gray-400 truncate">{{ feature.label }}</span>
                    <QuestionMarkCircleIcon v-if="feature.tooltip" class="h-4 w-4 text-gray-400 cursor-help" :title="feature.tooltip" />
                  </div>

                  <div class="text-right shrink-0">
                    <!-- 企业版特殊内容处理 -->
                    <template v-if="index === 3">
                      <span class="font-medium text-gray-900 dark:text-white">{{ plan.features[feature.key] === true ? '支持' : (plan.features[feature.key] || '定制') }}</span>
                    </template>
                    <!-- 普通版本内容展示 -->
                    <template v-else>
                      <template v-if="typeof plan.features[feature.key] === 'string'">
                        <span class="font-medium text-gray-900 dark:text-white">{{ plan.features[feature.key] }}</span>
                      </template>
                      <template v-else-if="plan.features[feature.key] === true">
                        <CheckIcon class="h-5 w-5 text-green-500" />
                      </template>
                      <template v-else>
                        <XMarkIcon class="h-5 w-5 text-gray-300 dark:text-gray-600" />
                      </template>
                    </template>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 跑马灯展示 -->
      <div class="mt-24 sm:mt-32">
        <UMarquee :overlay="false" class="max-w-4xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <UIcon name="i-simple-icons-github" class="size-10 shrink-0 mx-8" />
          <UIcon name="i-simple-icons-discord" class="size-10 shrink-0 mx-8" />
          <UIcon name="i-simple-icons-x" class="size-10 shrink-0 mx-8" />
          <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0 mx-8" />
          <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0 mx-8" />
          <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0 mx-8" />
        </UMarquee>
      </div>

      <!-- 常见问题区域 -->
      <div class="mt-24 sm:mt-32 max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <!-- 左侧标题与描述 -->
          <div class="lg:col-span-1">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">常见问题</h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
              如果您有其他疑问或需要定制化服务，请随时联系我们的客服团队。
            </p>
            <div class="mt-8">
              <UButton
                label="联系我们"
                variant="link"
                color="primary"
                icon="i-heroicons-envelope"
                class="p-0 font-semibold"
              />
            </div>
          </div>

          <!-- 右侧手风琴列表 -->
          <div class="lg:col-span-2">
            <UAccordion
              :items="faqItems"
              :ui="{
                root: 'space-y-4',
                item: 'mb-0 rounded-md px-6 py-4 text-base font-medium text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow',
                content: 'px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed'
              }"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
