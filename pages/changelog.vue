<template>
  <div class="min-h-screen bg-gray-50 pt-32 pb-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">更新日志</h1>
          <p class="text-xl text-gray-600">BuidAI 产品更新迭代记录</p>
        </div>

        <div class="space-y-12">
          <div v-for="version in versions" :key="version.title" class="relative pl-8 sm:pl-32 py-6 group">
            <!-- Timeline Line -->
            <div class="absolute left-8 sm:left-32 top-0 bottom-0 w-px bg-gray-200 group-last:bottom-auto group-last:h-6"></div>
            
            <!-- Date Badge (Desktop) -->
            <div class="hidden sm:flex absolute left-0 top-6 w-24 justify-end">
              <span class="text-sm font-medium text-gray-500">{{ version.date }}</span>
            </div>

            <!-- Content Card -->
            <div class="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <!-- Timeline Dot -->
              <div class="absolute -left-10 sm:-left-[3.25rem] top-8 w-4 h-4 rounded-full border-2 border-white shadow-sm" :class="version.isMajor ? 'bg-[#6541f8] ring-4 ring-[#6541f8]/10' : 'bg-gray-300'"></div>

              <div class="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                <div class="flex-grow">
                  <div class="flex items-center gap-3 mb-2">
                    <h2 class="text-xl font-bold text-gray-900">{{ version.title }}</h2>
                    <span v-if="version.isMajor" class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#6541f8]/10 text-[#6541f8]">
                      Major
                    </span>
                  </div>
                  <div class="sm:hidden text-sm text-gray-500 mb-3">{{ version.date }}</div>
                </div>
                
                <NuxtLink 
                  v-if="version.to" 
                  :to="version.to"
                  target="_blank"
                  class="flex-shrink-0 inline-flex items-center text-sm font-medium text-[#6541f8] hover:text-[#5335c9]"
                >
                  查看详情
                  <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </NuxtLink>
              </div>

              <p class="text-gray-600 leading-relaxed mb-6">{{ version.description }}</p>

              <div v-if="version.image" class="rounded-xl overflow-hidden border border-gray-100 mb-6">
                <img :src="version.image" :alt="version.title" class="w-full h-auto object-cover" loading="lazy" />
              </div>

              <div v-if="version.authors?.length" class="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div class="flex -space-x-2">
                  <img 
                    v-for="author in version.authors" 
                    :key="author.name"
                    :src="author.avatar.src" 
                    :alt="author.avatar.alt"
                    class="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100"
                  />
                </div>
                <div class="text-sm text-gray-500">
                  发布者: <span class="font-medium text-gray-900">{{ version.authors.map(a => a.name).join(', ') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '更新日志 - BuidAI',
  description: 'BuidAI 产品版本更新历史与功能迭代记录'
})

const versions = [
  {
    title: 'BuidAI 2.0',
    description: '全新的 AI 智能体编排引擎，支持多模态输入输出，性能提升 300%。重构了工作流设计器，带来更流畅的拖拽体验。',
    date: '2025-04-27',
    image: 'https://nuxt.com/assets/blog/v3.17.png', // 占位图
    to: '#',
    isMajor: true,
    authors: [
      {
        name: 'BuidAI Team',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/1?v=4',
          alt: 'Team'
        }
      }
    ]
  },
  {
    title: 'v1.5.0 - 企业级权限管理',
    description: '新增 RBAC 权限控制系统，支持细粒度的资源访问策略。优化了团队协作流程，支持多人实时编辑同一应用。',
    date: '2025-03-07',
    to: '#',
    authors: [
      {
        name: 'Dev Team',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/2?v=4',
          alt: 'Dev'
        }
      }
    ]
  },
  {
    title: 'v1.0.0 - 正式发布',
    description: 'BuidAI 正式版上线！包含核心的 AI 应用构建、知识库管理及 API 发布功能。',
    date: '2024-12-24',
    isMajor: true,
    authors: [
      {
        name: 'Product Team',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/3?v=4',
          alt: 'Product'
        }
      }
    ]
  }
]
</script>