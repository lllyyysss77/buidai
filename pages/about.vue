<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative py-24 bg-black overflow-hidden">
      <!-- Background Gradients -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          关于 <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">BuidAI</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          赋能每一个团队构建智能未来，让 AI 应用开发变得简单、高效、触手可及。
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              我们的使命
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              打破技术壁垒，<br />释放 AI 的无限潜能
            </h2>
            <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                在人工智能飞速发展的今天，我们看到无数令人惊叹的创意因为技术门槛而被搁置。BuidAI 的诞生，就是为了改变这一现状。
              </p>
              <p>
                我们相信，AI 不应仅是少数技术专家的特权，而应成为每一个开发者、每一个企业手中的利器。通过提供全栈式的 AI 开发平台，我们致力于让复杂的模型训练、部署和应用集成变得像搭积木一样简单。
              </p>
            </div>
          </div>
          <div class="lg:w-1/2 relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-xl">
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <RocketLaunchIcon class="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">快速落地</h3>
                  <p class="text-sm text-gray-500">从想法到产品，缩短开发周期</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <UserGroupIcon class="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">团队协作</h3>
                  <p class="text-sm text-gray-500">多角色协同，提升交付效率</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <CommandLineIcon class="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">开发者友好</h3>
                  <p class="text-sm text-gray-500">API First，灵活扩展与集成</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <HeartIcon class="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">开源共建</h3>
                  <p class="text-sm text-gray-500">拥抱开源社区，共同成长</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">核心价值观</h2>
          <p class="text-gray-500 text-lg max-w-2xl mx-auto">
            这些原则指引着我们的产品设计和团队发展
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(value, index) in values" :key="index" class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <component :is="value.icon" class="w-10 h-10 text-primary-600 mb-6" />
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-white border-t border-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="(stat, index) in stats" :key="index">
            <div class="text-4xl font-bold text-gray-900 mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-500 uppercase tracking-wide">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-black relative overflow-hidden">
       <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
       <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
         <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
           准备好开始构建了吗？
         </h2>
         <div class="flex flex-col sm:flex-row justify-center gap-4">
           <NuxtLink to="/" class="px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors">
             立即试用
           </NuxtLink>
           <a href="https://github.com/gzyxds/buidai" target="_blank" class="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
             GitHub 源码
           </a>
         </div>
       </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  RocketLaunchIcon,
  UserGroupIcon,
  CommandLineIcon,
  HeartIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  CubeTransparentIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '关于我们 - BuidAI',
  meta: [
    { name: 'description', content: 'BuidAI 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。' }
  ]
})

const values = [
  {
    title: '用户至上',
    desc: '我们深入理解开发者和企业的痛点，始终将用户体验放在首位，打造真正解决问题的产品。',
    icon: UserGroupIcon
  },
  {
    title: '技术驱动',
    desc: '保持对前沿技术的敏锐嗅觉，不断探索 AI 的边界，将最新的研究成果转化为实用的工具。',
    icon: CommandLineIcon
  },
  {
    title: '开放共赢',
    desc: '我们相信开源的力量，致力于构建开放的生态系统，与开发者和合作伙伴共同成长。',
    icon: CubeTransparentIcon
  }
]

const stats = [
  { value: '100+', label: '企业客户' },
  { value: '50k+', label: 'API 调用' },
  { value: '500+', label: '活跃开发者' },
  { value: '99.9%', label: '服务可用性' }
]
</script>

<style scoped>
/* 可选：添加一些微动画 */
</style>
