<template>
  <div class="min-h-screen pt-24 pb-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">文档中心</h1>
        <div class="prose prose-lg max-w-none text-gray-600">
          <p>欢迎访问 BuidAI 文档中心。我们正在为您准备详细的产品使用指南、API 文档和最佳实践案例。</p>
          <div class="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4">
            <div class="text-blue-600 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-blue-900 mb-1">建设中</h3>
              <p class="text-blue-700 text-sm">完整文档预计将在近期上线，敬请期待。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '文档中心 - BuidAI',
  description: 'BuidAI 产品文档与使用指南'
})
</script>