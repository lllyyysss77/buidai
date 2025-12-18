<template>
  <div class="min-h-screen bg-white">
    <!-- 页眉间距 -->
    <div class="h-[72px]"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
      <div class="py-12 lg:py-16">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">文档中心</h1>
          <p class="text-xl text-gray-500 max-w-2xl mx-auto">
            探索 BuidAI 的详细文档，快速构建您的 AI 应用。
          </p>
        </div>

        <div v-if="pending" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
        </div>

        <div v-else-if="error" class="text-center py-12">
          <div class="text-red-500 mb-4">加载文档导航失败</div>
          <button @click="() => refresh()" class="text-primary-600 hover:underline">重试</button>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="section in navigation" :key="section.title" class="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
            <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              {{ section.title }}
            </h2>
            <ul class="space-y-3">
              <li v-for="item in section.children" :key="item.path">
                <NuxtLink
                  :to="item.path"
                  class="group flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover:bg-primary-500 transition-colors"></span>
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 文档中心首页
 *
 * 展示文档导航结构，方便用户快速查找和搜索引擎爬取。
 */

// SEO Meta
useSeoMeta({
  title: '文档中心 - BuidAI',
  description: 'BuidAI 官方文档中心，提供详细的指南、API 参考和最佳实践。'
})

// Fetch All Docs for Crawling and Index
const { data: docs, pending, error, refresh } = await useAsyncData('docs-list', () => queryCollection('docs').all())

// Group by directory (simple implementation)
const navigation = computed(() => {
  if (!docs.value) return []

  const groups: Record<string, any[]> = {}

  docs.value.forEach(doc => {
    // Extract section from path (e.g., /docs/section/page -> section)
    const parts = doc.path.split('/').filter(Boolean)
    const section = parts.length > 1 && parts[1] ? parts[1] : 'General'

    if (!groups[section]) {
      groups[section] = []
    }
    groups[section].push(doc)
  })

  return Object.entries(groups).map(([title, items]) => ({
    title: title.charAt(0).toUpperCase() + title.slice(1),
    children: items
  }))
})
</script>
