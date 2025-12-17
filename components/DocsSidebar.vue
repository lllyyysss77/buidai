<template>
  <nav class="space-y-1">
    <ul class="space-y-1">
      <li v-for="item in navigation" :key="item.path">
        <!-- 如果有子节点且不是当前页面的直接链接（根据需求调整，通常目录节点也可以点击） -->
        <template v-if="item.children && item.children.length > 0">
          <div class="font-semibold text-gray-900 mt-4 mb-2 px-2 text-sm uppercase tracking-wider">
            {{ item.title }}
          </div>
          <!-- 递归渲染 -->
          <DocsSidebar :navigation="item.children" :level="level + 1" />
        </template>

        <!-- 叶子节点 -->
        <NuxtLink
          v-else
          :to="item.path"
          class="block px-2 py-1.5 text-sm rounded-md transition-colors"
          :class="[
            route.path === item.path
              ? 'bg-[#6541f8]/10 text-[#6541f8] font-medium'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            level > 0 ? 'ml-0' : ''
          ]"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  navigation: {
    type: Array as PropType<any[]>,
    required: true
  },
  level: {
    type: Number,
    default: 0
  }
})

const route = useRoute()
</script>
