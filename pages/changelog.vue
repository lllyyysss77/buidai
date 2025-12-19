<template>
  <div class="min-h-screen bg-gray-50 py-24 sm:py-32">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12">
        <!-- Left Sidebar: Title & Intro -->
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-32">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">更新日志</h1>
            <p class="text-lg text-gray-600 mb-8">
              了解 BuidAI 的最新进展、功能更新和改进。我们要持续进化，为您提供更好的 AI 应用构建体验。
            </p>
            
            <!-- Optional: Subscribe or other meta info could go here -->
            <div class="hidden lg:block">
              <h3 class="text-sm font-semibold text-gray-900 mb-3">关于版本</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-primary-600"></span>
                  <span>主要版本 (Major)</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span>常规更新 (Minor/Patch)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Content: Timeline -->
        <div class="lg:col-span-8">
          <UChangelogVersions :versions="versions" />
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

const versions = ref([
  {
    title: 'BuidAI 2.0',
    description: '全新的 AI 智能体编排引擎，支持多模态输入输出，性能提升 300%。重构了工作流设计器，带来更流畅的拖拽体验。',
    date: '2025-04-27',
    image: 'https://nuxt.com/assets/blog/v3.17.png', // 占位图
    to: '#',
    target: '_blank',
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
    target: '_blank',
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
])
</script>
